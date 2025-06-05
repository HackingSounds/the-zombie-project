namespace SpriteKind {
    export const Ballistic_Weapon = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (PistolEquippedplayer1 == true) {
        Xdirrection = 0
        Ydirrection = -200
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    pause(2000)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (PistolEquippedplayer1 == true) {
        Xdirrection = 200
        Ydirrection = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (PistolEquippedplayer1 == true) {
        Bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player1, Xdirrection, Ydirrection)
        music.play(music.createSoundEffect(WaveShape.Noise, 1066, 1, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
})
function PistolFunction () {
    Pistol = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . e b b b b b c . . . . 
        . . . . . . e e 1 b b . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ballistic_Weapon)
    Pistol.setPosition(randint(30, 100), randint(30, 100))
    animation.runImageAnimation(
    Pistol,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c c . . . . . . . 
        . . . . e b b b b b c . . . . . 
        . . . . . e e 1 b b . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . . e b c b c . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . c b b b b b e . . . . . 
        . . . . . b b 1 e e . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . . e b c b c . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
}
function Player1_Function () {
    Player1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e d e e e . . . . . 
        . . . . e e d f d f . . . . . . 
        . . . . . e d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b b c c b c b . . . . . 
        . . . . b b c b c c b . . . . . 
        . . . . b d c c c c d . . . . . 
        . . . . d d c b b c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . f e . f e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `, SpriteKind.Player)
    info.player1.setLife(3)
    controller.player1.moveSprite(Player1, 85, 85)
    info.player1.setScore(0)
    characterAnimations.loopFrames(
    Player1,
    [img`
        . . . . e . . . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c c c c c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . f f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e . . . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c c c c c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e . . . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . d d c c b c c b . . . . . 
        . . . d d c c c c c d . . . . . 
        . . . . . c c c c c d . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . e . . . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c c c c c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . f f . e e . . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e . . . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c c c c c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e . . . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c d d . . . . 
        . . . . d c c c c c d d . . . . 
        . . . . d c c c c c . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    Player1,
    [img`
        . . . . . . . . . . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e f d f e e . . . . . 
        . . . . . e d d d e . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c b b b c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . f f . e e . . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e f d f e e . . . . . 
        . . . . . e d d d e . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c b b b c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e f d f e e . . . . . 
        . . . . . e d d d e . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . d d c c b c c b . . . . . 
        . . . d d c c c c c d . . . . . 
        . . . . . c b b b c . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e f d f e e . . . . . 
        . . . . . e d d d e . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c b b b c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . f f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e f d f e e . . . . . 
        . . . . . e d d d e . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c b . . . . . 
        . . . . b c c c c c d . . . . . 
        . . . . d c b b b c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e f d f e e . . . . . 
        . . . . . e d d d e . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b c b c b c b . . . . . 
        . . . . b c c b c c d d . . . . 
        . . . . d c c c c c d d . . . . 
        . . . . . c b b b c . . . . . . 
        . . . . . e e . e e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Player1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e d e e e . . . . . 
        . . . . e e d f d f . . . . . . 
        . . . . . e d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . b b c c b c b . . . . . 
        . . . . b b c b c c b . . . . . 
        . . . . b d c b b c d . . . . . 
        . . . . d d e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . f e . f e . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e d e e e . . . . . 
        . . . . e e d f d f . . . . . . 
        . . . . . e d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . b b c b c . b . . . . . 
        . . . . b b c c b c b . . . . . 
        . . . . b d c b c c d . . . . . 
        . . . . d d c c c c d . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . f e e e e . . . . . . 
        . . . . . f f . f e . . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e d e e e . . . . . 
        . . . . e e d f d f . . . . . . 
        . . . . . e d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b b c c b c b . . . . . 
        . . . . b b c b c c b . . . . . 
        . . . . b d c c c c d . . . . . 
        . . . . d d c b b c d . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . f e e . . . . . . . 
        . . . . . . f f e . . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e d e e e . . . . . 
        . . . . e e d f d f . . . . . . 
        . . . . . e d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b b c c b c b . . . . . 
        . . . . b b c b c c b . . . . . 
        . . . . b d c c c c d . . . . . 
        . . . . d d c b b c d . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e f . . . . . . . 
        . . . . . . e f f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e d e e e . . . . . 
        . . . . e e d f d f . . . . . . 
        . . . . . e d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . c b c . . . . . . . 
        . . . . b b c c b c b . . . . . 
        . . . . b b c b c c b . . . . . 
        . . . . b d c c c c d . . . . . 
        . . . . d d c b b c d . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e f e . . . . . . 
        . . . . . f e . f f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Player1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e . e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e d e e e . . . . 
        . . . . . . f d f d e e . . . . 
        . . . . . . d d d d e . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . b c b c c b b . . . . 
        . . . . . b c c b c b b . . . . 
        . . . . . d c b b c d b . . . . 
        . . . . . . e e e e d d . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e f . e f . . . . . 
        . . . . . . f f . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e . e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e d e e e . . . . 
        . . . . . . f d f d e e . . . . 
        . . . . . . d d d d e . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . b . c b c b b . . . . 
        . . . . . b c b c c b b . . . . 
        . . . . . d c c b c d b . . . . 
        . . . . . d c c c c d d . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e f . . . . . 
        . . . . . . e f . f f . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e . e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e d e e e . . . . 
        . . . . . . f d f d e e . . . . 
        . . . . . . d d d d e . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . . c b c . . . . . . 
        . . . . . b c b c c b b . . . . 
        . . . . . b c c b c b b . . . . 
        . . . . . d c c c c d b . . . . 
        . . . . . d c b b c d d . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e e f . . . . . . 
        . . . . . . . e f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e . e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e d e e e . . . . 
        . . . . . . f d f d e e . . . . 
        . . . . . . d d d d e . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . . c b c . . . . . . 
        . . . . . b c b c c b b . . . . 
        . . . . . b c c b c b b . . . . 
        . . . . . d c c c c d b . . . . 
        . . . . . d c b b c d d . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . f e e . . . . . . 
        . . . . . . . f f e . . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e . e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e d e e e . . . . 
        . . . . . . f d f d e e . . . . 
        . . . . . . d d d d e . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . . . c b c . . . . . . 
        . . . . . b c b c c b b . . . . 
        . . . . . b c c b c b b . . . . 
        . . . . . d c c c c d b . . . . 
        . . . . . d c b b c d d . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e f e e e . . . . . 
        . . . . . . f f . e f . . . . . 
        . . . . . . . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(8)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (PistolEquippedplayer1 == true) {
        Xdirrection = -200
        Ydirrection = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (PistolEquippedplayer1 == true) {
        Xdirrection = 0
        Ydirrection = 200
    }
})
let Zombie: Sprite = null
let Pistol: Sprite = null
let Player1: Sprite = null
let Bullet: Sprite = null
let Ydirrection = 0
let Xdirrection = 0
let PistolEquippedplayer1 = false
scene.setBackgroundColor(4)
tiles.setCurrentTilemap(tilemap`level2`)
info.startCountdown(60)
Player1_Function()
for (let value of sprites.allOfKind(SpriteKind.Player)) {
    value.setStayInScreen(true)
}
PistolEquippedplayer1 = false
PistolFunction()
game.onUpdate(function () {
    if (Player1.overlapsWith(Pistol)) {
        Xdirrection = 100
        Ydirrection = 0
        PistolEquippedplayer1 = true
        Player1.sayText("Press A To Shoot And B To Reload", 3000, false)
        sprites.destroy(Pistol)
        Player1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . e e e . e . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e d e e e . . . . . . . . 
            . e e d f d f . . . . . . . . . 
            . . e d d d d . . . . . . . . . 
            . . d d d d d . c c c c . . . . 
            . . . c b c . e b b b b b c . . 
            . b b c c b c b e e d b b . . . 
            . b b c b c c b e e d d . . . . 
            . b d c c c c . e e . . . . . . 
            . d d c b b c . . . . . . . . . 
            . . e e e e e . . . . . . . . . 
            . . e e e e e . . . . . . . . . 
            . . f e . f e . . . . . . . . . 
            . . f f . f f . . . . . . . . . 
            `)
        characterAnimations.loopFrames(
        Player1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e e . e . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e d e e e . . . . . . . . 
            . e e d f d f . . . . . . . . . 
            . . e d d d d . c c c c . . . . 
            . . d d d d d e b b b b b c . . 
            . b b c c b c b e e d b b . . . 
            . b b c b c c b e e d d . . . . 
            . b d c b b c . e e . . . . . . 
            . d d e e e e . . . . . . . . . 
            . . e e e e e . . . . . . . . . 
            . . f e . f e . . . . . . . . . 
            . . f f . f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . e e e . e . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e d e e e . . . . . . . . 
            . e e d f d f . . . . . . . . . 
            . . e d d d d . c c c c . . . . 
            . . d d d d d e b b b b b c . . 
            . b b c b c . b e e d b b . . . 
            . b b c c b c b e e d d . . . . 
            . b d c b c c . e e . . . . . . 
            . d d c c c c . . . . . . . . . 
            . . . c b b c . . . . . . . . . 
            . . e e e e e . . . . . . . . . 
            . . f e e e e . . . . . . . . . 
            . . f f . f e . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . e e e . e . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e d e e e . . . . . . . . 
            . e e d f d f . . . . . . . . . 
            . . e d d d d . . . . . . . . . 
            . . d d d d d . c c c c . . . . 
            . . . c b c . e b b b b b c . . 
            . b b c c b c b e e d b b . . . 
            . b b c b c c b e e d d . . . . 
            . b d c c c c . e e . . . . . . 
            . d d c b b c . . . . . . . . . 
            . . . e e e . . . . . . . . . . 
            . . . f e e . . . . . . . . . . 
            . . . f f e . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . e e e . e . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e d e e e . . . . . . . . 
            . e e d f d f . . . . . . . . . 
            . . e d d d d . . . . . . . . . 
            . . d d d d d . c c c c . . . . 
            . . . c b c . e b b b b b c . . 
            . b b c c b c b e e d b b . . . 
            . b b c b c c b e e d d . . . . 
            . b d c c c c . e e . . . . . . 
            . d d c b b c . . . . . . . . . 
            . . . e e e . . . . . . . . . . 
            . . . e e f . . . . . . . . . . 
            . . . e f f . . . . . . . . . . 
            . . . f f . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . e e e . e . . . . . . . . 
            . . e e e e e e . . . . . . . . 
            . e e e d e e e . . . . . . . . 
            . e e d f d f . . . . . . . . . 
            . . e d d d d . . . . . . . . . 
            . . d d d d d . c c c c . . . . 
            . . . c b c . e b b b b b c . . 
            . b b c c b c b e e d b b . . . 
            . b b c b c c b e e d d . . . . 
            . b d c c c c . e e . . . . . . 
            . d d c b b c . . . . . . . . . 
            . . e e e e e . . . . . . . . . 
            . . e e e f e . . . . . . . . . 
            . . f e . f f . . . . . . . . . 
            . . f f . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        Player1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e . e e e . . . 
            . . . . . . . . e e e e e e . . 
            . . . . . . . . e e e d e e e . 
            . . . . . . . . . f d f d e e . 
            . . . . c c c c . d d d d e . . 
            . . c b b b b b e d d d d d . . 
            . . . b b d e e b c b c c b b . 
            . . . . d d e e b c c b c b b . 
            . . . . . . e e . c b b c d b . 
            . . . . . . . . . e e e e d d . 
            . . . . . . . . . e e e e e . . 
            . . . . . . . . . e f . e f . . 
            . . . . . . . . . f f . f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e . e e e . . . 
            . . . . . . . . e e e e e e . . 
            . . . . . . . . e e e d e e e . 
            . . . . . . . . . f d f d e e . 
            . . . . c c c c . d d d d e . . 
            . . c b b b b b e d d d d d . . 
            . . . b b d e e b . c b c b b . 
            . . . . d d e e b c b c c b b . 
            . . . . . . e e . c c b c d b . 
            . . . . . . . . . c c c c d d . 
            . . . . . . . . . c b b c . . . 
            . . . . . . . . . e e e e e . . 
            . . . . . . . . . e e e e f . . 
            . . . . . . . . . e f . f f . . 
            . . . . . . . . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e . e e e . . . 
            . . . . . . . . e e e e e e . . 
            . . . . . . . . e e e d e e e . 
            . . . . . . . . . f d f d e e . 
            . . . . . . . . . d d d d e . . 
            . . . . c c c c . d d d d d . . 
            . . c b b b b b e . c b c . . . 
            . . . b b d e e b c b c c b b . 
            . . . . d d e e b c c b c b b . 
            . . . . . . e e . c c c c d b . 
            . . . . . . . . . c b b c d d . 
            . . . . . . . . . . e e e . . . 
            . . . . . . . . . . e e f . . . 
            . . . . . . . . . . e f f . . . 
            . . . . . . . . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e . e e e . . . 
            . . . . . . . . e e e e e e . . 
            . . . . . . . . e e e d e e e . 
            . . . . . . . . . f d f d e e . 
            . . . . . . . . . d d d d e . . 
            . . . . c c c c . d d d d d . . 
            . . c b b b b b e . c b c . . . 
            . . . b b d e e b c b c c b b . 
            . . . . d d e e b c c b c b b . 
            . . . . . . e e . c c c c d b . 
            . . . . . . . . . c b b c d d . 
            . . . . . . . . . . e e e . . . 
            . . . . . . . . . . f e e . . . 
            . . . . . . . . . . f f e . . . 
            . . . . . . . . . . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . e . e e e . . . 
            . . . . . . . . e e e e e e . . 
            . . . . . . . . e e e d e e e . 
            . . . . . . . . . f d f d e e . 
            . . . . . . . . . d d d d e . . 
            . . . . c c c c . d d d d d . . 
            . . c b b b b b e . c b c . . . 
            . . . b b d e e b c b c c b b . 
            . . . . d d e e b c c b c b b . 
            . . . . . . e e . c c c c d b . 
            . . . . . . . . . c b b c d d . 
            . . . . . . . . . e e e e e . . 
            . . . . . . . . . e f e e e . . 
            . . . . . . . . . f f . e f . . 
            . . . . . . . . . . . . f f . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        Player1,
        [img`
            . . . . . . . . . . e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e f d f e e . . . . . 
            . . . . . e d d d e . . . . . . 
            . . . . . d d b d d . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . b e b c b c b . . . . . 
            . . . . b c b b b c b . . . . . 
            . . . . b c d 1 d b b . . . . . 
            . . . . d c c e d c . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . f f . e e . . . . . . 
            . . . . . . . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e f d f e e . . . . . 
            . . . . . e d d d e . . . . . . 
            . . . . . d d b d d . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . b e b c b c b . . . . . 
            . . . . b c b b b c b . . . . . 
            . . . . b c d 1 d b b . . . . . 
            . . . . d c c e d c . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e . e e . . . . . . 
            . . . . . f f . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e f d f e e . . . . . 
            . . . . . d d b d d . . . . . . 
            . . . . . d b b b d . . . . . . 
            . . . . b e b c b c b . . . . . 
            . . . d d c b b b c b . . . . . 
            . . . d d c d 1 d b b . . . . . 
            . . . . . c c e d c . . . . . . 
            . . . . . e e . e e . . . . . . 
            . . . . . f f . f f . . . . . . 
            `,img`
            . . . . . . . . . . e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e f d f e e . . . . . 
            . . . . . e d d d e . . . . . . 
            . . . . . d d b d d . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . b e b c b c b . . . . . 
            . . . . b c b b b c b . . . . . 
            . . . . b c d 1 d b b . . . . . 
            . . . . d c c e d c . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e . f f . . . . . . 
            . . . . . f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e f d f e e . . . . . 
            . . . . . e d d d e . . . . . . 
            . . . . . d d b d d . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . b e b c b c b . . . . . 
            . . . . b c b b b c b . . . . . 
            . . . . b c d 1 d b b . . . . . 
            . . . . d c c e d c . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . . e e . e e . . . . . . 
            . . . . . f f . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e e . . . . . 
            . . . . e e f d f e e . . . . . 
            . . . . . e d d d e . . . . . . 
            . . . . . d d b d d . . . . . . 
            . . . . . . b b b . . . . . . . 
            . . . . b e b c b c b . . . . . 
            . . . . b c b b b c b . . . . . 
            . . . . b c d 1 d b b . . . . . 
            . . . . d c c e d c . . . . . . 
            . . . . . e e . e e . . . . . . 
            . . . . . f f . f f . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
    }
})
game.onUpdate(function () {
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(2000, function () {
    Zombie = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 3 . . . . . . . 
        . . . . 7 7 7 7 3 3 . . . . . . 
        . . . . 7 7 7 f 7 7 . . . . . . 
        . . . . . f 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . 7 7 7 e e e e e . . . . . 
        . . . 7 7 7 e 7 7 7 e . . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . c b c c b . . . . . 
        . . . . . . c b c c b . . . . . 
        . . . . . . c b . c b . . . . . 
        . . . . . . f b . f b . . . . . 
        `, randint(-10, 10), randint(-10, 10))
    Zombie.setFlag(SpriteFlag.GhostThroughWalls, true)
    Zombie.setKind(SpriteKind.Enemy)
    Zombie.follow(Player1, randint(5, 15))
    animation.runImageAnimation(
    Zombie,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 3 . . . . . . . 
        . . . . 7 7 7 7 3 3 . . . . . . 
        . . . . 7 7 7 f 7 7 . . . . . . 
        . . . . . f 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . 7 7 7 e e e e e . . . . . 
        . . . 7 7 7 e 7 7 7 e . . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . c b c c b . . . . . 
        . . . . . . c b c c b . . . . . 
        . . . . . . c b . c b . . . . . 
        . . . . . . f b . f b . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 3 . . . . . . . 
        . . . . 7 7 7 7 3 3 . . . . . . 
        . . . . 7 7 7 f 7 7 . . . . . . 
        . . . . . f 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . 7 7 7 e e e e . . . . . . 
        . . . 7 7 7 e 7 7 7 e . . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . c c b b . . . . . 
        . . . . . . . c c b . . . . . . 
        . . . . . . . c f b . . . . . . 
        . . . . . . . f b . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 3 . . . . . . . 
        . . . . 7 7 7 7 3 3 . . . . . . 
        . . . . 7 7 7 f 7 7 . . . . . . 
        . . . . . f 7 7 7 7 . . . . . . 
        . . . 7 7 7 7 7 7 e . . . . . . 
        . . . 7 7 7 e 7 7 7 e . . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . c c b b . . . . . 
        . . . . . . . c c b . . . . . . 
        . . . . . . . f f b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 3 . . . . . . . 
        . . . . 7 7 7 7 3 3 . . . . . . 
        . . . . 7 7 7 f 7 7 . . . . . . 
        . . . . . f 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . 7 7 7 e e e e e . . . . . 
        . . . 7 7 7 e 7 7 7 e . . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . c b c c b . . . . . 
        . . . . . . c b c c b . . . . . 
        . . . . . . c b . c b . . . . . 
        . . . . . . f b . f b . . . . . 
        `],
    100,
    true
    )
})
forever(function () {
    music.play(music.createSong(hex`004d000408020204001c00100500640000041e000004000000000000000000000000000a040004300000000400010808000c00010810001400010c18001c00010820002400010828002c00010830003400010c38003c00010f06001c00010a006400f401640000040000000000000000000000000000000002300000000400011d08000c00011d10001400012018001c00011d20002400011d28002c00011d30003400012038003c000124`), music.PlaybackMode.UntilDone)
})
