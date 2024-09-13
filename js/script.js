// Select box element
const box = document.getElementById('box');

// 1. Animation au clic
box.addEventListener('click', function() {
    anime({
        targets: '#box',
        translateX: 1000,
        duration: 4000,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        loop: 1
    });
});

// 2. Animation au double clic
box.addEventListener('dblclick', function() {
    anime({
        targets: '#box',
        translateX: {
            value: 1000,
            duration: 1000
          },
          rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInOutSine'
          },
          scale: {
            value: 1.5,
            duration: 1800,
            delay: 1000,
            easing: 'easeInOutQuart'
          },
          delay: 250
    });
});

// 3. Changement de taille, de forme et de couleur au survol
box.addEventListener('mouseover', function() {
    anime({
        targets: '#box',
        width: '500px',
        height: '400px',
        backgroundColor: '#FF6347',
        borderRadius: ['0%', '25%'],
        duration: 1500,
        easing: 'easeInOutQuad'
    });
});

// 4. Revenir à l'état initial quand la souris sort
box.addEventListener('mouseout', function() {
    anime({
        targets: '#box',
        width: '400px',
        height: '300px',
        backgroundColor: '#abd7e6',
        borderRadius: ['25%', '0%'],
        duration: 1500,
        easing: 'easeInOutQuad'
    });
});

// 5. Animation lors de l'appui d'une touche du clavier
document.addEventListener('keydown', function() {
    anime({
        targets: '#box',
        keyframes: [
            {translateY: -250},
            {translateX: 1000},
            {translateY: 250},
            {translateX: 0},
            {translateY: 0}
          ],
        duration: 8000,
        easing: 'easeOutElastic(1, .8)',
        loop: 1
    });
});