function prand () {
    basic.showNumber(randint(0, 9))
}
function trng () {
    basic.showNumber((input.temperature() + control.millis() + (input.lightLevel() + input.acceleration(Dimension.Strength)) + input.compassHeading() + input.magneticForce(Dimension.Strength)) % 10)
}
basic.showString("STARTING     ")
for (let index = 0; index < 1e+101; index++) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Starting PRNG...")
        for (let index = 0; index < 1e+101; index++) {
            prand()
            basic.pause(75)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("starting TRNG...")
        for (let index = 0; index < 1e+101; index++) {
            trng()
            basic.pause(75)
        }
    }
}
basic.forever(function () {
	
})
