// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    this.expandButton = element.querySelector('.expandButton');
    // create a reference to the ".expandButton" class. 
    //this.expandButton();
    this.element.addEventListener('click', () => this.expandArticle(element))
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    
  }

  expandArticle() {
    this.element.classList.toggle('article-open');
    // console.log('this is the expand article method')


    // Using our reference to the article element, add or remove a class to expand or hide the article.

  }

  expandButton() {
    // this.element.addEventListener('click', () => this.expandButton(element))
    console.log('this is the expand button method') 
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article(article) );
// console.log(articles[0].expandArticle());

