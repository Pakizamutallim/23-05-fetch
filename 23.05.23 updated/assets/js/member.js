
const button = document.getElementById("btn")

  button.addEventListener("click", function(){
    const fetched = fetch('https://6469bba8183682d614455b66.mockapi.io/users', {
        method: "POST", 
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify( {
            name: document.querySelector(".name").value,
            image: document.querySelector(".image").value,
            info: document.querySelector(".info").value,
            date: document.querySelector(".date").value 
        })
    })
    .then(res => res.json())
    .then(resp => console.log(resp))
    
})
fetched.then(resp => {
    (res.ok == true)
    {
        name: document.querySelector(".name").value = "";
        image: document.querySelector(".image").value = ""
        info: document.querySelector(".info").value = ""
        date: document.querySelector(".date").value =""
    }
})
