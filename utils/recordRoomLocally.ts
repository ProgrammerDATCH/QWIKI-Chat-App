/* eslint-disable import/no-anonymous-default-export */
import { EgressClient, EgressInfo, EncodedFileOutput, EncodedFileType } from "livekit-server-sdk";

const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;
const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL || 'ws://localhost:7880';

const fileOutput = new EncodedFileOutput({
  fileType: EncodedFileType.MP4,
  filepath: './video/room-recording.mp4',
});

const egressClient = new EgressClient(wsUrl, apiKey, apiSecret);

// FUNCTIONS
const startRoomRecording = async (roomName: string): Promise<EgressInfo> => {
  return await egressClient.startRoomCompositeEgress(roomName, { file: fileOutput });
}

const stopRoomRecording = async (egressId: string): Promise<EgressInfo> => {
  return await egressClient.stopEgress(egressId);
}

export default { startRoomRecording, stopRoomRecording };