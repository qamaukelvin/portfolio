let navbar = document.querySelector('.header'); 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header a'); 

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
        navbar.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('scrolled'); 
    }

  
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate'); 
            
            navLinks.forEach(link => link.classList.remove('active')); 
            let navLink = document.querySelector(`.header a[href="#${sec.id}"]`);
            navLink.classList.add('active'); 
        } else {
            sec.classList.remove('show-animate'); 
        }
    });
};
