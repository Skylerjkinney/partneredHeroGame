playerGold = 0


const heroes = [
    {
        name: 'Josh Demek',
        type: 'Baller',
        picture: '🧛',
        damage: 10,
        health: 100,
        maxHealth: 100,
        
    },
    {
        name: 'Skyler Seawind',
        type: 'Alpha',
        picture: '🦸',
        damage: 5,
        health: 100,
        maxHealth: 100,
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

function attack(){
    healthCheck()
    heroes.forEach(hero => {
        hero.health -= boss.damage
        boss.health -= hero.damage
        console.log(boss.health, '🐌', hero.health, hero.picture)
    })
}


 function healthCheck(){
    if(boss.health <= 0){
        boss.maxHealth += 50
        boss.damage += 5
        boss.level += 1
        boss.gold += 50
        boss.health = boss.maxHealth
        levelUp()
    }
 }

function levelUp() { 
    heroes.forEach(hero => {
        hero.maxHealth += 15,
        hero.damage += 5,
        console.log(hero)
        playerGold += boss.gold
        hero.health = hero.maxHealth
    })
    window.alert('LEVEL UP')
    }