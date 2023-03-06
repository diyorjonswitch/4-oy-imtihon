let api = ' https://api.escuelajs.co/api/v1/users'
const table = document.querySelector('.tables')

fetch(api)
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    for (let i = 0; i < api.length; i++) {
        table.innerHTML +=` 
        <table class="tables">
            <tr>
              <th><img src="${data[i].avatar}" alt=""></th>
              <th>${data[i].name}</th>
              <th>${data[i].email}</th>
              <th>${data[i].role}</th>
              <th><button>update</button></th>
              <th><button class"btn1">all</button></th>  
              <th>${data[i].id}</th>
            </tr>
            </table>
        `
        
    }
})