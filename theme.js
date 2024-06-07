document.addEventListener("DOMContentLoaded", () => {
    const theme = document.querySelector('.change');
    const hotbar = document.querySelector('.hotbar');
    const body = document.querySelector('body');
    const nextButton = document.querySelector('.nextButton');
    const previousButton = document.querySelector('.previousButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const logo = document.querySelector('#logo');
    const img = [];
    const container = [];
    const icon = document.querySelector('.icon');

    for(i = 1; i <= 6; i++) {
        container.push(document.querySelector(`#container${i}`));
        img.push(document.querySelector(`#brightness${i}`));
    }

    theme.onclick = () => {
        if (hotbar.style.backgroundColor === 'rgb(220, 220, 220)') {
            hotbar.style.backgroundColor = '#5C1C1C';
            body.style.backgroundColor = '#5C1C1C';
            hotbar.style.borderBottom = 'solid 5px #b8a11e';
            nextButton.style.backgroundColor = 'rgba(165, 147, 47, 0.7)';
            nextButton.style.color = '#5C1C1C';
            previousButton.style.backgroundColor = 'rgba(165, 147, 47, 0.7)';
            previousButton.style.color = '#5C1C1C';
            dropdownMenu.style.border = '4px solid #b8a11e';
            icon.style.color = '#b8a11e';
            logo.src = 'invert-logo.png';
            container.forEach(container => {
                container.style.border = '4px solid #b8a11e';
            });
            img.forEach(img => {
                img.style.filter = 'brightness(0.7)';;
            });
        } else {
            hotbar.style.backgroundColor = 'rgb(220, 220, 220)';
            body.style.backgroundColor = 'rgb(220, 220, 220)';
            hotbar.style.borderBottom = 'solid 5px #3f3f3f';
            nextButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            nextButton.style.color = '#dcdcdc';
            previousButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            previousButton.style.color = '#dcdcdc';
            dropdownMenu.style.border = '4px solid #3f3f3f';
            icon.style.color = '#850523';
            logo.src = '19145210539_LE_auto_x2-ai-brush-removebg-ftyskowl.png';
            container.forEach(container => {
                container.style.border = '2px solid #000';
            });
            img.forEach(img => {
                img.style.filter = 'none';
            });
        }
    };
});