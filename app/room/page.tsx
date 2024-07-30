"use client";

import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  SpinnerIcon,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const room = searchParams.get('room') || "default-room";
  const name = searchParams.get('username') || "anonymous-user";
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `/api/get-participant-token?room=${room}&username=${name}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [name, room]);

  const handleLeave = () => {
    router.push('/');
  };

  if (token === "") {
    return <div className="flex w-full h-[62vh] justify-center items-center gap-2">
        <SpinnerIcon className="animate-spin text-4xl" fontSize={250} />
        <p>Joining the room...</p>
        </div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme='default'
      style={{ height: '90dvh' }}
      onDisconnected={handleLeave}
    >
      <MyVideoConference />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(90vh - var(--lk-control-bar-height))' }}>
      <ParticipantTile />
    </GridLayout>
  );
}