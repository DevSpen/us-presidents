import { presidents } from "..";
import { parties } from "../types/parties";
import { President } from "../types/President";

export function searchPresidents(query: string): President[] {
  if (!query) return [];
  return presidents.filter((president) =>
    president.name.toLowerCase().includes(query)
  );
}

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

export function searchPresidentsByParty(query: parties): President[] {
  return presidents.filter((president) => president.party === query);
}
