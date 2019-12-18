/******************************************
Treehouse Techdegree:
FSJS project 2 - listItems Filter and Pagination
Developer: Nayonna Purnell
Date: December 5, 2019
******************************************/
   
const studentlistItems = document.querySelectorAll('.student-listItems'); // The listItems of all students 
const listItems = document.getElementsByTagName('li'); //grabs each student individually
const studentsPerPage = 10;  //The number of students per page



// showPage tells the program to post 10 listItems items per page.
const showPage = (listItems, studentsPerPage) => {
  
  const startIndex = (listItems * studentsPerPage) - studentsPerPage;
  const endIndex = (listItems * studentsPerPage) - 1;

  for(var i = 0; i < listItems.length; i++) {
    if (i >= startIndex && i <= endIndex)
      {
        listItems[i].style.display === 'none' ;
      }
    else {
        listItems[i].style.display === 'block';
      }
  }
}
(showPage(listItem, 1));
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (listItems) => {
  //number of pages needed for the total amount of student list items
  //In this example there is 54
  const totalNumberOfPages = Math.ceil(listItems.length/studentsPerPage);


//Select the page and append the pagination
  let page = document.querySelectorAll('.page');
  let pagination = document.createElement('div');
  pagination.className='pagination';
  page.appendChild(pagination);

  //Create the Ul and append it to the pagination
  let paginationUl = document.createElement('ul');
  pagination.appendChild(paginationUl);

  for (i = 0; i < totalNumberOfPages.length; i++) {
     let li = document.createElement('li');
     let a = document.createElement('a');
     paginationUl.appendChild(li);
     a.href = '#';

    //An event listener for the 'A Tags'
     a.addEventListener('click', (event) => {
     let pageLinks = document.getElementsByTagName('a');
     for (i = 0; i < pageLinks.length; i++) {
      pageLinks[i].className = ' ';
     }
     event.target.className = 'active';
     
      showPage(li, event.target.textContent);
    });
}
}
appendPageLinks(listItems);

