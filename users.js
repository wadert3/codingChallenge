  let userId;



fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    console.log(json);

  let nameRow = [];
  let rowCheck = 0;
  console.log(json[0].userId);


  for(let i = 0; i < json.length; i++){
    console.log(json[i].userId);

    if(nameRow.includes(json[i].userId)){
      let newDiv, parentDiv;
      let newPostTemp = `
      <div class="divContent post${json[i].id}">
      <h3>${json[i].title}</h3>
      <br>
      <p>${json[i].body}</p>
      </div>`

      newDiv = document.createElement('div');
      newDiv.innerHTML = newPostTemp;

      parentDiv = document.getElementById('parentContainer' + json[i].userId);
      parentDiv.appendChild(newDiv);

    } else {
      let usersTable = document.getElementById("usersTable");
      let row = usersTable.insertRow(-1);
      let cell1 = row.insertCell(0);
      let userDisplayTemp = `
      <button type="button" class="collapsible">User ${json[i].userId}</button>
      <div class="content" id="parentContainer${json[i].userId}" style="display: none;">
      <div class="divContent post${json[i].id}">
      <h3>${json[i].title}</h3>
      <br>
      <p>${json[i].body}</p>
      </div>
      </div>`;


      cell1.innerHTML = userDisplayTemp;
      setUserId(json[i].userId);
      nameRow.push(json[i].userId);



    }
}


 let collapse = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}


});

function setUserId(id){
  userId = id;
}
