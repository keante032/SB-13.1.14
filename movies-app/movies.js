$(function () {
  let currentId = 0;

  $("#add-movie").on("submit", function (evt) {
    evt.preventDefault();
    let title = $("#movie-title").val();
    let rating = $("#movie-rating").val().toString();

    $("#ratings-table").append("<tr>");
    $("tr:last-child").append(`<td>${title}`);
    $("tr:last-child").append(`<td>${rating}`);
    $("tr:last-child").append("<button>Delete</button>");
    $("#add-movie").trigger("reset");
    currentId++;
  });

  $("#ratings-table").on("click", "button", function (evt) {
    $(evt.target).closest("tr").remove();
  });
});
