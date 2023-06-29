const navbarEl= document.querySelector(".navbar");

const bottomContainerEl=document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }

    
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemeu=document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";

}
function closemenu(){
    sidemeu.style.right="-240px";

}

const scriptURL = 'https://script.google.com/macros/s/AKfycby4FtI_oBCLZ8QjiQuIg3R7CU9oyfH3VNxTCbrJfKzuHuu29DVRKNV7cQI52Abn0Fptgw/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg =document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message sent successfully"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)})
    form.reset()
      .catch(error => console.error('Error!', error.message))
  })
