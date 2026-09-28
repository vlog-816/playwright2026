console.log("1. Chay toi nha thang Teo");
waitForRespone().then(gototheCoffeShop);

function gototheCoffeShop() {
    console.log("3. Chay den quan caphe");
}

function waitForRespone() {
    return new Promise(wrapper);
}

function wrapper(resolve, reject) {

    setTimeout(
        function () {
            console.log("2. Teo oi, uong caphe khong?");
            resolve();
        }, 3000)
}


