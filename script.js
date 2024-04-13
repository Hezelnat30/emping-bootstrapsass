window.addEventListener('scroll' , function(){
    let navbar = document.querySelector('nav');
    if ( this.window.scrollY > 0 ) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
})