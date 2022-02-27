import { party } from "./party";


/**
 * Data assumed by each president.
 */
export interface President {
  order: number;
  name: string;
  description: string;
  wikipedia: string;
  term: {
    startYear: number;
    endYear: number | null;
    served: number | null;
  };
  party: party;
  life: {
    birthYear: number;
    deathYear?: number | null;
  };
}
