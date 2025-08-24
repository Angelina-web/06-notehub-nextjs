import css from "./NotesPage.module.css";
import NoteListClient from "./Notes.client";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1],
    queryFn: () => fetchNotes(1, ""),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteListClient />
      </HydrationBoundary>
    </div>
  );
}