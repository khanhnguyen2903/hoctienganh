const img_question = document.querySelector(".img_word");
const word = document.querySelector(".word");
const sentence = document.querySelector(".sentence");
const btn_next = document.querySelector(".btn_next");
const btn_back = document.querySelector(".btn_back");
const speaker_word = document.querySelector(".speaker_word");
const speaker_sentence = document.querySelector(".speaker_sentence");
const btn_play_again = document.querySelector(".btn_play_again");
const btn_play_game = document.querySelector(".btn_play_game");

let topic = 0;
let i = 0;
// Get data topic from topic.js
topic = localStorage.getItem("my_topic");
console.log("topic: " + topic);

btn_play_again.style.display = "none";
btn_play_game.style.display = "none";

// function display question
function displayQuestion(item) {
  // Display image
  img_question.setAttribute("src", url + item.name_image);
  // Display word
  const textNode = document.createTextNode(item.answer);
  word.appendChild(textNode);
  // Display sentence
  const sentenceNode = document.createTextNode(item.sentence);
  sentence.appendChild(sentenceNode);
  if (i === 0) {
    btn_back.style.display = "none";
    btn_next.style.display = "block";
  } else {
    btn_back.style.display = "block";
  }
  if (i === questions[topic].items.length - 1) {
    btn_play_again.style.display = "block";
    btn_play_game.style.display = "block";
    btn_next.style.display = "none";
  }
}
// Listening
// listenButton.addEventListener("click", () => {
//   //listen(questions[topic].items[i].answer);
//   listen(questions[topic].items[i].sentence);
// });

displayQuestion(questions[topic].items[0]);
listen_auto(i);

//listen(questions[topic].items[0].sentence);

// click button next to new word
btn_next.addEventListener("click", () => {
  i++;
  img_question.setAttribute("src", "");
  word.textContent = "";
  sentence.textContent = "";
  change_color_text_begin();
  if (i === questions[topic].items.length) {
    // displayQuestion(questions[topic].items[0]);
    // i = 0;
    // btn_back.style.display = "none";
    window.location.href = "/games/select_image/select_image.html";
  } else {
    displayQuestion(questions[topic].items[i]);
    listen_auto(i);
  }
  //listen(questions[topic].items[i].answer);
});

btn_back.addEventListener("click", () => {
  i--;
  img_question.setAttribute("src", "");
  word.textContent = "";
  sentence.textContent = "";
  change_color_text_begin();
  displayQuestion(questions[topic].items[i]);
  //listen(questions[topic].items[i].answer);
  listen_auto(i);
});

function listen(word) {
  responsiveVoice.speak(word, "UK English Male");
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function listen_auto(index) {
  listen(questions[topic].items[index].answer);
  async function use_delay() {
    await delay(2000); // Đợi 3 giây
    change_color_text();
    listen(questions[topic].items[index].sentence);
  }
  use_delay();
}

function change_color_text() {
  word.style.color = "#333";
  sentence.style.color = "#e42f2f";
}

function change_color_text_begin() {
  word.style.color = "#e42f2f";
  sentence.style.color = "#333";
}

speaker_word.addEventListener("click", () => {
  listen(questions[topic].items[i].answer);
  change_color_text_begin();
});

speaker_sentence.addEventListener("click", () => {
  listen(questions[topic].items[i].sentence);
  change_color_text();
});

btn_play_again.addEventListener("click", () => {
  i = 0;
  img_question.setAttribute("src", "");
  word.textContent = "";
  sentence.textContent = "";
  change_color_text_begin();
  displayQuestion(questions[topic].items[i]);
  listen_auto(i);
  btn_play_again.style.display = "none";
  btn_play_game.style.display = "none";
  btn_next.style.display = "bock";
});

btn_play_game.addEventListener("click", () => {
  window.location.href = "./games/select_image/select_image.html";
});
