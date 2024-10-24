let random_num = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    random_num = randint(1, 3)
    if (random_num == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (random_num == 2) {
        basic.showLeds(`
            . # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (random_num == 3) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
})
basic.forever(function () {
	
})
