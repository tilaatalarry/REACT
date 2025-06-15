import { getDB } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const hashed = await hashPassword(password);
    const db = await getDB();

    await db.query(
      'INSERT INTO users (username, email, pass_word) VALUES (?, ?, ?)',
      [username, email, hashed]
    );

    return Response.json({ message: 'User registered' });
  } catch (err) {
    console.error('DB error:', err);
    return Response.json({ error: 'User exists or error occurred' }, { status: 500 });
  }
}
