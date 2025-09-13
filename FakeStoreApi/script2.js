const fetchData = async() => {
    let res = await fetch(`https://fakestoreapi.com/products`)
    let data = await res.json();


    let curr = 0;
    let limit = 5;

    const pagination = (currValue) => {

        let start = currValue*limit;
        let end = (currValue+1)*limit;

        display(data.slice(start, end))

        let paginationdiv = document.getElementById("pagination");
        paginationdiv.innerHTML="";
        
        let btn1 = document.createElement("button")
        btn1.innerText="prev"
        btn1.onclick = () => {
            curr=curr-1;
            pagination(curr)
        }
        let btn2 = document.createElement("button")
        btn2.innerText="next"
        btn2.onclick = () => {
            curr=curr+1;
            pagination(curr)
        }
        paginationdiv.appendChild(btn1)
        paginationdiv.appendChild(btn2)
    }
    pagination(curr)
    


}
fetchData();

const display = (data) => {
    const container = document.getElementById("container")
    container.innerHTML = "";

    data.forEach((product)=>{
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${product.title}</h3>
            <img src=${product.image}></img>
            <p>${product.description}</p>
        `
        container.appendChild(div);
    })

}
