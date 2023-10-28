fetch('navbar.html')
.then(response => response.text())
.then(html => {
    document.getElementById('navbar').innerHTML = html;
});

fetch('footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer').innerHTML = html;
});