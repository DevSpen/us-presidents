import { presidents } from "../index";
import { President } from "../types/President";

/**
 * Gets a random president.
 */
export function randomPresident(): President {
  return presidents[Math.floor(Math.random() * presidents.length)];
}
