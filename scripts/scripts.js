const app = {}

// menu button stuff
app.checkBox = document.querySelector("header input");
app.menuButton = document.querySelector("header i");
app.menuButton.addEventListener("click", () => {
    app.menuCall();
})

//When menu button is clicked
    // change header-ul to "top: 0"
    // change i to "x"
app.menuCall = () => {
    if (app.checkBox.checked) {
        app.upTopToggle()
        app.menuButton.classList.toggle('fa-bars');
        app.menuButton.classList.toggle('fa-xmark');
        
    } else {
        app.upTopToggle();
        app.menuButton.classList.toggle('fa-bars');
        app.menuButton.classList.toggle('fa-xmark');
    }
}

app.upTopToggle = () => {
    const ul = document.querySelector("header ul");
    ul.classList.toggle('upTop');
}

//add functions to links in nav to dismiss the nav
app.dismissHeader = () => {
    const anchor = document.querySelectorAll("header nav ul a");
    anchor.forEach((link) => {
        link.addEventListener("click", () => {
            app.menuCall();
        })
    })
}

app.init = () => {
    console.log("hello");
    app.dismissHeader();

}

app.init();