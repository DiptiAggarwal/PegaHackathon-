console.log("Hey I am from devtools");


chrome.devtools.panels.elements.createSidebarPane("Pega DX Project",()=>{
  console.log("hey created Sidebar pane");
});



chrome.devtools.panels.create("PegaTab",
    "icon.png",
    "PegaTab.html",
    function(panel) {

    }
);
