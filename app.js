console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

   /* for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }   */

    arr.forEach((num) => {
        sum += num;
    });

    return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 4, 8, 9]));
console.log(arraySum([8, 8, 8, 7, 7, 7]));
console.log(arraySum([2, 2, 2, 4, 4, 4]));
console.log(arraySum([7, 7, 7, 3, 3, 3]));
console.log(arraySum([2, 2, 2, 2, 5, 5, 5]));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "If You Give A Mouse A Cookie",
    author: "Laura Numroff",
    illustrator: "Felicia Bond",
    publisher: "Harper and Row",
    year: 1985,
    read: 6,
    pages: 15
};

function printFave() {
    console.log(
        `My favorite book as a kid was ${this.title} by ${this.author} and ${this.illustrator} came out
        in ${this.year} published by ${this.publisher}. I read it about ${this.read} times and enjoyed all of its
        ${this.pages} pages.`
        );
}

book.printFave = printFave;

book.printFave();

function printQuote() {
    console.log(
        `${this.title}, they will ask for a plate. ${this.title}, it will ask for ${this.pages} cookies.`
    );
}

book.printQuote = printQuote;

book.printQuote();
