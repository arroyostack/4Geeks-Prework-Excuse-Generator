import "bootstrap";
import "./style.css";

window.onload = function() {
  const formExcuse = () => {
    const displayExcuse = document.getElementById("excuse");

    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    const phrase = [who, action, what, when];

    let excuse = "";

    phrase.forEach(item => {
      excuse += item[Math.floor(Math.random() * item.length)] + " ";
    });

    displayExcuse.innerText = excuse;
  };

  formExcuse();
};
