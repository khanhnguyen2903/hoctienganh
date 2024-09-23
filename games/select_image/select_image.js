// const speaker = document.querySelector(".speaker");
// const image_left = document.querySelector(".image_left");
// const image_right = document.querySelector(".image_right");
// const btn_back = document.querySelector(".btn_back");
// const btn_next = document.querySelector(".btn_next");

// let topic = 0;
// let arr = [];
// let arr_random = [];
// let arr_answer_correct = [];
// let index = 0;
// let answer_correct = "";
// let result = true;
// let level = 0;
// // Get data topic from listening.js
// topic = localStorage.getItem("my_topic");
// //console.log("topic: " + topic);

// let items_length = questions[topic].items.length;
// //console.log(items_length);

// function listen(word) {
//   responsiveVoice.speak(word, "UK English Male");
// }

// speaker.setAttribute("src", url + "speaker.jpg");

// function createArray(n) {
//   let arr = [];
//   for (let i = 0; i <= n - 1; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// arr = createArray(items_length);
// //console.log("arr: " + arr);

// // Hàm xáo trộn mảng sử dụng phương pháp Fisher-Yates
// function shuffleArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }

// arr_random = shuffleArray(arr);
// //console.log("arr_random: " + arr_random);
// arr_answer_correct = arr_random;
// //console.log("arr_answer_correct: " + arr_answer_correct);

// function display_images(index) {
//   //console.log(index);
//   console.log("arr_answer_correct: " + arr_answer_correct);
//   // Tạo mảng mới bằng cách loại bỏ phần tử ở index = 2
//   const arr_wrong = arr_answer_correct.filter((_, i) => i !== index);
//   //console.log("arr_wrong: " + arr_wrong);

//   let arr_wrong_random = shuffleArray(arr_wrong);
//   //console.log("arr_wrong_random: " + arr_wrong_random);

//   let name_correct =
//     "/" + questions[topic].items[arr_answer_correct[index]].name_image;
//   let name_wrong = "/" + questions[topic].items[arr_wrong_random[0]].name_image;
//   // console.log("url_correct: " + url_correct);
//   // console.log("url_wrong: " + url_wrong);
//   let arr_name_image = [name_correct, name_wrong];
//   //console.log(arr_url_image);
//   let arr_name_random = shuffleArray(arr_name_image);
//   //console.log(arr_url_random);
//   image_left.setAttribute("src", url + arr_name_random[0]);
//   image_right.setAttribute("src", url + arr_name_random[1]);
//   //console.log(questions[topic].items[arr_random[0]].url_image);
//   if (level === 0) {
//     answer_correct = questions[topic].items[arr_answer_correct[index]].answer;
//   } else if (level === 1) {
//     answer_correct = questions[topic].items[arr_answer_correct[index]].sentence;
//   }

//   async function use_delay() {
//     await delay(1000); // Đợi 2 giây
//     listen(answer_correct);
//   }
//   use_delay();

//   //console.log(questions[topic].items[arr_answer_correct[index]].answer);
//   if (index === 0) {
//     btn_back.style.display = "none";
//   } else {
//     btn_back.style.display = "block";
//   }
// }

// display_images(index);

// btn_next.addEventListener("click", () => {
//   next_question();
// });

// speaker.addEventListener("click", () => {
//   if (level === 0) {
//     answer_correct = questions[topic].items[arr_answer_correct[index]].answer;
//   } else if (level === 1) {
//     answer_correct = questions[topic].items[arr_answer_correct[index]].sentence;
//   }
//   listen(answer_correct);
// });

// image_left.addEventListener("click", () => {
//   let url_image = image_left.src;
//   check_answer(url_image);
//   image_left.classList.add("pop-up");
// });

// image_right.addEventListener("click", () => {
//   let url_image = image_right.src;
//   check_answer(url_image);
//   image_right.classList.add("pop-up");
// });

// function check_answer(url_image) {
//   if (url_image.includes(answer_correct.toLowerCase())) {
//     console.log("Correct !!!");
//     correct();
//     result = true;
//     // delay 2s
//     async function use_delay() {
//       await delay(2000); // Đợi 2 giây
//       if (index === items_length - 1) {
//         console.log("Finished !!!");
//         window.location.href = "/finish/finish_game.html";
//       } else {
//         next_question();
//       }
//     }
//     use_delay();
//   } else {
//     console.log("Wrong !!!");
//     wrong();
//     result = false;
//     async function use_delay() {
//       await delay(2000); // Đợi 2 giây
//       remove_pop_up();
//     }
//     use_delay();
//   }
// }

// function correct() {
//   let audio = new Audio("/sound/correct.mp3");
//   audio.play();
//   //remove_pop_up();
// }

// function wrong() {
//   let audio = new Audio("/sound/wrong.mp3");
//   audio.play();
//   //remove_pop_up();
// }

// function next_question() {
//   index++;
//   remove_pop_up();
//   if (index === items_length - 1) {
//     //level = 1;
//     //index = 0;
//     //alert("Finish !!!");
//     //display_images(index);
//     console.log(index);
//     console.log("Finish !!!");

//     btn_next.style.display = "none";
//   }
//   display_images(index);
// }

// function back_question() {
//   index--;
//   remove_pop_up();
//   if (index === 0) {
//     btn_back.style.display = "none";
//   }
//   btn_next.style.display = "block";
//   display_images(index);
// }

// function delay(milliseconds) {
//   return new Promise((resolve) => setTimeout(resolve, milliseconds));
// }

// function remove_pop_up() {
//   image_left.classList.remove("pop-up");
//   image_right.classList.remove("pop-up");
// }

// btn_back.addEventListener("click", () => {
//   back_question();
// });
alert('hello');
