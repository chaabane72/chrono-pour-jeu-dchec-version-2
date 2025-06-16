input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    basic.pause(12000)
    led.plot(1, 0)
    basic.pause(12000)
    led.plot(2, 0)
    basic.pause(12000)
    led.plot(3, 0)
    basic.pause(12000)
    led.plot(4, 0)
    basic.pause(12000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.showLeds(`
    . . . . .
    . . # . #
    . # # . #
    . . # . .
    . . # . .
    `)
