import { presidents } from "..";
import { President } from "../types/President";

/**
 * Searches presidents by their birth/death year.
*/
export function searchPresidentsByLife(
  query: number | null,
  type: "birth" | "death" | "either" = "either"
): President[] {
  if (type === "birth")
    return presidents.filter((president) => president.life.birthYear === query);

  if (type === "death")
    return presidents.filter((president) => president.life.deathYear === query);

  return presidents.filter(
    (president) =>
      president.life.birthYear === query || president.life.deathYear === query
  );
}