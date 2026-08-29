const button = document.getElementById("myButton");

button.onmouseenter = function() {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = x + "px";
    button.style.top = y + "px";
};

button.onclick = function() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
};
