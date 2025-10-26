let counter = 0;
const btn = document.getElementById('tasbihBtn');
const countText = document.getElementById('counter');

btn.addEventListener('click', () => {
    counter++;
    countText.textContent = counter;
    
    btn.style.backgroundColor = 'green';
    setTimeout(() => {
        btn.style.backgroundColor = 'red';
    }, 200);
});
