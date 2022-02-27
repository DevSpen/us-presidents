import { parties } from "./parties";

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
  party: parties;
  life: {
    birthYear: number;
    deathYear?: number | null;
  };
}
