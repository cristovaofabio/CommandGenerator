const result = document.querySelector('#result');
const form = document.querySelector('#form');

function showCommand(text) {
    const command = generateCommand(text);

    result.innerHTML = `<p> <b>COMMAND:</b> <br> <br> ${command} </p>`;
}

function openDocument(text) {
    const command = generateCommand(text);
    let w = window.open();
    w.document.open();
    w.document.write(command);
    w.document.close();
}

function downloadCommands(text) {
    const command = generateCommand(text);
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(command));
    element.setAttribute('download', 'commands.txt');

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
}

function generateCommand(text) {
    console.log(text);
    return `git commit -m "${text}"`;

}

function receiveEvent(event) {
    event.preventDefault();
    const name = form.querySelector('#name');

    openDocument(name.value);
}

form.addEventListener('submit', receiveEvent);
