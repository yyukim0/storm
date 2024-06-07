function exibir(id) {
    const button = document.querySelector(`#container${id}`);
    const img = document.querySelector(`.popup${id}`);

    button.onclick = () => {
        img.showModal();
    }
    
}
for(i = 1; i <= 6; i++){
    exibir(i);
}

window.onclick = (event) => {
    for (let i = 1; i <= 6; i++) {
        const img = document.querySelector(`.popup${i}`);
        if (event.target === img) {
            img.close();
        }
    }
}

document.querySelectorAll('.like').forEach((likeButton, index) => {
    const isLiked = localStorage.getItem(`isLiked-${index + 1}`) === 'true';
    if (isLiked) {
        likeButton.style.color = 'crimson';
    } else {
        likeButton.style.color = 'white';
    }

    likeButton.onclick = () => {
        const isLiked = likeButton.style.color === 'crimson';
        if (isLiked) {
            likeButton.style.color = 'white';
            localStorage.setItem(`isLiked-${index + 1}`, 'false');
        } else {
            likeButton.style.color = 'crimson';
            localStorage.setItem(`isLiked-${index + 1}`, 'true');
        }
    }
})


const icon = document.querySelector('.icon');
const dropdown = document.querySelector('.dropdown-menu');

icon.onclick = () => {
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    }
    else {
        dropdown.style.display = 'none';
    }
}

const nickname = localStorage.getItem('nickname');
const nicknameDisplay = document.querySelector('#nickname-display');

if(nickname) {
    nicknameDisplay.innerHTML = `<strong>${nickname}</strong>`;
}