import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return Response.json({ error: 'Token missing' }, { status: 401 });
  }

  const user = verifyToken(token);

  if (!user) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }

  return Response.json({ user });
}
