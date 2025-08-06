serial.redirectToUSB()
irRemote.connectInfrared(DigitalPin.P16)
basic.forever(function () {
    serial.writeValue("IR:", irRemote.returnIrButton())
    basic.pause(1000)
})
