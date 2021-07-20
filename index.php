<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>do-doing-done</title>
  <style>
    #deletebtn {
      cursor: pointer;
    }
  </style>
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <!-- JavaScript Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</head>

<body class="container-fluid bg-light ">
  <div class="row mt-5">
    <div class="bg-light" align="center">
      <h1>To-do app
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
        </svg>
      </h1>
    </div>
  </div>
  <div class="container-fluid">

    <div class="row mt-5" align='center'>
      <!-- <div class="container"> -->

      <!-- todo -->
      <div class="col-md-4 card bg-danger text-light card-body mt-2 ">
        <div class="card-title h5">
          <span class=" text-center"> To-Do </span>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" style="border-radius:20px;" class=" btn btn-sm bg-light text-secondary w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            Add Task
          </button>
          <!-- Modal -->
          <div class="modal fade " style="margin-top:100px;" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body bg-secondary">
                  <!-- form -->
                  <!-- <form id="regForm" method="post"> -->

                  <div align="center">
                    <div class="form-group">

                      <input id="task" class=" form-control w-75 " type="text" placeholder="task..">

                    </div>
                    <div class="form-group">
                      <button onclick="uploadToDo()" id="taskbtn" type="submit" class="mt-2 btn btn-primary w-25" style="border-radius:25px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                        add task
                      </button>
                    </div>
                  </div>

                  <!-- </div> -->
                  <!-- <div class="col-4"> -->
                  <!-- </form> -->
                </div>

              </div>
            </div>
          </div>



        </div>


        <ul class="list-group todo-list">


        </ul>
      </div>


      <!-- doing -->
      <div class="col-md-4 card bg-primary text-light card-body mt-2 ">
        <div class="card-title h5">Doing </div>
        <ul class="list-group doing-list">




        </ul>
      </div>

      <!-- done -->
      <div class="col-md-4 card bg-success text-light card-body mt-2 ">
        <div class="card-title h5">Done</div>

        <ul class="list-group done-list">

          <!-- <li class="list-group-item">An item
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
            </svg>
          </li> -->

        </ul>
      </div>

    </div>
  </div>

  <script src="main.js"></script>


</body>

</html>