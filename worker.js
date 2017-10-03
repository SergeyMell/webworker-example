setInterval(function () {
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
        sum += eval('Math.sqrt(Math.sqrt(i)) * Math.random()');
    }
    self.postMessage(sum);
}, 100);