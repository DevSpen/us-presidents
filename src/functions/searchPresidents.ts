import { presidents } from "..";
import { President } from "../types/President";

/**
 * Searches presidents by name.
 */
export function searchPresidents(query: string): President[] {
  if (!query) return [];
  return presidents.filter((president) =>
    president.name.toLowerCase().includes(query)
  );
}
