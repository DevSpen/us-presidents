# us-presidents

Search, fetch, and get data regarding United States presidents.

## Installation

```sh-session
npm install us-presidents
```

## Data

```ts
import { presidents } from "us-presidents";

console.log(presidents); //Array of objects containing info about all US presidents
```

## Functions

### `randomPresident()`

Gets a random president.

```ts
import { randomPresident } from "us-presidents";

console.log(randomPresident());

/*
Example Response:

{
  order: 23,
  name: 'Benjamin Harrison',
  description: 'Benjamin Harrison was an American lawyer and politician who served as the 23rd president of the United States from 1889 to 1893. He was a grandson of the ninth president, William Henry Harrison, and a great-grandson of Benjamin Harrison V, a founding father who signed the United States Declaration of Independence.',
  wikipedia: 'https://wikipedia.org/wiki/Benjamin_Harrison',
  term: { startYear: 1889, endYear: 1893, served: 1 },
  party: 'Republican',
  life: { birthYear: 1833, deathYear: 1901 }
}
*/
```

### `searchPresidents(query: string)`

Search presidents by their name.

```ts
import { searchPresidents } from "us-presidents";

console.log(searchPresidents("donald trump")); //Returns a array of results, in this case it will only be one result
/*
[
  {
    order: 45,
    name: 'Donald Trump',
    description: 'Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.',
    wikipedia: 'https://en.wikipedia.org/wiki/Donald_Trump',
    term: { startYear: 2017, endYear: 2021, served: 1 },
    party: 'Republican',
    life: { birthYear: 1946, deathYear: null }
  }
]
*/

console.log(searchPresidents("donald trump")[0]); //Returns the first result, instead of an array of results
```

### `searchPresidentsByTerm(year: number, type: "start" | "end" = "either")`

Returns an array of presidents who started and/or ended their term in a certain year.

```ts
import { searchPresidentsByTerm } from "us-presidents";

console.log(searchPresidentsByTerm(2021));
/*
Returns Donald Trump and Joe Biden because Trump's end year was 2021, and Biden's start year was 2021:
[
  {
    order: 45,
    name: 'Donald Trump',
    description: 'Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021.',
    wikipedia: 'https://en.wikipedia.org/wiki/Donald_Trump',
    term: { startYear: 2017, endYear: 2021, served: 1 },
    party: 'Republican',
    life: { birthYear: 1946, deathYear: null }
  },
  {
    order: 46,
    name: 'Joe Biden',
    description: 'Joseph Robinette Biden Jr. is an American politician who is the 46th and current president of the United States. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under Barack Obama and represented Delaware in the United States Senate from 1973 to 2009.',
    wikipedia: 'https://en.wikipedia.org/wiki/Joe_Biden',
    term: { startYear: 2021, endYear: null, served: null },
    party: 'Democrat',
    life: { birthYear: 1942, deathYear: null }
  }
]
*/

console.log(searchPresidentsByTerm(2021, "start")); //Would just return Joe Biden

console.log(searchPresidentsByTerm(2021, "end")); //Would just return Donald Trump

console.log(searchPresidentsByTerm(null, "end")); //Would return Joe Biden as his term doesn't have an end year yet
```

### `searchPresidentsByLife(year: number, type: "birth" | "death" = "either")`

Returns an array of presidents who were born and/or diseased in a certain year.

```ts
import { searchPresidentsByLife } from "us-presidents";

console.log(searchPresidentsByLife(1732)); //Returns an array of anyone who was born or diseased in 1732, in this case only George Washington
console.log(searchPresidentsByLife(1946, "birth")); //Returns an array of any president who was born in 1946, Bill Clinton; Donald Trump; and George W. Bush
console.log(searchPresidentsByLife(null, "death")); //Returns an array of every president who is still alive
```

### `searchPresidentsByParty(partyName: "Republican" | "Democrat" | "Whig" |"Democratic-Republican" | "Federalist" | "National Union" )`

Returns an array of all presidents of a certain party.

```ts
import { searchPresidentsByParty } from "us-presidents";

console.log(searchPresidentsByParty("Republican")); //Returns an array of all presidents of the Republican party
console.log(searchPresidentsByParty("Democrat")); //Returns an array of all presidents of the Democrat party
```
