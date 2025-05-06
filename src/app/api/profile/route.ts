import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/options';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
  
    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({
      email: session.user.email,
      name: session.user.name
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch profile' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
