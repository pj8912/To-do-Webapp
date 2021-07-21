
var tbtn = document.getElementById('taskbtn')

var task = document.getElementById('task').value;



function uploadToDo() {

    var task = document.getElementById('task').value;

    fetch("src/todoupload.php", {
        method: "POST",

        body: JSON.stringify({
            data: task
        })
    })

    fetchToDo();
    // fetchDoing();
    // fetchDone();

}




function fetchToDo() {
    fetch('src/todofetch.php')

        .then((res) => res.json())
        .then((response) => {

            let output = '';

            for (let i in response) {

                if (response[i].tasks == null || response[i].tasks == '') {
                    output += `
                    <li class="list-group-item">
                        <h5>no data available 
                            
          <button   type="submit" class="btn ml-1 w-auto bg-light" id="deletebtn"  onclick="deleteTodo(${response[i].id})" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg> 
          </button>

                        </h5> 
                    </li>
                `;
                }
                else {
                    output +=
                        `<li class="list-group-item">

      <section style="display: grid; grid-template-columns:1fr 1fr 1fr;">
        <p class="h6" style="grid-column:1/3">${response[i].tasks}</p>
     
        <span>
          
<button type="submit" class="btn ml-1 w-auto bg-light" onclick = "uploadDoing(${response[i].id})">
       <svg  id="donrtask" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </button>
          

    
          <button type="submit"  class="btn ml-2 w-auto bg-light" id="deletebtn"  onclick="deleteTodo(${response[i].id})" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg> 
          </button>


      </span>
      </section>
  </li>
  `;
                }
            }
            document.querySelector('.todo-list').innerHTML = output;
        })
}



function deleteTodo(btnval) {

    fetch('src/tododelete.php', {

        method: "POST",
        body: JSON.stringify({
            data: btnval
        })
    });


    fetchToDo();
}



function uploadDoing(id) {


    fetch("src/doingupload.php", {

        method: "POST",

        body: JSON.stringify({
            id: id
        })
    })

    fetchDoing();


}


function fetchDoing() {
    fetch('src/doingfetch.php')

        .then((res) => res.json())
        .then((response) => {

            let output = '';

            for (let i in response) {
                if (response[i] == null) {
                    output += `
                    <li class="text-light list-group-item">
                        no task added
                    </li>
                `;
                }

                if (response[i].tasks == null || response[i].tasks == '') {
                    output += `
                    <li class="list-group-item">
                        <h5>no data available
                            
          <button type="submit" class="btn ml-1 w-auto bg-light" id="deletebtn"  onclick="deleteDoing(${response[i].id})" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg> 
          </button>

                        </h5>
                    </li>
                `;
                }
                else {
                    output +=
                        `<li class="list-group-item">

      <section style="display: grid; grid-template-columns:1fr 1fr 1fr;">
                
    

                    
        <p class="h6" style="grid-column:1/3">${response[i].tasks}</p>
     
        <span>
          
      
          <button type="submit" class="btn ml-1 w-auto bg-light" onclick = "uploadDone(${response[i].id})">
       <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </button >
        </a>
          

    
          <button  class="btn ml-1 w-auto bg-light" id="deletebtn"  onclick="deleteDoing(${response[i].id})" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg> 
          </button>


      </span>
      </section>
  </li>
  `;
                }
            }
            document.querySelector('.doing-list').innerHTML = output;
        })
    fetchToDo();
}

function uploadDone(id) {
    fetch("src/doneupload.php", {

        method: "POST",

        body: JSON.stringify({
            id: id
        })
    })

    // fetchDoing();
    fetchDone();
    // fetchToDo();
}

function deleteDoing(btnval) {

    fetch('src/doingdelete.php', {

        method: "POST",
        body: JSON.stringify({
            delete: btnval
        })
    });

    fetchDoing();
}



function fetchDone() {
    fetch('src/donefetch.php')

        .then((res) => res.json())
        .then((response) => {

            let output = '';

            for (let i in response) {

                if (response[i].tasks == null || response[i].tasks == '') {
                    output += `
                    <li class="list-group-item">
                        <h5>no data available
                            
          <button type="submit" class="btn ml-1 w-auto bg-light" id="deletebtn"  onclick="deleteDone(${response[i].id})" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg> 
          </button>

                        </h5>
                    </li>
                `;
                }
                else {
                    output +=
                        `<li class="list-group-item">

      <section style="display: grid; grid-template-columns:1fr 1fr 1fr;">
        <p class="h6" style="grid-column:1/3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
          </svg>

        ${response[i].tasks}</p>
     
        <span>         

    
          <button  class="btn ml-1 w-auto bg-light"   onclick="deleteDone(${response[i].id})" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg> 

          </button>


      </span>
      </section>
  </li>
  `;
                }
            }
            document.querySelector('.done-list').innerHTML = output;
        })
        fetchDoing();
    }


function deleteDone(btnval) {

    fetch('src/donedelete.php', {

        method: "POST",
        body: JSON.stringify({
            delete: btnval
        })
    });

    fetchDone();
}



window.onload = fetchToDo();
window.onload = fetchDoing();


window.onload = fetchDone();


