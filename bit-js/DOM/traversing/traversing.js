document.addEventListener("DOMContentLoaded", function () {
  traversingExercise();
});

function traversingExercise() {
  var active = document.getElementsByClassName("active")[0];
  active.classList.remove("active");

  var list1Firstelement =
    document.documentElement.children[1].children[0].children[0]
      .firstElementChild;
  list1Firstelement.className = "active";
}
