basic.forever(function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 99)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 99)
    basic.pause(1000)
    maqueen.motorStopAll()
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 99)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 99)
    basic.pause(1000)
    maqueen.motorStopAll()
    basic.pause(1000)
})
