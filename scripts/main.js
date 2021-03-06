let myImage =  document.querySelector('img');

myImage.onclick  = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-image.jpg'){
        myImage.setAttribute('src', 'images/image2.jpeg');
        myImage.setAttribute('width', '96%');
    }else{
        myImage.setAttribute('src', 'images/my-image.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Web Dev, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}