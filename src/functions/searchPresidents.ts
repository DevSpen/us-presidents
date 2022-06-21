import { presidents } from "../data";
import { President } from "../typings";

/**
 * Searches presidents by name.
 * @note Returns a empty array if no presidents are found.
 * @deprecated Please implement your own search function, so you can get the behavior you expect. Consider using `findPresident()` if you have the president's full name instead.
 */
export function searchPresidents(query: string): President[] {
  if (!query) return [];
  return presidents.filter((president) =>
    president.name.toLowerCase().includes(query)
  );
}
