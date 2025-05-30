// Анимация фона hero за курсором (главная страница)
const hero = document.querySelector('.hero');

if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    // Смещаем фон максимум на ±5% от центра (50%)
    hero.style.backgroundPosition = `${50 + (x - 50) / 10}% ${50 + (y - 50) / 10}%`;
  });

  hero.addEventListener('mouseleave', () => {
    // Возврат фона в центр при уходе курсора
    hero.style.backgroundPosition = '50% 50%';
  });
}

// Пример анимации по клавиатуре (можно расширять)
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    window.scrollBy({ top: 100, behavior: 'smooth' });
  } else if (e.key === 'ArrowUp') {
    window.scrollBy({ top: -100, behavior: 'smooth' });
  }
});
