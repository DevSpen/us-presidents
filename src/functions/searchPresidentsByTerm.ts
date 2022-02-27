import { presidents } from "..";
import { President } from "../types/President";



/**
 * Searches presidents by their start and/or end term year.
 */
export function searchPresidentsByTerm(
  query: number | null,
  type: "start" | "end" | "either" = "either"
): President[] {
  if (type === "start")
    return presidents.filter((president) => president.term.startYear === query);

  if (type === "end")
    return presidents.filter((president) => president.term.endYear === query);

  return presidents.filter(
    (president) =>
      president.term.startYear === query || president.term.endYear === query
  );
}