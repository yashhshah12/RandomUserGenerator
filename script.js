import {getuser} from './api.js';
let userImage = document.querySelector(".user-image"); 
let userName = document.querySelector(".user-name")  
let userAge  = document.querySelector(".user-age")
let userMail = document.querySelector(".user-mail")  
let userPhone = document.querySelector(".user-phone")  
let userLocation = document.querySelector(".user-location") 
let userButton = document.querySelector(".btn")
function Showuserdata(userdata){
userImage.src = `${userdata.picture.medium}`;
console.log(userImage);
userName.textContent = `${userdata.name.first} ${userdata.name.last}`
userAge.textContent =  `Age: ${userdata.dob.age}`
userMail.textContent = `Email: ${userdata.email}`
userPhone.textContent = `Phone number: ${userdata.phone}`
userLocation.textContent = `Location: ${userdata.location.city} ${userdata.location.country}`
}
userButton.addEventListener("click" , async ()=>{
    userButton.disabled = true;
    userButton.textContent = "Loading..."
    const userdata = await getuser();
    console.log(userdata);
    Showuserdata(userdata);
    userButton.disabled = false;
    userButton.textContent  = "Get another user";
})
window.addEventListener("load", async ()=>{
    const userdata = await getuser();
    console.log(userdata);
    Showuserdata(userdata);


})



    



