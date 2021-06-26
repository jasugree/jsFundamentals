const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'WenvK9CzuctxZqQJbo7bXO6G9Ulx8bSM'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav =  false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e){
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log('URL:', url);
    if(startDate !== ''){
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };
    if(endDate.value !== ''){
        url += '&end_date' + endDate.value;
    };
    fetch(url)
        .then(function(result){
            console.log(result)
            return result.json();
        }).then(function(json){
            displayResults(json);
        });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild); //1
    }
    let articles = json.response.docs;

 if(articles.length >= 10) {
    nav.style.display = 'block'; //shows the nav display if 10 items are in the array
  } else {
    nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
  }
  
    if(articles.length === 0) {
      console.log("No results");
    } else {
      for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a'); //1
        let img = document.createElement('img');
        let para = document.createElement('p');
        let clearfix = document.createElement('div');
  
        let current = articles[i]; //2
        console.log("Current:", current); //3
  
        link.href = current.web_url; //4
        link.textContent = current.headline.main; //5

        para.textContent = 'Keywords:';

        for(let j = 0; j < current.keywords.length; j++){
            let span = document.createElement('span');
            span.textContent += current.keywords[j].value + ' ';
            para.appendChild(span);
        }

        if(current.multimedia.length > 0){
            img.src ='https://nytimes.com/' +current.multimedia[0].url;
            img.alt = current.headline.main;
        }


        clearfix.setAttribute('class', 'clearfix');
  
        article.appendChild(heading);
        heading.appendChild(link); //6
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
      }
    }
  };

  function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}

function previousPage(e){
    if(pageNumber > 0){
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
}