function includeHeader() {
    fetch('/assets/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        });
}

function includeFooter() {
    fetch('/assets/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', function () {
    includeHeader();
    includeFooter();
});
