import { presidents } from "../index";
import { President } from "../types/President";

export function randomPresident(): President {
  return presidents[Math.floor(Math.random() * presidents.length)];
}
