function buttonPressed(element, displayId) {
    document.querySelector('div.tabs-flex-wrapper').querySelectorAll('.tab-button').forEach(tabElement => {
        if (tabElement === element) {
            tabElement.classList.add("selected-tab-button");
        } else {
            tabElement.classList.remove('selected-tab-button');
        }
    })
    displayContent(displayId);
}

function displayContent(displayId) {
    document.querySelectorAll('div.tweets').forEach(tabElement => {
        if (tabElement.id === displayId) {
            tabElement.style.display = "block";
        } else {
            tabElement.style.display = "none";
        }
    })
}

function makePostVisible(element, password, isCaseSensitive = false) {
    if (isCaseSensitive === true){
        if (element.previousElementSibling.value === password) {
            const parent = element.parentElement
            parent.classList.add('hidden');
            const post = parent.nextElementSibling;
            post.classList.remove('hidden');
            console.log('password correct');
        } else {
            console.log('password incorrect');
            element.nextElementSibling.innerText = "Incorrect password, make sure it's case sensitive.";
        }
    } else {
        if (element.previousElementSibling.value.toLowerCase() === password.toLowerCase()) {
            const parent = element.parentElement
            parent.classList.add('hidden');
            const post = parent.nextElementSibling;
            post.classList.remove('hidden');
            console.log('password correct');
        } else {
            console.log('password incorrect');
            element.nextElementSibling.innerText = "Incorrect password";
        }
    }
}