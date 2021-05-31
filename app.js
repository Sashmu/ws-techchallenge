const btn = document.getElementById("btn");
const alert = document.getElementById('alertBox');

btn.addEventListener('click',() => {
   alert.classList.remove("hidden");
});
