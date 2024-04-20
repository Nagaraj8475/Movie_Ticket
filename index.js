function checkAnswers() {
  var answer1 = document.getElementById("answer1").value.toLowerCase();
  var answer2 = document.getElementById("answer2").value.toLowerCase();
  var answer3 = document.getElementById("answer3").value.toLowerCase();
  var answer4 = document.getElementById("answer4").value.toLowerCase();
  var answer5 = document.getElementById("answer5").value.toLowerCase();

  if (
    answer1 === "yes" &&
    answer2 === "yes" &&
    answer3 === "yes" &&
    answer4 === "yes" &&
    answer5 === "yes"
  ) {
    window.location.href = "success.html";
  } else {
    document.getElementById("result").innerHTML =
      "<h2>Complete the work first to watch a MOVIE</h2>";
  }
}
