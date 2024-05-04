// Working with Strings - Part 1
const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// 15.1
// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

const isbn = books[0].ISBN;
console.log(isbn[6], isbn[4], isbn[9], isbn[8]);

// 15.2
// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
// const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";

console.log(quote.indexOf("chess"));

// 15.3
// Extract the word "boxing" from the same quote string, and log it to the console.
console.log(quote.indexOf("boxing"));
console.log(quote.slice(69, 75));

// 15.4
// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) or false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
// Example 1:
// isContributor('Julie Sussman (Contributor)');
// Expected Output:
// true
// Example 2:
// isContributor('Robert Sedgewick');
// Expected Output:
// false

const isContributor = function (author) {
  return console.log(author.endsWith("(Contributor)"));
};
isContributor("Robert Sedgewick");
isContributor("Julie Sussman (Contributor)");

// 16.1
// Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if it exists).
// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.
// Example :
// normalizeAuthorName('  JuliE sussMan (Contributor)')
// Expected Output:
// // "Julie Sussman"

const normalizeAuthorName = function (authorName) {
  const names = authorName.toLowerCase().split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" ").replace("(contributor)", ""));
};

normalizeAuthorName("apurba dutta");
normalizeAuthorName("JuliE sussMan (Contributor)");

// 16.2
// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

const { title: newBookTitle } = books[1];
console.log(newBookTitle.replace("Programs", "Software"));

// 16.3
// Write a function called logBookTheme that takes book's title (string), and logs to the console:
// "This book is about computers" if the title starts with the word "computer",
// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,
// and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".
// The title may contain both small and capital letters.

const logBookTheme = function (title) {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.startsWith("computer")) {
    console.log("This book is about computers");
  } else if (
    lowerTitle.includes("algorithms") &&
    lowerTitle.includes("structures")
  ) {
    console.log("This book is about algorithms and data structures");
  } else if (lowerTitle.endsWith("system") || lowerTitle.endsWith("systems")) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
};
logBookTheme("Computer Science");
logBookTheme("Algorithms and Data Structures");
logBookTheme("Operating Systems");
logBookTheme("Systems and Architechture");

// 17.1
// Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.
// Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).
// Example :
// const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);
// Expected Output:
// science
// computing
// computer science
// algorithms
// business
// operating systems
// networking
// electronics

const logBookCategories = function (categories) {
  const categoryArray = categories.split(";");
  for (const category of categoryArray) {
    console.log(category);
  }
};
const bookCategories =
  "science;computing;computer science;algorithms;business;operating systems;networking;electronics";
logBookCategories(bookCategories);
//////////////////////
// just for check
// const a = bookCategories.split(";");
// // console.log(a);
// const b = a.join();
// // console.log(b);
// for (const c of a){
//   console.log(c);
// }

// 17.2
// Now, the opposite. Each book from the books array has the keywords property.
// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.
// Example :
// getKeywordsAsString(books);
// Expected Output:
// computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development
