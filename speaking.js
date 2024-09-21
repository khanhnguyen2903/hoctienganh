function recordSpeech() {
  let result = "";
  if (annyang) {
    // Định nghĩa các lệnh
    const commands = {
      "*text": function (text) {
        text_record.innerText = text;
        result = text;
        console.log(result);
        console.log(question_word[i].answer.toLowerCase());
        if (result === question_word[i].answer.toLowerCase()) {
          text_record.innerText = "Chính Xác !";
        } else {
          text_record.innerText = "Chưa Đúng !";
        }
        img_micro.setAttribute("src", "images/micro.png");
      },
    };

    // Thêm các lệnh vào annyang
    annyang.addCommands(commands);

    // Đặt ngôn ngữ (Tiếng Việt)
    annyang.setLanguage("en-US");

    // Bắt đầu nhận diện giọng nói
    annyang.start();
  } else {
    text_record.innerText = "Annyang is not supported in this browser.";
  }
}

img_micro.addEventListener("click", () => {
  if (img_micro.src.includes("micro")) {
    text_record.innerHTML = "Đang thu...";
    img_micro.setAttribute("src", "images/wave_speech.png");
    recordSpeech();
    console.log("Recording started");
  } else {
    text_record.innerHTML = "";
    img_micro.setAttribute("src", "images/micro.png");

    console.log("Recording stopped");
  }
});
