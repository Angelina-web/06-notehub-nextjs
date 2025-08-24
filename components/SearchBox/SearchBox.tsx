import css from "./SearchBox.module.css";
import { ChangeEvent } from "react";
import type { Note } from "../../types/note";

interface SearchBoxProps {
  onChange: (value: string) => void;
}
 interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}
export default function SearchBox({ onChange }: SearchBoxProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
