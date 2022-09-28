console.log("Hola!");

// 1 - get angular version specific
const appRootElement = document.getElementsByTagName("app-root")[0];
const angularVersion = appRootElement.getAttribute("ng-version");
console.log(angularVersion);

// 2- angular version generic
const allElements = document.getElementsByTagName("*");
const elementArr = [...allElements];
const filtered = elementArr.filter((e) => e.hasAttribute("ng-version"));
const angularVersion2 = filtered[0].getAttribute("ng-version");
console.log(angularVersion2);

// get main.js file
function getMainFile() {
  //  TODO - this URL needs to be updated
  fetch("http://localhost:4200/main.js")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getMainFile();
