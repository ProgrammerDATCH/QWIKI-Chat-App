import { NextRequest, NextResponse } from "next/server";
import prisma from "../db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { id, message, time, sender, room } = body;
        if (!id || !message || !time || !sender || !room) return NextResponse.json({ message: "Missing params" }, { status: 400 });
        const createdMessage = await prisma.message.create({ data: { id, message, time, sender, room } })
        if (!createdMessage) return NextResponse.json({ message: "Failed, try again" }, { status: 500 });
        return NextResponse.json({ message: "Message created" }, { status: 201 })
    }
    catch (error: any) {
        return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 })
    }
}

export async function GET(req: NextRequest) {
    try {
        const room = req.nextUrl.searchParams.get('room');
        if (!room) return NextResponse.json({ message: "Provide room please" }, { status: 400 });
        return NextResponse.json({ message: "all messages", data: await prisma.message.findMany({ where: { room } }) }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 })
    }
}