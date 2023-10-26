"use strict";
import * as object from "./object.js";

// Player elements

const chooseArticuno = document.getElementById("button-articuno");
const chooseCharizard = document.getElementById("button-charizard");
const chooseRillaboom = document.getElementById("button-rillaboom");
const chooseHydreigon = document.getElementById("button-hydreigon");
const chooseVolcarona = document.getElementById("button-volcarona");
const chooseInteleon = document.getElementById("button-inteleon");
const chooseReuniclus = document.getElementById("button-reuniclus");
const chooseCinderace = document.getElementById("button-cinderace");

const playerInfo = document.getElementById("player-info-box");
const playerPkmnName = document.getElementById("player-pkmn-name");
const playerPkmnBackImg = document.getElementById("player_pkmn_back_img");
const playerHpBar = document.getElementById("player_lp");

const playerMove1 = document.getElementById("move0");
const playerMove2 = document.getElementById("move1");
const playerMove3 = document.getElementById("move2");
const playerMove4 = document.getElementById("move3");

// AI elements

const aiInfo = document.getElementById("opponent-info-box");
const aiPkmnName = document.getElementById("AI-pkmn-name");
const aiPkmnFrontImg = document.getElementById("opponent_pkmn_front_img");
const aiHpBar = document.getElementById("opponent_lp");

// UI Elements
const moveBox = document.getElementById('moves_box');
const scriptBox = document.getElementById('script_box');
const startBattleBox = document.getElementById('battle-beginning');
const endOfBattleBox = document.getElementById('end-of-battle');
const battleText = document.getElementById('text_battle');
const battleText2 = document.getElementById('text_battle_ai');
const restartButton = document.getElementById('star-again-button');

// Variables
const availablePkmn = [object.charizard, object.reuniclus, object.rillaboom, object.cinderace, object.inteleon, object.hydreigon, object.volcarona, object.articuno];
let playerPkmnParty = [];
let aiPkmnParty = [];

let currentPlayerPkmn;
let currentAIPkmn;

let isPlayerTurn = false;
let isEffective;
let totalDmg;

////////////
// FUNCTIONS
////////////

const setAIPkmn = function(){
    const pkmnIndex = Math.trunc(Math.random() * 8);
    currentAIPkmn = {...availablePkmn[pkmnIndex]}; // slice() method was added
};

const startUI = function(){
    // Set player info
    playerInfo.style.opacity = 1;
    playerPkmnName.textContent = currentPlayerPkmn.name;
    playerHpBar.style.width = '100%';
    playerPkmnBackImg.style.backgroundImage =`url(${currentPlayerPkmn.imageBack})`
    playerMove1.textContent = currentPlayerPkmn.moves[0].name;
    playerMove2.textContent = currentPlayerPkmn.moves[1].name;
    playerMove3.textContent = currentPlayerPkmn.moves[2].name;
    playerMove4.textContent = currentPlayerPkmn.moves[3].name;
    console.log(currentPlayerPkmn);

    // Set AI info
    setAIPkmn();
    aiInfo.style.opacity = 1;
    aiPkmnName.textContent = currentAIPkmn.name;
    aiHpBar.style.width = '100%';
    aiPkmnFrontImg.style.backgroundImage =`url(${currentAIPkmn.imageFront})`;
    console.log(currentAIPkmn);

    //Set UI info
    startBattleBox.style.display = 'none';
    moveBox.style.display = 'flex';

    //RESET POKEMON VALUES
    object.articuno.stats.currentHp = object.articuno.stats.totalHp;
    object.charizard.stats.currentHp = object.charizard.stats.totalHp;
    object.cinderace.stats.currentHp = object.cinderace.stats.totalHp;
    object.hydreigon.stats.currentHp = object.hydreigon.stats.totalHp;
    object.inteleon.stats.currentHp = object.inteleon.stats.totalHp;
    object.reuniclus.stats.currentHp = object.reuniclus.stats.totalHp;
    object.rillaboom.stats.currentHp = object.rillaboom.stats.totalHp;
    object.volcarona.stats.currentHp = object.volcarona.stats.totalHp;

}
const attackPkmn = function (attacker, defender, moveIndex){
    // Damage formula
    console.log(`${attacker.name} used ${attacker.moves[moveIndex].name}`);
    const dmg = ([(2 * 50 / 5) +2 ] * attacker.moves[moveIndex].basePower * attacker.stats.attack / defender.stats.def)/ 50 + 2;
    const effectiveness = checkEffectiveness(attacker, defender, moveIndex);
    const critRatio = isCriticalHit();

    totalDmg = Math.trunc(dmg * critRatio * effectiveness);

    // Update defender HP and HP-bar
    defender.stats.currentHp = defender.stats.currentHp - totalDmg;
    (defender.stats.currentHp <= 0) ? defender.stats.currentHp = 0 : defender.stats.currentHp;

    console.log(totalDmg);
    console.log(`Current ${defender.name} HP : ${defender.stats.currentHp}/${defender.stats.totalHp}`);

    if(isPlayerTurn){
        aiHpBar.style.width = `${defender.stats.currentHp * 100 / defender.stats.totalHp }%`;
    } else if (!isPlayerTurn) {
        playerHpBar.style.width = `${defender.stats.currentHp * 100 / defender.stats.totalHp }%`;
    }
    isPlayerTurn? isPlayerTurn = false : isPlayerTurn = true;
}

const stabMove = function(){
    
};

const isCriticalHit = function(){
    let randomNumb = Math.random();
    let threshold = 1/24;
    if (randomNumb <= threshold) {
        //console.log('Critical hit landed!')
        return 1.5;
    }else{
        return 1;
    }
};

const checkEffectiveness = function(attacker, defender, moveIndex){
    let acc = 1;
    isEffective = '';

    //Check if Super Effective
    defender.type.forEach(function(type,index,arr){
        if (attacker.moves[moveIndex].type.superEffectiveDmg.includes(type.name[0])){
            acc = acc * 2;
            //console.log(`${attacker.moves[moveIndex].type.superEffectiveDmg} SI incluye ${type.name}. Multiplier : ${acc}`);
        }else{
            //console.log(`${attacker.moves[moveIndex].type.superEffectiveDmg} NO incluye ${type.name}. Multiplier : ${acc}`);
        };
    });

    //Check if Not Effective
    defender.type.forEach(function(type,index,arr){
        if (attacker.moves[moveIndex].type.notVeryEffectiveDmg.includes(type.name[0])){
            acc = acc / 2;
            //console.log(`${attacker.moves[moveIndex].type.notVeryEffectiveDmg} SI incluye ${type.name[0]}. Multiplier : ${acc}`)
        }else{
            //console.log(`${attacker.moves[moveIndex].type.notVeryEffectiveDmg} NO incluye ${type.name[0]}. Multiplier : ${acc}`)
        };
    });

    //Check if NO DAMAGE is Dealt
    defender.type.forEach(function(type,index,arr){
        if (attacker.moves[moveIndex].type.noDamage.includes(type.name[0])){
            acc = acc * 0;
            //console.log(`${attacker.moves[moveIndex].type.noDamage} SI incluye ${type.name[0]}. Multiplier : ${acc}`)
        }else{
            //console.log(`${attacker.moves[moveIndex].type.noDamage} NO incluye ${type.name[0]}. Multiplier : ${acc}`)
        };
    });

    if (acc > 1){
        isEffective = `It's SUPER Effective`;
    } else if (acc === 0){
        isEffective = 'No Damage dealt';
    }else if (acc > 0 && acc < 1){
        isEffective = `It's NOT VERY Effective`;
    } else {
        isEffective = '';
    }

    return acc;
}

const showBattleScript = function(){
    scriptBox.style.display = 'block';
    moveBox.style.display = 'none';
    battleText.textContent = battleText2.textContent = '';
}

const hideBattleScript = function(){
    scriptBox.style.display = 'none';
    moveBox.style.display = 'flex';
}

const checkPlayerTurn = function(){
    if(currentPlayerPkmn.stats.speed > currentAIPkmn.stats.speed){
        isPlayerTurn = true;
    }else if (currentPlayerPkmn.stats.speed === currentAIPkmn.stats.speed){
        const random = Math.trunc(Math.random() * 10) + 1;
        (random >= 5) ? isPlayerTurn = true : isPlayerTurn = false ;
    } else {
        isPlayerTurn = false;
    }
}

const battleScript = function(attacker, defender, moveIndex){
    return `${attacker.name} used ${attacker.moves[moveIndex].name}\n${defender.name} lost ${totalDmg} HP\n${isEffective}`;
}

const battle = function(){
    // Hide Buttons and Show Script BOX
    showBattleScript();

    // Check speed of the first attacker
    checkPlayerTurn();

    //obtaining the pokemon move from the clicked button
    const idMove = this.id.slice(4); // Move position in the moves array
    const idMoveAI = Math.floor(Math.random() * 4);
    //console.log(idMoveAI);

    //atack pokemon
    if (isPlayerTurn){
        // Player attack, update AI healthbar and stats
        attackPkmn(currentPlayerPkmn,currentAIPkmn,idMove);

        //Log Batalla
        battleText.textContent = battleScript(currentPlayerPkmn,currentAIPkmn,idMove);

        // Check AI Fainted -- YES (battle END)
        if (currentAIPkmn.stats.currentHp <= 0){
            endOfBattleBox.style.opacity = 1;
            return;
        }

        // AI attack update Player healthbar and stats
        setTimeout(function(){
            // AI attack update Player healthbar and stats
            attackPkmn(currentAIPkmn, currentPlayerPkmn, idMoveAI);

            //Log Batalla
            battleText2.textContent = battleScript(currentAIPkmn,currentPlayerPkmn,idMoveAI);

            // Check AI Fainted -- YES (battle END)
            if (currentPlayerPkmn.stats.currentHp <= 0){
                endOfBattleBox.style.opacity = 1;
                return;
            }

            setTimeout(function(){
                // Show Buttons and Show Script BOX
                hideBattleScript();
            }, 2000);
        }, 2000);

    }else if (!isPlayerTurn){
        // AI attack update Player healthbar and stats
        attackPkmn(currentAIPkmn, currentPlayerPkmn, idMoveAI);

        //Log Batalla
        battleText2.textContent = battleScript(currentAIPkmn,currentPlayerPkmn,idMoveAI);

        // Check AI Fainted -- YES (battle END)
        if (currentPlayerPkmn.stats.currentHp <= 0){
            endOfBattleBox.style.opacity = 1;
            return;
        }

        setTimeout(function(){
            // Player attack, update AI healthbar and stats
            attackPkmn(currentPlayerPkmn,currentAIPkmn,idMove);

            //Log Batalla
            battleText.textContent = battleScript(currentPlayerPkmn,currentAIPkmn,idMove);

            // Check AI Fainted -- YES (battle END)
            if (currentAIPkmn.stats.currentHp <= 0){
                endOfBattleBox.style.opacity = 1;
                return;
            }
            setTimeout(function(){
                // Show Buttons and Show Script BOX
                hideBattleScript();
            }, 2000);
        },2000)
    }
}

/////////////////
//EVENT LISTENERS
/////////////////

playerMove1.addEventListener('click', battle);
playerMove2.addEventListener('click', battle);
playerMove3.addEventListener('click', battle);
playerMove4.addEventListener('click', battle);

restartButton.addEventListener('click',function(){
    //Reset Variables
    playerPkmnParty = [];
    aiPkmnParty = [];
    currentPlayerPkmn, currentAIPkmn = undefined;
    isPlayerTurn = false;

    //Reset UI
    endOfBattleBox.style.opacity = 0;
    scriptBox.style.display = 'none';
    playerInfo.style.opacity = 0;
    aiInfo.style.opacity = 0;

    startBattleBox.style.display = 'flex';
    //hidepokemon img

});

chooseArticuno.addEventListener('click',function(){
    const shallowCopy = {...object.articuno};
    playerPkmnParty.push(shallowCopy);
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})

chooseCharizard.addEventListener('click',function(){
    playerPkmnParty.push({...object.charizard});
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})

chooseCinderace.addEventListener('click',function(){
    playerPkmnParty.push({...object.cinderace});
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})

chooseHydreigon.addEventListener('click',function(){
    playerPkmnParty.push({...object.hydreigon});
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})

chooseInteleon.addEventListener('click',function(){
    playerPkmnParty.push({...object.inteleon});
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})

chooseReuniclus.addEventListener('click',function(){
    playerPkmnParty.push({...object.reuniclus});
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})

chooseRillaboom.addEventListener('click',function(){
    playerPkmnParty.push({...object.rillaboom});
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})

chooseVolcarona.addEventListener('click',function(){
    playerPkmnParty.push({...object.volcarona});
    currentPlayerPkmn = playerPkmnParty[0];
    startUI();
})
