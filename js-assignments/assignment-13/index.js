/*global fetch*/


let listItem = '';
let h2 = '';
let bodyPTag = '';
let optionList = '';
let commentButton = ''


let pTag = document.createElement('p');
pTag.setAttribute('id', 'pTagId');
document.body.appendChild(pTag);

const ulList = document.getElementById('ulList'),
  selectId = document.getElementById('usersDropDownList');


pTag.innerHTML = 'Loading...'

fetch(`https://5e68646fd426c00016b7cf33.mockapi.io/api/v1/users`)
  .then(response => {
    return response.json()
  })
  .then(json => {
    //console.log(json);
    // extractingObjects(json);
    displayUsersInDropDown(json);
  });

function creatingElementsAndAppending() {
  listItem = document.createElement('li');
  ulList.appendChild(listItem);
  h2 = document.createElement('h2');
  bodyPTag = document.createElement('p');
  bodyPTag.setAttribute('id', 'liPTag');
  listItem.appendChild(h2);
  listItem.appendChild(bodyPTag);
}

// function extractingObjects(json) {
//   json.forEach(item => {
//     creatingElementsAndAppending();
//     h2.innerHTML = item.userId;
//     bodyPTag.innerHTML = item.name;
//   })
// }

function displayUsersInDropDown(json) {
  json.forEach(item => {
    optionList = document.createElement('option');
    optionList.setAttribute('id', item.userId);
    selectId.appendChild(optionList);
    optionList.innerHTML = item.name;
    //creatingElementsAndAppending();

  })
}

selectId.onchange = (event) => {
  let postId = selectId[selectId.selectedIndex].id;

  fetch(`https://5e68646fd426c00016b7cf33.mockapi.io/api/v1/users/${postId}/posts`)
    .then(response => {
      return response.json()
    })
    .then(json => {
      json.forEach(item => {
        creatingElementsAndAppending();
        commentButton = document.createElement('button');
        listItem.appendChild(commentButton);
        h2.innerHTML = item.title;
        bodyPTag.innerHTML = item.body;
        commentButton.innerHTML = ` ${item.noOfComments} Comments`;
      })
    });
}




// Output
/*

[
  ({ id: 1, title: "Sample title1", body: "Sample Body1" },
  ...
  { id: 100, title: "Sample title100", body: "Sample Body100" })
];

*/
