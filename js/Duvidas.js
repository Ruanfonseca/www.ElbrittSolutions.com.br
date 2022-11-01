(function(){
    const duvidas_titulo = [...document.querySelectorAll('.duvidas-titulo')];//vetor de elementos
    console.log(duvidas_titulo)

    duvidas_titulo.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('duvidas-padding-add');
            question.children[0].classList.toggle('duvidas-arrow-rotacao');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();