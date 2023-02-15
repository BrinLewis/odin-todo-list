import "./styles.css";
import testImg from "./assets/003-twitter.png";

const container = document.querySelector(".container")
const testPic = document.createElement("img");
testPic.src = testImg;

container.appendChild(testPic);
