function buttonPressed(element, displayId) {
    document.querySelector('div.tabs-flex-wrapper').querySelectorAll('.tab-button').forEach(tabElement => {
        if (tabElement === element) {
            tabElement.classList.add("selected-tab-button")
        } else {
            tabElement.classList.remove('selected-tab-button');
        }
    })
    displayContent(displayId);
}

function displayContent(displayId) {
    document.querySelectorAll('div.tweets').forEach(tabElement => {
        console.log(displayId);
        console.log(tabElement.id);
        if (tabElement.id === displayId) {
            console.log('true')
            tabElement.style.display = "block";
        } else {
            tabElement.style.display = "none";
        }
    })
}