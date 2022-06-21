import { presidents } from "../data";
import { President, PartOfLife } from "../typings";

/**
 * Searches presidents by their birth/death year.
 */
export function searchPresidentsByLife(
  query: number | null,
  type: PartOfLife
): President[] {
  switch (type) {
    case PartOfLife.Birth: {
      return presidents.filter(({ life }) => life.birthYear === query);
    }

    case PartOfLife.Death: {
      return presidents.filter(({ life }) => life.deathYear === query);
    }

    case PartOfLife.Life: {
      return presidents.filter(
        ({ life }) => life.deathYear === query || life.birthYear === query
      );
    }
  }
}
