const pages = document.querySelectorAll('.page');

let current = 0;

pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    if (index === current) {
      page.classList.add('flipped');
      current++;
    }
  });
});
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (14 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 250);