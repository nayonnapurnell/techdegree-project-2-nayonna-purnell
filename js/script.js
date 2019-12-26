/******************************************
Treehouse Techdegree:
FSJS project 2 - listItems Filter and Pagination
Developer: Nayonna Purnell
Date: December 5, 2019
******************************************/
const studentList = document.querySelectorAll('.student-item');//List of students- child elements 
const studentsPerPage = 10;  //The number of students per page


// showPage tells the program to post 10 listItems items per page.
function showPage (list, page) {
  
  const startIndex = (page * studentsPerPage) - studentsPerPage;
  const endIndex = page * studentsPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex)
      {
        list[i].style.display = 'block';
      }
    else {
        list[i].style.display = 'none' ;
      }
  }
};

// /*** 
//    Create the `appendPageLinks function` to generate, append, and add 
//    functionality to the pagination buttons.
// ***/

 function appendPageLinks (list) {
  //number of pages needed for the total amount of student list items
  //In this example there is 54
  const totalNumberOfPages = Math.ceil(studentList.length/studentsPerPage);


//Select the page and append the pagination
  const page = document.querySelector('.page');
  const div = document.createElement('div');
  div.className='pagination';
  page.appendChild(div);

  //Create the Ul elements for the pagination
  let ul = document.createElement('ul');
  div.appendChild(ul);

  for (let i = 0; i < totalNumberOfPages; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.appendChild(a);
    ul.appendChild(li);
    
    a.href = '#';
    a.textContent = i +1;
    
    a.addEventListener('click', (event) => {
      const pageLinks = document.getElementsByTagName('a');
      for (let i = 0; i < totalNumberOfPages; i++) {
        pageLinks[i].className= ' ';
      
     }
      let e = event.target;
      e.className = 'active';
    
    showPage(studentList, event.target.textContent);
    });
  }  
  }
 

showPage(studentList, 1);
appendPageLinks(studentList);


