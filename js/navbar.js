window.onload = function () {
    const nav = document.getElementById('navbar');
    const dest = document.getElementById('top-dest');
    const footer = document.getElementById('footer');
    console.log(footer);
    
    const start = dest.offsetTop-100;
    const end = footer.offsetTop-100;
    window.onscroll = () => {
        if (window.pageYOffset >= start && window.pageYOffset <= end) {
            nav.classList.add('sticky-nav');
        } else {
            nav.classList.remove('sticky-nav');
        }
    }
}