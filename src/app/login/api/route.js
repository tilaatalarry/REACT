import { getDB } from '@/lib/db';
import { comparePasswords, generateToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const db = await getDB();
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return Response.json({ error: 'User not found' }, { status: 401 });
    }

    const user = rows[0];
    const passwordMatch = await comparePasswords(password, user.pass_word);

    if (!passwordMatch) {
      return Response.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = generateToken({ id: user.id, username: user.username, email: user.email });

    cookies().set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    return Response.json({ message: 'Login successful' }, { status: 200 });
  } catch (err) {
    console.error('Login error:', err);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
