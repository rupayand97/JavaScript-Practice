let btn = document.getElementById("btn");

localStorage.setItem("mode", "dark");

btn.onclick = () => {

    const currMode = localStorage.getItem("mode")

    if(currMode=="dark") {
        localStorage.setItem("mode", "light");
        document.body.style.backgroundColor = "white";
    }

    else if(currMode=="light") {
        localStorage.setItem("mode", "dark");
        document.body.style.backgroundColor = "black";
    }
};