
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
if(menu && links){
  menu.addEventListener('click',()=>links.classList.toggle('open'));
}
document.querySelectorAll('.links a').forEach(a=>{
  a.addEventListener('click',()=>links?.classList.remove('open'));
});
const year = document.querySelector('#year');
if(year) year.textContent = new Date().getFullYear();
