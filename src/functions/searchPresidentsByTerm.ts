import { presidents } from "..";
import { President, PartOfTerm } from "../typings";

/**
 * Searches presidents by their start and/or end term year.
 */
export function searchPresidentsByTerm(
  query: number | null,
  type: PartOfTerm
): President[] {
  switch (type) {
    case PartOfTerm.Start: {
      return presidents.filter(({ term }) => term.startYear === query);
    }

    case PartOfTerm.End: {
      return presidents.filter(({ term }) => term.endYear === query);
    }

    case PartOfTerm.Either: {
      return presidents.filter(
        ({ term }) => term.startYear === query || term.endYear === query
      );
    }
  }
}
