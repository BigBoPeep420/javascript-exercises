const getTheTitles = function(books) {
    let titles = [];
    books.map(elem => titles.push(elem.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
