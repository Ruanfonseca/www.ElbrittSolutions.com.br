(function(){
    
    const sliders = [...document.querySelectorAll('.selecaoServicosBody')];
    const buttonNext = document.querySelector('#next');//pegando o clique do botão
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.selecaoServicosBody-show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('selecaoServicosBody-show');
        if(value === sliders.length+1 || value === 0){//se o valor for igual ao numero de elementos no array de slides
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('selecaoServicosBody-show');

    }

})();