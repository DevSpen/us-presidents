import { presidents } from "..";
import { party } from "../types/party";
import { President } from "../types/President";

/**
 * Searches presidents by their party.
*/
export function searchPresidentsByParty(query: party): President[] {
  return presidents.filter((president) => president.party === query);
}
