input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    user_num = 1
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
    if (random_num == 1 && user_num == 1) {
        basic.showString("Draw")
    } else if (random_num == 1 && user_num == 2) {
        basic.showString("You win")
    } else if (random_num == 1 && user_num == 3) {
        basic.showString("You loose")
    } else if (random_num == 2 && user_num == 1) {
        basic.showString("You loose")
    } else if (random_num == 2 && user_num == 2) {
        basic.showString("Draw")
    } else if (random_num == 2 && user_num == 3) {
        basic.showString("You win")
    } else if (random_num == 3 && user_num == 1) {
        basic.showString("You win")
    } else if (random_num == 3 && user_num == 2) {
        basic.showString("You loose")
    } else if (random_num == 3 && user_num == 3) {
        basic.showString("Draw")
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    user_num = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    user_num = 2
})
let random_num = 0
let user_num = 0
user_num = 0
basic.forever(function () {
	
})
