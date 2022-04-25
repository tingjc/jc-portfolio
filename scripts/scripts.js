const app = {}

// menu button stuff
app.menuButton = document.querySelector("header i");
app.menuButton.addEventListener("click", (event) => {
    app.menuCall();
    app.menuButton.classList.toggle('fa-bars')
    app.menuButton.classList.toggle('fa-xmark')

})

//When menu button is clicked
    // change header-ul to "top: 0"
    // change i to "x"
app.menuCall = () => {
    const checkBox = document.querySelector("header input");
    const ul = document.querySelector("header ul");

    if (checkBox.checked) {
        ul.classList.toggle('upTop');
        
    } else {
        ul.classList.toggle('upTop');
    }
}

app.init = () => {
    console.log("hello");
    

}

app.init();