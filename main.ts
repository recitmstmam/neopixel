let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P12, 40, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
