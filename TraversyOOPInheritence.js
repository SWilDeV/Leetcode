function Book(title,author,year){
    this.title = title,
    this.author = author,
    this.year = year
};

Book.prototype.GetSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//inheritance of book properties + new property month
function Magazine(title,author,year, month){
    Book.call(this, title, author, year);
    
    this.month = month;
};
//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Create Magazine object
const Magazine1 = new Magazine('Mag One', 'Priscilla','2019','March');


console.log(Magazine1.GetSummary());
