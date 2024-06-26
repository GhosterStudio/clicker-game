document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
    const counterElement = document.getElementById('counter');
    const clickerButton = document.getElementById('clickerButton');

    clickerButton.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
    });
});
