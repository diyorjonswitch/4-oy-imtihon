
let url = 'https://api.escuelajs.co/api/v1/products'
const loader = document.querySelector('.loader')

const Elproduct = document.querySelector('.section1__product')
const addproduct = document.querySelector('.w3-container')

function fetchProducts(url, callBack) {
    let deletebtns;
    fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data =>{
            deletebtns = data
            console.log(data);
        }).then(() => callBack(deletebtns))

    }
    
    function renderfetch(array) {
        // console.log(array);
        // loader.classList.add('loader-b')

        array.forEach((value) => {
            let html = `
                  <div class="card" style="width: 18rem;">
                        <img src="${value.images[0]}" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">${value.title}</h5>
                          <p class="card-text">${value.description}</p>
                          <p class=" card-price card-text">${value.price}$</p>
                         <a href="#" id="${value.id}" class="btns btn btn-primary">Delete</a>
                         <a href="#" id="${value.id}" class="btni btn btn-primary">Update</a>
                         </div>
                         `
                         Elproduct.insertAdjacentHTML("beforeend", html)
                        });
                        loader.classList.remove('loader-b') 
                    }
    fetchProducts("https://api.escuelajs.co/api/v1/products", renderfetch)
    
    Elproduct.addEventListener("click", e => {
        if (e.target.matches(".btns")) {
            e.preventDefault()
            deleteFetch(e.target.id)
        }
    })
    function deleteFetch(id){
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fetch(`https://api.escuelajs.co/api/v1/products/${id}`, renderfetch)
            window.location.reload()
        })
    }
    const eltitle = document.querySelector('.title')
    const bio = document.querySelector('.description')
    const elprice = document.querySelector('.price')
    const addproducts = document.querySelector('.button-1')

   addproducts.addEventListener('click', () => {
    const api = `https://api.escuelajs.co/api/v1/products/${id}`
    fetch(api , {
    method: 'POST',
    headers: {
    'Content-type':'application/json; charset=UTF-8',  
},
    body: JSON.stringify({
      title: eltitle.value,
      price: 42,
      description: bio.value,
      categoryId: 1,
      images: ["https://api.escuelajs.co/api/v1/products/0"]
    })
  }) 
  .then((res) => res.json())
  .then((date) => console.log(date))
//   window.location.reload()
})


//////////////////////////////////////

window.addEventListener('DOMContentLoaded', function () {
    getImages(images)
    // getsTitle(title)
    getssdescription(description)
    // gettPrice(price)
})

const input = document.querySelector('.form-control');
const search = document.querySelector('.btn-outline-success');

search.addEventListener('click', function () {
    console.log(input.value);
    let url = `https://api.escuelajs.co/api/v1/products${input.value}`;
    console.log(url);
    getImages(url);
    getsTitle(url);
    getssdescription(url);
    gettPrice(url)
    return 0;
});



