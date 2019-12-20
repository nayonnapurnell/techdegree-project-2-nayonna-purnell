/******************************************
Treehouse Techdegree:
FSJS project 2 - listItems Filter and Pagination
Developer: Nayonna Purnell
Date: December 5, 2019
******************************************/
   
const listItems = document.querySelectorAll('.student-item'); //grabs each student individually
const studentsPerPage = 10;  //The number of students per page
const page = document.querySelector('.page'); //the top level parentNode



// showPage tells the program to post 10 listItems items per page.
const showPage = (list, page) => {
  const startIndex = (studentsPerPage * page) - studentsPerPage;
  const endIndex = studentsPerPage * page;

  for(let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex)
      {
        list[i].style.display = 'block';
      }
    else {
      list[i].style.display = 'none' ;
      }
  }
}
showPage(listItems, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  //number of pages needed for the total amount of student list items
  //In this example there is 54
  let totalNumberOfPages = Math.ceil(list.length/studentsPerPage);


//Select the page and append the pagination
  const pagination = document.createElement('div');
  pagination.className='pagination';
  page.appendChild(pagination);

  //Create the Ul elements for the pagination
  let paginationUl = document.createElement('ul');

  for (i = 0; i < totalNumberOfPages.length; i++) {
     
    let li = document.createElement('li');
    let a = document.createElement('a');

     //Append the children nodes to their parents in the pagination
     pagination.appendChild(paginationUl);
     paginationUl.appendChild(li);
     li.appendChild(a);
     a.href = '#';
     if (i === 0) {
      a.className = 'active';
  }

    //An event listener for the 'A Tags'
     a.addEventListener('click', (e) => {
     let pageLinks = document.querySelectorAll('a');
     for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[i].className = ' ';
     }

    e.target.className = 'active';

    showPage(list, 0);

    });

  }
}
appendPageLinks(listItems);

