  const titleClickHandler = function(event){
    const clickedElement = this;
  
    /* [DONE] remove class 'active' from all article links  */

    const titleList = document.querySelectorAll(.optTitleListSelector);
  
    function clearMessages(){
      document.getElementById('messages').innerHTML = '.titleList';
    }

    for(let link of activeLinks){
      link.classList.remove('active');
    }
  
    /* [IN PROGRESS] add class 'active' to the clicked link */
  

    clickedElement.classList.add('active');
  
    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll(.optTitleListSelector);

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
  
  const links = document.querySelectorAll(.optTitleListSelector);
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
