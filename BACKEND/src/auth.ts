// let form = document.querySelector(".form") as HTMLInputElement;
let Email = document.querySelector("#Email") as HTMLInputElement;
let Password = document.querySelector("#Password") as HTMLInputElement;
let Submit = document.querySelector("#login") as HTMLButtonElement;


Submit.addEventListener('click', (event)=>{
  event.preventDefault();


if (Email.value.trim() ==''){
  console.log('Email can not be empty');
  
}

function error( element:any, message:any){
  element.style.border = '3px red solid';
  
}
})

Submit.addEventListener("click", (event) => {
  event.preventDefault();


if (Password.value.trim() == "") {
  console.log("Password can not be empty");
}

});
