// function openPage(pageName, elmnt, color) {
//   console.log('hi');
//   // Hide all elements with class="tabcontent" by default */
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "block";
//   }

//   // Remove the background color of all tablinks/buttons
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "f5ebe0";
//   }

//   // Show the specific tab content
//   document.getElementById(pageName).style.display = "block";

//   // Add the specific color to the button used to open the tab content
//   elmnt.style.backgroundColor = color;
// }

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();




const tab = document.querySelector('.tabs');
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
	//Hide All Tabpane
	tabPanels.forEach(panel => {
		panel.hidden = 'true';
	});
	
	//Deselect Tab Button
	tabButtons.forEach( button => {
		button.setAttribute('aria-selected', 'false');
	});
	
	//Mark New Tab
	e.currentTarget.setAttribute('aria-selected', 'true');
	
	//Show New Tab
	const { id } = e.currentTarget;
	
	const currentTab = tabPanels.find(
		panel => panel.getAttribute('aria-labelledby') === id
	);
	
	currentTab.hidden = false;
}

tabButtons.forEach(button => {
	button.addEventListener('click', tabClickHandler);
})
