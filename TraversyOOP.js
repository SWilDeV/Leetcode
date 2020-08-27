function Book(title,author,year){
    this.title = title,
    this.author = author,
    this.year = year
};

Book.prototype.GetSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.GetAge = function(){
    const years = new Date().getFullYear() - this.year;
    return  `${this.title} is ${years} years old`
};

Book.prototype.Revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};

const Book1 = new Book('Book One', 'John Doe','2013');
const Book2 = new Book('Book Two', 'Jane Doe','2016');

console.log(Book1);
Book1.Revise('2012');
console.log(Book1);