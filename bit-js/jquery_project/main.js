var $input = $("#search");
var $srcResult = $("#result");
var handleError = $("#error");
var list = [];


$(document).ready(function () {
  top50Shows();
  $input.on("keydown", function (event) {
    if (event.keyCode == 13) {
      handleError.text("");
      var inputValue = $input.val();
      if (inputValue) {
        search(inputValue);
      } else {
        handleError.text("Error!");
      }
      $input.val('')
    };
  });
});

function search(inputVal) {
  var request = $.ajax({
    url: "http://api.tvmaze.com/search/shows?q=" + inputVal,
    method: "GET",
  });
  request.done(function (response) {
    list = [];
    $srcResult.html("");
    response.forEach(function (element) {    
    list.push(element);
    });
    console.log(list.length)
    displayOnPage();
  });
};

function displayOnPage() {
  list.forEach(function (element, i) {
    var div = $("<div class = col-4>");
    var imgSource = list[i].show.image;
    if (imgSource) {
      div.append("<img src=" + list[i].show.image.original + ">");
    } else {
      div.append("<p>No Image</p>");
    }
    div.append("<p class = 'text-primary'>" + list[i].show.name + "</p>")
    div.on("click", function () {
      console.log(list[i].show.url);
      window.location;
      console.log(window.location.href);
      window.location.href = "pageInfoMovie.html?name=" + list[i].show.name;
    });
    $srcResult.append(div);
  });
};

function top50Shows() {
  var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET",
  });
  request.done(function (response) {
    var div = $("<div class = col-4>");
    response.sort(function(a, b){return b.rating.average-a.rating.average});
    for (var i = 0; i < 50; i++) {
      list.push(response[i]);
    }
    console.log(list)
    showTop50();
  });
};

function showTop50(){
    list.forEach(function (element, i) {
        var div = $("<div class = col-4>");
        div.append("<img src=" + list[i].image.original + ">");
        div.append("<p class = 'text-primary'>" + list[i].name + "</p>");        
        $srcResult.append(div);
        div.on("click", function () {
            console.log(list[i].url);
            window.location;
            console.log(window.location.href);
            window.location.href = "pageInfoMovie.html?name=" + list[i].name;
        });
    });
};
