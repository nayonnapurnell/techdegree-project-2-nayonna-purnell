/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Developer: Nayonna Purnell
Date: December 5, 2019
******************************************/
   
const list = document.querySelectorAll('.student-list'); // The list of students 
const studentsPerPage = 10;  //The number of students per page
const 


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

// /* Variables to store buttons */
// const page1 = document.querySelector('#1');
// const page2 = document.querySelector('#2');
// const page3 = document.querySelector('#3');
// const page4 = document.querySelector('#4');
// const page5 = document.querySelector('#5');

// btn3.addEventListener('click', () => {

//   // Invoke the function to set the third element 

//   // Helpful log statement to test function
//   console.log('Third button is functional!');
// });

const appendPageLinks = (list) => {

  
  



}


 