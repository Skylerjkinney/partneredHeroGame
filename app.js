let playerGold = 0
let gameOver = false
setInterval(slimeTime, 3000)

const heroes = [
    {
        name: 'Josh',
        type: 'Baller',
        picture: '🧛',
        damage: 10,
        health: 100,
        maxHealth: 100,
        class: 'Paladin',
        level: 1

    },
    {
        name: 'Skyler',
        type: 'Alpha',
        picture: '🦸',
        damage: 5,
        health: 100,
        maxHealth: 100,
        class: 'Sorcerer',
        level: 1
    }
]

const boss = {
    type: 'country',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    gold: 50,
}

function attack() {
    healthCheck()
    heroes.forEach(hero => {
        boss.health -= hero.damage
        console.log(boss.health, '🐌', hero.health, hero.picture)
    })

}
function slimeTime() {
    heroes.forEach(hero => {
        hero.health -= boss.damage
    })
    console.log(heroes)
    gameOverCheck()
}


function healthCheck() {
    if (boss.health <= 0) {
        boss.maxHealth += 70
        boss.damage *= 1.75
        boss.level += 1
        boss.gold += 50
        boss.health = boss.maxHealth
        levelUp()
    }
    updateStatus()
}

function levelUp() {
    heroes.forEach(hero => {
        hero.maxHealth += 15,
            hero.damage += 5,
            hero.level += 1,
            console.log(hero)
        playerGold += boss.gold
        hero.health = hero.maxHealth
    })
    window.alert('LEVEL UP')
}

function gameOverCheck() {
    let deadHeroes = heroes.filter(hero => hero.health <= 0)
    if (deadHeroes.length == heroes.length) {
        window.alert('DUDE THIS GAME WAS SUPPOSED TO BE EASY WTF')
    }
}

function updateStatus() {
    heroes.forEach(hero => {
        let cardElm = document.getElementById(hero.name.toLocaleLowerCase())
        console.log('card elem', cardElm);
        let statsElm = cardElm.querySelector('.stats')
        statsElm.innerText = `${hero.class} | ${hero.health} | ${hero.level}`
    })
}