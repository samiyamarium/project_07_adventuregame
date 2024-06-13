#! /usr/bin/env node
const inquirer=require('inquirer');
const chalk=require('chalk');
//enemy variables
let maxEnemyHealth=75;
let enemyAttackDamage=25;
//player variables
let playerhealth=100;
let attackdamage=50;
let Healthpotions=3;
let HealthPotionHealAmount=30;
let HealthPotionDropAmount=50;  //percentage
let rand=Math.random()*100;

let enemyhealth=maxEnemyHealth

console.log('Player Health = ', playerhealth,'HP','\n')
    console.log('Enemy Health = ',enemyhealth,'HP','\n')

let q=inquirer.prompt([{
    name:'enemy',
    type:'list',
    message:'Select your enemy!!',
    choices:['Skeleton','Zombie','Warrior','Assasin'],
},
{
    name:'Action',
    type:'list',
    message:'What do you want to do',
    choices:['Attack', 'Drink Potion','Run!'],
}])
.then(answer=>{
    
    
    let running=true;
    console.log('GAME:')
    if(running){
    console.log('\n',chalk.bgYellow.bold('Welcome to the Dungeon'),'\n')
console.log('Wooh!! You are brave. Ready to counter',chalk.redBright.bold( answer.enemy),'.','\n',answer.enemy,'has appeared')

if (enemyhealth>0){
    
    console.log('You have selected to ',chalk.yellow(answer.Action),'\n')

}
if(answer.enemy){
    
    if(answer.Action=='Attack'){
        let damagedealt=attackdamage
    let damagetaken=enemyAttackDamage
    enemyhealth=enemyhealth-damagedealt
    playerhealth=playerhealth-damagetaken
    console.log('\n','You strike the ', chalk.cyan(answer.enemy),'for',chalk.yellow(damagedealt),'damage!!')
    console.log('\n',chalk.yellow('You receive the',damagetaken,'in retaliation!!')) 
    console.log('-------------------------------------------------------------------','\n')
    console.log(chalk.bold('#',answer.enemy,'was defeated!! #'))
    console.log('\n','You have leFt with ', playerhealth,'HP') 
    if(rand<HealthPotionDropAmount){
        Healthpotions++;
     console.log('The',answer.enemy,'dropped a Health Potion')
     console.log('You now have',Healthpotions,'health potions','\n')
    } 
}
    if(answer.Action=='Drink Potion'){
        if(Healthpotions>0){
            playerhealth=playerhealth+HealthPotionHealAmount
            Healthpotions--;
            console.log('You drink a health potion, healing yourself for', HealthPotionHealAmount,'\n','You now have',playerhealth,'HP')
            console.log('-------------------------------------------------------------------','\n')
            console.log(chalk.bold('#',answer.enemy,'was defeated!! #'))
            console.log('\n','You have leFt with ', playerhealth,'HP')
            if(rand<HealthPotionDropAmount){
                Healthpotions++;
             console.log('The',answer.enemy,'dropped a Health Potion','\n')
             console.log('You now have',Healthpotions,'health potions','\n')
            } 
        
        }
        if(Healthpotions<0){
            console.log(chalk.redBright('You have no health potions left!, Defeat enemy for a chance to win!! :)'))
        }
    }
    if(answer.Action=='Run!'){
             console.log(chalk.redBright('You run away from the', answer.enemy,'.'))
    }
    if(playerhealth<1){
        console.log('You have taken too much damage :( ,You are too weak to go on !!','You limp out of the Dungeon, weak from battle ')
    }  
    
}
}
let e=inquirer.prompt([{
    name:'next',
    type:'list',
    message:chalk.yellow('What would you like to do now ?'),
    choices:['Continue Fighting', 'Exit Dungeon'],
},
])
.then(answer=>{
    console.log('You opted to', answer.next);
if(answer.next=='Continue Fighting') {
   inquirer.prompt( {
        name:'select_enemy',
        type:'list',
        message:chalk.magenta('\n','Select your next enemy'),
        choices:['Skeleton','Zombie','Warrior','Assasin'],
    }   )
    
    .then(answer=>{
        console.log(chalk.magenta('You can continue with adventure!!'))
        console.log('\n',chalk.green('You have selected your next enemy as', answer.select_enemy,'!!'))
        console.log('\n','Your HP',playerhealth)
        console.log(answer.select_enemy+'`s',' HP',enemyhealth)
        inquirer.prompt({
            name:'Action2',
            type:'list',
            message:'What do you want to do now',
            choices:['Attack', 'Drink Potion','Run!'],
        })
        .then(answer=>{
            console.log('You want to ',answer.Action2)
       
       
if (enemyhealth>0){
    
    console.log('You have selected to ',chalk.yellow(answer.Action2),'\n')
    



    
    if(answer.Action2=='Attack'){
        let damagedealt=attackdamage
    let damagetaken=enemyAttackDamage
    enemyhealth=enemyhealth-damagedealt
    playerhealth=playerhealth-damagetaken
    console.log('\n','You strike the ', 'enemy','for',chalk.yellow(damagedealt),'damage!!')
    console.log('\n',chalk.yellow('You receive the',damagetaken,'in retaliation!!')) 
    console.log('-------------------------------------------------------------------','\n')
    console.log(chalk.bold('#','Enemy','was defeated!! #'))
    console.log('\n','You have leFt with ', playerhealth,'HP') 
    if(rand<HealthPotionDropAmount){
        Healthpotions++;
     console.log('The','enemy','dropped a Health Potion')
     console.log('You now have',Healthpotions,'health potions','\n')
     console.log('                 ##########################')
        console.log('                 # Thanks for playing !!!!#')
        console.log('                 ##########################')
    } 
}
    if(answer.Action2=='Drink Potion'){
        if(Healthpotions>0){
            playerhealth=playerhealth+HealthPotionHealAmount
            Healthpotions--;
            console.log('You drink a health potion, healing yourself for', HealthPotionHealAmount,'\n','You now have',playerhealth,'HP')
            console.log('-------------------------------------------------------------------','\n')
            console.log(chalk.bold('#','enemy','was defeated!! #'))
            console.log('\n','You have leFt with ', playerhealth,'HP')
            if(rand<HealthPotionDropAmount){
                Healthpotions++;
             console.log('The','enemy','dropped a Health Potion','\n')
             console.log('You now have',Healthpotions,'health potions','\n')
             console.log('                 ##########################')
        console.log('                 # Thanks for playing !!!!#')
        console.log('                 ##########################')
            } 
        
        }}
        if(Healthpotions<0){
            console.log(chalk.redBright('You have no health potions left!, Defeat enemy for a chance to win!! :)'))
        }
    }
    if(answer.Action2=='Run!'){
             console.log(chalk.redBright('You run away from the enemy.'))
    }
    if(playerhealth<1){
        console.log('You have taken too much damage :( ,You are too weak to go on !!','You limp out of the Dungeon, weak from battle ')
    }  

})       
        
}

 )}
 if(answer.next=='Exit Dungeon'){
    console.log('\n','Your HP',playerhealth)
    console.log('Enemy`s',' HP',enemyhealth)
        console.log(chalk.yellow('You exit the Dungeon!!,Successful from your adventures!!'))
  
        console.log('                 ##########################')
        console.log('                 # Thanks for playing !!!!#')
        console.log('                 ##########################')
    } 

})

})
