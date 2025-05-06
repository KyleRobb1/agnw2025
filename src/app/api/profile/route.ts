import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    
    const user = await db.collection('users').findOne(
      { email: session.user.email },
      { projection: { password: 0 } }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get user's tickets
    const tickets = await db
      .collection('tickets')
      .find({ userId: user._id })
      .toArray();

    return NextResponse.json({
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      tickets: tickets.map(ticket => ({
        _id: ticket._id.toString(),
        type: ticket.type,
        price: ticket.price,
        createdAt: ticket.createdAt
      }))
    });
  } catch (error) {
    console.error('Profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
