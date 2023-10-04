const burger =  document.querySelector('.burger__menu');

console.log(burger)

const showMenu= document.querySelector(".navbar__menu--mobile");

console.log(showMenu)

burger.addEventListener('click',() => {
    showMenu.classList.toggle('active');
})