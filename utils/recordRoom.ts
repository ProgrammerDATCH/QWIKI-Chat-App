import { EgressClient, EgressInfo, EncodedFileOutput, EncodedFileType, S3Upload } from "livekit-server-sdk";

const accessKey = process.env.AWS_ACCESS_KEY;
const secret = process.env.AWS_ACCESS_SECRET;
const bucket = process.env.AWS_BUCKET;
const region = process.env.AWS_REGION;

const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;
const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL || 'https://cluster.livekit.io';

const fileOutput = new EncodedFileOutput({
    fileType: EncodedFileType.MP4,
    filepath: 'livekit-demo/room-composite-test.mp4',
    output: {
        case: 's3',
        value: new S3Upload({
            accessKey,
            secret,
            bucket,
            region,
        }),
    },
});

const egressClient = new EgressClient(wsUrl, apiKey, apiSecret)

// FUNCTIONS

const startRoomRecording = async (roomName: string): Promise<EgressInfo> => {
    return await egressClient.startRoomCompositeEgress(roomName, { file: fileOutput });
}

const stopRoomRecording = async (egressId: string): Promise<EgressInfo> => {
    return await egressClient.stopEgress(egressId);
}

export default { startRoomRecording, stopRoomRecording };