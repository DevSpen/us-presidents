import { Party } from "../types/Party";


/**
 * Data assumed by each president.
 */
export interface President {
  order: number;
  name: string;
  description: string;
  wikipedia: `https://wikipedia.org/wiki/${string}`;
  term: {
    startYear: number;
    endYear: number | null;
    served: number | null;
  };
  party: Party;
  life: {
    birthYear: number;
    deathYear?: number | null;
  };
}
