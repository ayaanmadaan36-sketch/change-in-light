input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 500), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 500), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Happy)
    } else {
        music.play(music.stringPlayable("E D G F B A C5 B ", 500), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Surprised)
    }
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 500), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("G F G A - F E D ", 500), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Fabulous)
    basic.pause(100)
    basic.clearScreen()
})
basic.showIcon(IconNames.SmallHeart)
