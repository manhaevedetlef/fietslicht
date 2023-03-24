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


    if (status === 0) {
        basic.clearScreen()
    }
    else if (status === 1) {
        basic.pause
            (interval)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(interval)
        basic.clearScreen()
    }
    else {
        basic.showIcon(IconNames.Chessboard)
    }
})
