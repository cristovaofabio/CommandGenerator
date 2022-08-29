const result = document.querySelector('#result');
const form = document.querySelector('#form');

function showCommand(text){
    const command = generateCommand(text);

    result.innerHTML = `<p> <b>COMMAND:</b> <br> <br> ${command} </p>`;
}

function generateCommand(text) {
    console.log(text);
    return `git commit -m "${text}"`;

}

function receiveEvent(event) {
    event.preventDefault();
    const name = form.querySelector('#name');

    showCommand(name.value);
}

form.addEventListener('submit', receiveEvent);
