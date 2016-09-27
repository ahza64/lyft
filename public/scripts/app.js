console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$.ajax({
  method: "GET",
  url: "http://localhost:3000/api/albums",
  success: handleSuccess,
  error: handleError
});

function handleSuccess(json) {
  console.log(json);
}

function handleError(xhr, status, errorThrown) {
  console.log("server error respose");
}

});
