'use strict';

let isPlaying = 'circle';

const btnsElm = document.querySelectorAll('.square');
for (let i = 0; i < btnsElm.length; i += 1) {
  btnsElm[i].addEventListener('click', () => {
    //console.log("test"+[i])
    if (isPlaying === 'circle') {
      if (
        !btnsElm[i].classList.contains('O') &&
        !btnsElm[i].classList.contains('X')
      ) {
        btnsElm[i].classList.add('O');
        btnsElm[i].disabled = true;
        isPlaying = 'cross';
        document.querySelector('.cssCircle').classList.toggle('cssCross');
      }
    } else {
      if (
        !btnsElm[i].classList.contains('O') &&
        !btnsElm[i].classList.contains('X')
      ) {
        btnsElm[i].classList.add('X');
        btnsElm[i].disabled = true;
        isPlaying = 'circle';
        document.querySelector('.cssCircle').classList.toggle('cssCross');
      }
    }
  });
}
