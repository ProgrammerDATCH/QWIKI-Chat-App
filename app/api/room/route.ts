import { NextResponse } from "next/server";
import prisma from "../db";

export async function GET() {
    try {
        const messages = await prisma.message.findMany();
        const rooms = Array.from(new Set(messages.map(m => m.room)))
        return NextResponse.json({ message: "All rooms", data: rooms }, { status: 200 })
    }
    catch (error: any) {
        return NextReseponse.json({ message: error.message || "Failed to get rooms" }, { status: 500 })
    }
}
export const revalidate = 0;