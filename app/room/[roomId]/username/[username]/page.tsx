/* eslint-disable */
"use client"

import {
  LiveKitRoom,
  SpinnerIcon,
  VideoConference,
  useChat,
} from "@livekit/components-react";

import "@livekit/components-styles";
import { useEffect, useRef, useState } from "react";
import { useParams } from 'next/navigation';
import axios from "axios";
import { IMessage } from "@/lib/utils";

export default function RoomContent() {
  const { roomId: room, username: name }: { roomId: string, username: string } = useParams();
  const [token, setToken] = useState("");
  const [egressId, setEgressId] = useState("")

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

  }, []);

  const startRecording = async () => {
    try {
      const res = await axios.post('/api/record', { room })
      setEgressId(res.data.data)
      alert("Success")
      console.dir(res.data)
    }
    catch (error) {
      alert("Error")
      console.dir(error)
    }
  }

  const stopRecording = async () => {
    try {
      const res = await axios.put('/api/record', { egressId })
      alert("Success")
      console.dir(res.data)
    }
    catch (error) {
      alert("Error")
      console.dir(error)
    }
  }

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
      className="relative"
    >
      <VideoConference />

      <div className="absolute left-2 bottom-2 flex gap-2 lk-button-group">
        <button onClick={startRecording} className="lk-button">START</button>
        <button onClick={stopRecording} className="lk-button">STOP</button>
      </div>
      
    </LiveKitRoom>
  );
}

function ChatHandler({ owner, room }: { owner: string, room: string }) {
  const { chatMessages } = useChat();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const previousMessagesRef = useRef<IMessage[]>([]);

  useEffect(() => {
    const decodedOwner = decodeURIComponent(owner);
    const newMessages: IMessage[] = chatMessages
      .filter(chatMessage => chatMessage.from?.identity === decodedOwner)
      .map(chatMessage => ({
        id: chatMessage.id,
        message: chatMessage.message,
        time: chatMessage.timestamp.toString(),
        sender: decodedOwner,
        room: room,
      }));

    setMessages(prevMessages => {
      const addedMessages = newMessages.filter(newMessage => !prevMessages.some(prevMessage => prevMessage.id === newMessage.id));
      const removedMessages = prevMessages.filter(prevMessage => !newMessages.some(newMessage => newMessage.id === prevMessage.id));
      if (addedMessages.length > 0) {
        handleAddMessage(addedMessages[0])
      }
      if (removedMessages.length > 0) {
      }
      return newMessages;
    });
    previousMessagesRef.current = newMessages;
  }, [chatMessages, owner, room]);

  const handleAddMessage = async (newMessage: IMessage) => {
    try {
      await axios.post('/api/message', newMessage);
    }
    catch (error) {
      console.error(error)
    }
  }

  return null;
}