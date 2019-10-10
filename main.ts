input.onButtonPressed(Button.AB, function () {
    basic.showString("Join")
    loraBit.reset()
    loraBit.param_OTAA(
    "00AD374E71045F8C",
    "70B3D57ED00219AA",
    "2F30646581ACF764769FED0FB6B105B1"
    )
    loraBit.join(loraBit_freq_Plan.AS923)
})
loraBit.whenReceived(function () {
    if (loraBit.nacknowledged()) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
        if (loraBit.getReceivedPort() > 0) {
            basic.showString(loraBit.getReceivedPayload())
        }
    }
})
loraBit.param_Config(
2,
5,
loraBit_ADR.On
)
basic.forever(function () {
    if (loraBit.available()) {
        loraBit.sendPacket(loraBit_Confirmed.Confirmed, 1, loraBit.packHexString("Hello, World!"))
        images.createImage(`
            . . . . #
            . . . . #
            . . . # #
            . . # # #
            # # # # #
            `).scrollImage(1, 50)
        basic.clearScreen()
        basic.pause(10000)
    } else {
        basic.pause(1000)
    }
})
