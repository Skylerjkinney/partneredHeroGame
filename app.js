playerGold = 0


const heroes = [
    {
        name: 'Josh Demek',
        type: 'Baller',
        damage: 10,
        health: 100
        
    },
    {
        name: 'Skyler Seawind',
        type: 'elf',
        damage: 5,
        health: 100
    }
]

const boss = {
    type: 'country',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    gold: 50
}

function attack(){
    heroes.forEach(hero => {
        hero.health -= boss.damage
        boss.health -= hero.damage
        console.log(boss.health, '🐌', hero.health, '🦸')
    })
    if(boss.health <= 0){
        boss.maxHealth += 50
        boss.damage += 5
        boss.level += 1
        boss.gold += 50
        boss.health = boss.maxHealth
    }
}