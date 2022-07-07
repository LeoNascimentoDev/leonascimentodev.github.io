let element = document.querySelector("#content")
element.addEventListener('mousemove', function () {
    element.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});
});