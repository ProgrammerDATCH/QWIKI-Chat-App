import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface IMessage {
  id: string;
  message: string;
  time: string;
  sender: string;
  room: string;
}
