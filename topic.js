const topics = document.querySelector(".topics");
let topic = 0;
topics.addEventListener("click", function (e) {
  if (e.target.nextElementSibling.innerText === "Animal") {
    topic = 0;
  } else if (e.target.nextElementSibling.innerText === "Color") {
    topic = 1;
  } else if (e.target.nextElementSibling.innerText === "Family") {
    topic = 2;
  }
  localStorage.setItem("my_topic", topic);
  window.location.href = "listening.html";
  //console.log(e.target.nextElementSibling.innerText);
});
