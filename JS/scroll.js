let element = document.querySelector("#content")
element.addEventListener('mousemove', function () {
    console.log('oi')
    element.scrollIntoView({behavior: "auto", block: "end", inline: "nearest"});
});