const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) menuBtn.addEventListener('click', () => header.classList.toggle('menu-open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => header.classList.remove('menu-open')));
document.getElementById('year').textContent = new Date().getFullYear();
