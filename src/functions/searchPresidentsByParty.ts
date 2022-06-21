import { presidents } from "../data";
import { President, Party } from "../typings";

/**
 * Searches presidents by their party.
 * @param party The party to search.
 */
export function searchPresidentsByParty(party: Party): President[] {
  return presidents.filter((president) => president.party === party);
}
