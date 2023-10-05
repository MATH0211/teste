function menuShow(){
let menuMobile = document.querySelector('.btn-icon');
if (menuMobile.classList.contains('open')){
menuMobile.classList.remove('open');
} else {
menuMobile.classList.add('open');

}

}