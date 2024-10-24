def on_button_pressed_a():
    basic.show_leds("""
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_icon(IconNames.SCISSORS)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        . # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if input.is_gesture(Gesture.SHAKE):
        pass
basic.forever(on_forever)
