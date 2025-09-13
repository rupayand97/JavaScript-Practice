const fetchData = async() => {
    let res = await fetch(`https://fakestoreapi.com/products`)
    let data = await res.json();

    let currPage = 1;
    let perPage = 5;

    const showPage = (page) => {
        currPage = page;
        let start = (page - 1) * perPage;
        let end = start + perPage;

        display(data.slice(start, end));

        document.getElementById("pagination").innerHTML = `
            <button onclick="showPage(${page - 1})">Prev</button>
            <button onclick="showPage(${page + 1})">Next</button>
        `;
    };

    window.showPage = showPage;
    showPage(currPage);

}
fetchData()

const display = (data) => {
    const container = document.getElementById("container")
    container.innerHTML = "";

    data.forEach((product)=>{
        const item = document.createElement("div");
        item.innerHTML = `
            <img src=${product.image} alt="image" />
            <h1>${product.title}</h1>
        `
    
        container.appendChild(item);
      
    })
}