let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

let main = document.getElementById("main")

red.onclick=()=>{
    main.style.backgroundColor = 'red';
}

green.onclick=()=>{
    main.style.backgroundColor = 'green';
}

blue.onclick=()=>{
    main.style.backgroundColor = 'blue';
}