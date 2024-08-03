import { NextResponse } from "next/server";
import prisma from "../db";

export async function GET() {
    try {
        const messages = await prisma.message.findMany();
        const rooms = Array.from(new Set(messages.map(m => m.room)))
        const response = NextResponse.json({ message: "All rooms", data: rooms }, { status: 200 });
        response.headers.set('Cache-Control', 'no-store');

        return response;    }
    catch (error: any) {
        return NextResponse.json({ message: error.message || "Failed to get rooms" }, { status: 500 })
    }
}