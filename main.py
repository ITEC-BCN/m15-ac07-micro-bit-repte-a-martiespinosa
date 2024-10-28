def on_button_pressed_a():
    global user_num
    basic.show_leds("""
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        """)
    user_num = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global random_num
    random_num = randint(1, 3)
    if random_num == 1:
        basic.show_leds("""
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            """)
    elif random_num == 2:
        basic.show_leds("""
            . # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            """)
    elif random_num == 3:
        basic.show_icon(IconNames.SCISSORS)
    basic.clear_screen()
    if random_num == 1 and user_num == 1:
        basic.show_string("Draw")
    elif random_num == 1 and user_num == 2:
        basic.show_string("You win")
    elif random_num == 1 and user_num == 3:
        basic.show_string("You loose")
    elif random_num == 2 and user_num == 1:
        basic.show_string("You loose")
    elif random_num == 2 and user_num == 2:
        basic.show_string("Draw")
    elif random_num == 2 and user_num == 3:
        basic.show_string("You win")
    elif random_num == 3 and user_num == 1:
        basic.show_string("You win")
    elif random_num == 3 and user_num == 2:
        basic.show_string("You loose")
    elif random_num == 3 and user_num == 3:
        basic.show_string("Draw")
    else:
        pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global user_num
    basic.show_icon(IconNames.SCISSORS)
    user_num = 3
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global user_num
    basic.show_leds("""
        . # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        """)
    user_num = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

random_num = 0
user_num = 0
user_num = 0

def on_forever():
    pass
basic.forever(on_forever)
