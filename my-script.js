console.log('scripttttt!!!');

setInterval(() => {
    let el = document.getElementById('my-counter');
    el.innerHTML = parseInt(el.innerHTML) + 1;
}, 1000);