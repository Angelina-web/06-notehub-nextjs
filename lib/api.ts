import axios from "axios";
import type { Note, NotesHttpResponse } from "@/types/note";

const BASE_URL = "https://notehub-public.goit.study/api";
const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}

export const fetchNotes = async (
  page: number,
  query: string
): Promise<NotesHttpResponse> => {
  const response = await axios.get<NotesHttpResponse>(`${BASE_URL}/notes`, {
    params: {
      search: query,
      page,
      perPage: 12,
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const res = await axios.get<Note>(`${BASE_URL}/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return res.data;
};

export const createNote = async (
  noteData: CreateNotePayload
): Promise<Note> => {
  const res = await axios.post<Note>(`${BASE_URL}/notes`, noteData, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return res.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const res = await axios.delete<Note>(`${BASE_URL}/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return res.data;
};
