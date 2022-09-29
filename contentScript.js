console.log("Hola!");
let buildVersion = "";

// 2 - for angular SP
// TODO - fetch it directly from console
const allElements = document.getElementsByTagName("*");
const elementArr = [...allElements];
const filtered = elementArr.filter((e) => e.hasAttribute("ng-version"));
const angularVersion =
  filtered.length > 0 ? filtered[0].getAttribute("ng-version") : "Not Found";
console.log(angularVersion);
buildVersion = angularVersion;

chrome.storage.local.set({
  buildVersion,
});

// get main.js file
function getMainFile() {
  //  TODO - this URL needs to be updated
  fetch("https://10.225.94.122:8443/prweb")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getMainFile();
