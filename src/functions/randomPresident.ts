import { presidents } from "..";
import { President } from "../typings";

/**
 * Gets a random president.
 */
export function randomPresident(): President {
  return presidents[Math.floor(Math.random() * presidents.length)];
}
