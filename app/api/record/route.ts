import recordRoom from "@/utils/recordRoom";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { room } = body;
    if (!room) return NextResponse.json({ message: "Room name is required please" }, { status: 400 })
    const info = await recordRoom.startRoomRecording(room);
    if (info.error) {
        return NextResponse.json({ message: "Failed to start recording", data: info.error, stack: info }, { status: 424 })
    }
    return NextResponse.json({ message: "Record started", data: info.egressId, stack: info }, { status: 200 });
}

export async function PUT(req: NextRequest) {
    const body = await req.json();
    const { egressId } = body;
    if (!egressId) return NextResponse.json({ message: "Egress ID is required please" }, { status: 400 })
    const info = await recordRoom.stopRoomRecording(egressId);
    if (info.error) {
        return NextResponse.json({ message: "Failed to stop recording", data: info.error, stack: info }, { status: 424 })
    }
    return NextResponse.json({ message: "Record stopped", data: info.egressId, stack: info }, { status: 200 });
}