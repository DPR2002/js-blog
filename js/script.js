  const titleClickHandler = function(event){
    const clickedElement = this;
  
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');


    for(let link of activeLinks){
      link.classList.remove('active');
    }
  
    /* [IN PROGRESS] add class 'active' to the clicked link */
  

    clickedElement.classList.add('active');
  
    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('article.active');

    for(let article of activeArticles){
      article.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */

    const articleId = clickedElement.getAttribute("href");
  
    /* find the correct article using the selector (value of 'href' attribute) */

    const articleToDisplay = document.querySelector(articleId);
  
    /* add class 'active' to the correct article */

    articleToDisplay.classList.add('active')
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* for each article */

  const articleList = document.querySelectorAll(optArticleSelector);

  for(let article of articleList){

      /* get the article id */

    const articleId = article.getAttribute('id');

      /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* insert link into titleList */

    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
}

console.log();

generateTitleLinks();
