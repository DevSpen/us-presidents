import { presidents } from "../data";

/**
 * Finds a president using their exact name (as used in our data sample).
 */
export function findPresident(name: string) {
  return presidents.find(({ name: pname }) => pname === name);
}
