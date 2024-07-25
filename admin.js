let url="https://travel-bee-server.onrender.com/users";


const userDataBody = document.getElementById("userDataBody");

document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});


async function fetchData() {
    try {
        let res=await  fetch(`${url}`);
        let data=await res.json();
        console.log(data);
        Display(data);
    } catch (error) {
        console.log("Error",error);
    }
}



async function deleteUser(userId) {
    try {
        let res=await fetch(`${url}/${userId}`, {
            method: 'DELETE',
        });
        // let data=await res.json();
        userDataBody.innerHTML=""
        fetchData()

    } catch (error) {
        console.log("Error",error)
    }
}


function Display(data){
    data.forEach((item)=>{
        userDataBody.append(createData(item))
    })
}
function createData(item){

    let data=document.createElement("tr");
    data.className="user-data"

    let id=document.createElement("td");
    id.className="id";
    id.innerText=item.id;

    let firstName=document.createElement("td");
    firstName.className="firstname";
    firstName.innerText=item.firstname;

    let lastName=document.createElement("td");
    lastName.className="lastname";
    lastName.innerText=item.lastname;

    let email=document.createElement("td");
    email.className="email";
    email.innerText=item.email;

    let password=document.createElement("td");
    password.className="password";
    password.innerText=item.password;

    let Delete=document.createElement("td");

    let btn=document.createElement("button");
    
    btn.innerText="Delete"

    Delete.appendChild(btn);

    btn.classList.add("btn","btn-danger","btn-sm");

    btn.addEventListener("click",()=>{
        deleteUser(item.id);
    })

    data.append(id,firstName,lastName,email,password,Delete);
    return data;

}