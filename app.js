fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
   return res.json();
})
.then(data => {
    data.forEach(user => {
      
       const details = `<div class="data"><ul class="users">
       <li type="none">Name: ${user.name}</li>
        <li type="none">Email: ${user.email}</li>
        <li type="none">Street: ${user.address.street}</li>
        <li type="none">City: ${user.address.city}</li>
        </ul></div>`
        document.getElementById('container').insertAdjacentHTML("beforeend",details);

    });
})
.catch(error => console.log(error));
