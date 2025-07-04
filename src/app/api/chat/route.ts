import { NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

// POST: Send a new message
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { content } = await req.json();

  if (!content || typeof content !== "string") {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const message = await prisma.message.create({
    data: {
      content,
      user_id: user.user_id,
    },
  });

  return NextResponse.json(message);
}

// GET: Fetch latest messages
export async function GET() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return NextResponse.json(messages.reverse()); // reverse for chronological order
}
