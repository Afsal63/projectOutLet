
const floatingButton = document.querySelector('.floating-action-button');
let isModalOpened = false
floatingButton.addEventListener('click', () => {
  isModalOpened = modalPopup()
});


function modalPopup() {
  console.log('working');
  // Create the iframe element
  if (!isModalOpened) {
    console.log('ModalOpenedtrue', isModalOpened);

    var iframe = document.createElement("iframe");

    // Set the source URL of the iframe
    iframe.src = "https://proseed.freston.io/";

    // Set any additional attributes or styles for the iframe
    // iframe.width = "500";
    // iframe.height = "300"; 
    iframe.setAttribute("id", "widgetPopup");
    iframe.setAttribute("style", "border-width:0;background-color:transparent;height:inherit;position:relative;bottom:30%;overflow-y: scroll;;");

    // Append the iframe to the desired location in the document


    document.body.appendChild(iframe);
    return true
  } else {
    var widgetPopup = document.getElementById('widgetPopup');
    document.body.removeChild(widgetPopup);
    return false

  }

}