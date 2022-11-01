(function(){
    const openButton = document.querySelector('.navMenu');
    const menu = document.querySelector('.navLink');
    const closeMenu = document.querySelector('.navClose');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });

    


})();