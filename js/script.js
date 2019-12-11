/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Developer: Nayonna Purnell
Date: December 5, 2019
******************************************/
   
const list = document.querySelectorAll('.student-list'); // The list of students 
const studentsPerPage = 10;  //The number of students per page


// showPage tells the program to post 10 list items per page.
const showPage = (list, studentsPerPage) => {
  
  const startIndex = (list * studentsPerPage) - studentsPerPage;
  const endIndex = (list * studentsPerPage) - 1;

  for(var i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex)
      {
        list[i].style.display === 'none' ;
      }
    else {
        list[i].style.display === 'block';
      }
  }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  
  const totalNumberOfPages = Math.ceil(list.length/studentsPerPage);

  const div = document.createElement('div');
  div.className = 'pagination';
  const page = document.createElement('.page');
  div.appendChild(page);
  const newUl = document.createElement('ul');
  newUl = document.createElement('.pagination');

  

  for (i = 0; i < totalNumberOfPages.length; i++) {
    const li = document.createElement('li');
    page.appendChild(li);
    const a = document.createElement('a');
    li.appendChild(a);
    a.textContent = '#';

    a.addEventListener('click', (event))
  }



 
  
  



}


 