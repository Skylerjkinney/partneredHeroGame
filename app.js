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

const bosses = [{
    type: 'country',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    gold: 50
},
{   
    type: 'forest',
    health: 150,
    maxHealth: 150,
    damage: 7,
    level: 2,
    gold:100

}
]
function attack(){
    heroes.forEach(hero => {
        hero.health -= boss.damage
    })
    bosses.forEach(boss => 
        boss.health -= hero.damage)
        console.log(boss.health, hero.health)
}