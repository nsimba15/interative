'use strict';

let show = document.querySelector('.hambur');

let close = document.querySelector('.close');

let escondido = document.querySelector('.oculto');

show.addEventListener('click', function(){
  escondido.classList.remove('oculto');
})

close.addEventListener('click', function(){
  escondido.classList.add('oculto');
})
