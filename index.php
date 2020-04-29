<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container">
      <div class="row " style="margin-top: 100px; margin-left:100px; padding:20px;">
        <div class="col-md-7 col-md-offset-3">

          <div class="msg">

          </div>

          <table class="table table-bordered">
            <thead align="center" style="font-family:sans-serif;font-size:25px;">
              <th >
                Todo
              </th>
            </thead>

            <tr>
            <td>
              <form id="regForm" action="server2.php" method="post">

                <div class="row m-auto">
                  <div class="col-8">
                    <input class=" form-control" type="text" name="tasks" placeholder="task..">
                  </div>
                  <div class="col-4">
                    <button type="submit" class="btn-primary btn w-75">add</button>
                  </div>
                </div>
              </form>

            </td>
          </tr>


            <tbody class="tbody">



            </tbody>

          </table>

        </div>
      </div>
    </div>

    <!-- main_js -->
    <script src="js/fetch.js"></script>
  <!-- <script src="js/insert.js"></script> -->
  </body>
</html>
