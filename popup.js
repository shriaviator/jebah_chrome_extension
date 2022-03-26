// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
function setPageBackgroundColor() {
  var elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type == "text" || elements[i].type == "number") {
      elements[i].value = "";
    } else if (elements[i].type == "radio" || elements[i].type == "checkbox") {
      elements[i].checked = false;
    }
  }
}
