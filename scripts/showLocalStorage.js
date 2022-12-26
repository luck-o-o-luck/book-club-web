function showLocalStorage() {
    let text = document.getElementById("book-table");
    var bookRow = "";

    if (localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let name = localStorage.key(i);

            if (name === 'user' || name === 'error') {
                continue;
            }
            let info = JSON.parse(localStorage.getItem(name));

            bookRow += "<tr>";
            bookRow += "<td>" + name + "</td>";
            bookRow += "<td>" + info[0][0] + "</td>";
            bookRow += "<td>" + info[0][1] + "</td></tr>";
        }

        text.innerHTML += bookRow;
    }
}