function loadBooks() {

    let text = document.getElementById("book-table");
    var bookRow = "";

    let name = localStorage.key(localStorage.length - 1);

    if (name === 'user' || name === 'error') {
        return;
    }
    let info = JSON.parse(localStorage.getItem(name));

    bookRow += "<tr>";
    bookRow += "<td>" + name + "</td>";
    bookRow += "<td>" + info[0][0] + "</td>";
    bookRow += "<td>" + info[0][1] + "</td></tr>";


    text.innerHTML += bookRow;
}