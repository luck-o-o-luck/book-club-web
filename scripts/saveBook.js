document.addEventListener('DOMContentLoaded', () => {
    let add = document.getElementById('submit');
    add.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});

function saveBook() {
    let patio = []

    let patioName = document.getElementById("name").value;
    let patioAddress = document.getElementById("book").value;
    let patioDescription = document.getElementById("description").value;

    if (patioName === '') return;
    patio.push([patioAddress, patioDescription]);

    localStorage.setItem(patioName, JSON.stringify(patio));
    reset();
    loadBooks();
}

function reset() {
    document.getElementById("name").value = '';
    document.getElementById("book").value = '';
    document.getElementById("description").value = '';
}