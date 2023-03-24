//varianelen

let interval = 100;
let status = 1;

input.onButtonPressed(Button.A, () => {
    status = status + 1
    if (status > 2) {
        status = 0;
    }
})

input.onButtonPressed(Button.B, () => {
    interval -= 50
    if (status <= 2) {
        interval = 250;
    }
})


basic.forever(function () {

    //O doof het scherm
    if (status === 0) {
        basic.clearScreen()
    }
    //1 toon diamand
    else if (status === 1) {
        basic.pause
            (interval)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(interval)
        basic.clearScreen()
    }
    //anders een schaakbord
    else {
        basic.showIcon(IconNames.Chessboard)
    }
    for (let x = 0; x <= 6 - 1; x++) {
        for (let y = 0; y <= 5 - 1; y++) {

        }
    }

})
