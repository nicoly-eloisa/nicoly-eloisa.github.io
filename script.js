const likeBtn = document.getElementById('likeBtn');
const counterP = document.getElementById('counter');

let likes = 0;

likeBtn.addEventListener('click', () => {
    likes++;
    counterP.textContent = `Curtidas: ${likes}`;
});
