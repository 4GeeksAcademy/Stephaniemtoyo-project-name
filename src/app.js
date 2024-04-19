/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function excusa(pronoun, subject, action, possetion, where) {}
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "My", "The"];
  let subject = ["Teacher", "Girlfriend", "Clown", "My Boss"];
  let action = ["Found a", "Broke my", "eat my", "change my"];
  let possetion = ["Sneke", "Phone", "Cake"];
  let where = [
    "In the Bathroom",
    "In the Party",
    "In my house",
    "In my office"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjtIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjtIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possetionIndx] +
    " " +
    where[whereIndx]
  );
};
