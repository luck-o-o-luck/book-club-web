(function () {
    let startTime = new Date().getTime();

    function timer() {
        let element = document.getElementsByClassName('load-time')[0];
        element.innerHTML += 'page loaded in ' + (new Date().getTime() - startTime) / 1000 + ' seconds';
    }

    document.addEventListener("DOMContentLoaded", function() {
        timer();
    });
})();

