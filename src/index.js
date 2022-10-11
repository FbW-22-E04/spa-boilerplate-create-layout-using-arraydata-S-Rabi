import React from "react"; //Main React.js library
import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
  <li class="nav-item">
    <a class="nav-link" href="#">
      Link to google.com
    </a>
  </li>,
  <li class="nav-item">
    <a class="nav-link" href="#">
      Link to facebook.com
    </a>
  </li>,
  <li class="nav-item">
    <a class="nav-link" href="#">
      Link to amazon.com
    </a>
  </li>,
];

const content = <ul className="nav"> {navlinkItems} </ul>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
