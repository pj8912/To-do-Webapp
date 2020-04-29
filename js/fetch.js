fetch('server1.php')
.then((res) => res.json())
.then((response) => {
  console.log(response);
  let output = '';
  for(let i in response)
  {
    output +=
    `<tr>
    <td>
    <div class="row m-auto">
      <div class="col-md-6">
        <strong>${response[i].tasks}</strong>
      </div>
      <div class="col-md-6">
        <a class="btn btn-danger ml-5" href="delete.php?id=${response[i].id}">delete</a>
      </div>
    </div>



    </td>
    </tr>
    `;
  }
  document.querySelector('.tbody').innerHTML = output;
});
