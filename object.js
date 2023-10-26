
//TYPING LIST
//class Type (name, superEffectiveDmg, notVeryEffectiveDmg, noDamage){
const typeList = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'];

const normal = {
    name : [typeList[0]],
    superEffectiveDmg : [],
    notVeryEffectiveDmg : [typeList[12],typeList[16]],
    noDamage : [typeList[13]]
}

const fire = {
    name : [typeList[1]],
    superEffectiveDmg : [typeList[4],typeList[5],typeList[11],typeList[16]],
    notVeryEffectiveDmg : [typeList[1], typeList[2], typeList[12], typeList[14]],
    noDamage : []
}

const water = {
    name : [typeList[2]],
    superEffectiveDmg : [typeList[1], typeList[8], typeList[12]],
    notVeryEffectiveDmg : [typeList[2],typeList[4],typeList[14]],
    noDamage : []
}

const electric = {
    name : [typeList[3]],
    superEffectiveDmg : [typeList[2], typeList[9]],
    notVeryEffectiveDmg : [typeList[3],typeList[4],typeList[14]],
    noDamage : [typeList[8]]
}

const grass = {
    name : [typeList[4]],
    superEffectiveDmg : [typeList[2], typeList[8], typeList[12]],
    notVeryEffectiveDmg : [typeList[1],typeList[4],typeList[7],typeList[9],typeList[11],typeList[14],typeList[16]],
    noDamage : []
}

const ice = {
    name : [typeList[5]],
    superEffectiveDmg : [typeList[4], typeList[8],typeList[9], typeList[14]],
    notVeryEffectiveDmg : [typeList[1],typeList[2],typeList[5],typeList[16]],
    noDamage : []
}

const fighting = {
    name : [typeList[6]],
    superEffectiveDmg : [typeList[0], typeList[5], typeList[12], typeList[15], typeList[16]],
    notVeryEffectiveDmg : [typeList[7],typeList[9],typeList[10],typeList[11], typeList[17]], 
    noDamage : [typeList[13]]
}

const poison = {
    name : [typeList[7]],
    superEffectiveDmg : [typeList[4], typeList[17]],
    notVeryEffectiveDmg : [typeList[7],typeList[8],typeList[12],typeList[13]], 
    noDamage : [typeList[16]]
}

const ground = {
    name : [typeList[8]],
    superEffectiveDmg : [typeList[1], typeList[3], typeList[7],typeList[12],typeList[16]],
    notVeryEffectiveDmg : [typeList[4],typeList[11]], 
    noDamage : [typeList[9]]
}

const flying = {
    name : [typeList[9]],
    superEffectiveDmg : [typeList[4], typeList[6], typeList[11]],
    notVeryEffectiveDmg : [typeList[3],typeList[12],typeList[16]], 
    noDamage : []
}

const psychic = {
    name : [typeList[10]],
    superEffectiveDmg : [typeList[6], typeList[7]],
    notVeryEffectiveDmg : [typeList[10],typeList[16]], 
    noDamage : [typeList[15]]
}

const bug = {
    name : [typeList[11]],
    superEffectiveDmg : [typeList[4], typeList[10], typeList[15]],
    notVeryEffectiveDmg : [typeList[1],typeList[6],typeList[7], typeList[9], typeList[13],typeList[16],typeList[17]], 
    noDamage : []
}

const rock = {
    name : [typeList[12]],
    superEffectiveDmg : [typeList[1], typeList[5], typeList[9],typeList[11]],
    notVeryEffectiveDmg : [typeList[6],typeList[8],typeList[16]], 
    noDamage : []
}

const ghost = {
    name : [typeList[13]],
    superEffectiveDmg : [typeList[10],typeList[13]],
    notVeryEffectiveDmg : [typeList[15]], 
    noDamage : [typeList[0]]
}

const dragon = {
    name : [typeList[14]],
    superEffectiveDmg : [typeList[14]],
    notVeryEffectiveDmg : [typeList[16]],
    noDamage : [typeList[17]]
}

const dark = {
    name : [typeList[15]],
    superEffectiveDmg : [typeList[10],typeList[13]],
    notVeryEffectiveDmg : [typeList[6],typeList[15],typeList[17]], 
    noDamage : []
}

const steel = {
    name : [typeList[16]],
    superEffectiveDmg : [typeList[5], typeList[12], typeList[17]],
    notVeryEffectiveDmg : [typeList[1],typeList[2],typeList[3],typeList[16]], 
    noDamage : []
}

const fairy = {
    name : [typeList[17]],
    superEffectiveDmg : [typeList[6], typeList[14], typeList[15]],
    notVeryEffectiveDmg : [typeList[1],typeList[7],typeList[16]], 
    noDamage : []
}

const emptyType = {
    name : [],
    superEffectiveDmg : [],
    notVeryEffectiveDmg : [],
    noDamage : []
}

const types = [normal, fire, water, electric, grass, ice, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy, emptyType];

////MOVE LIST
//class Move  (name, basePower, type) { (name, basePower, accuracy, type, effect, category, pps)

const thunderBolt = {
    name : "Thunderbolt", 
    basePower : 90,
    type : electric
}

const dragonPulse = {
    name : 'Dragon Pulse', 
    basePower : 90, 
    type : dragon
}

const fireBlast = {
    name : 'Fire Blast', 
    basePower : 110, 
    type : fire
}

const hurricane = {
    name : 'Hurricane', 
    basePower : 110, 
    type : flying
}

const flameThrower = {
    name : 'Flamethrower', 
    basePower : 90, 
    type : fire
}

const auraSphere = {
    name : 'Aura Sphere', 
    basePower : 90, 
    type : fighting
}

const closeCombat = {
    name : 'Close Combat', 
    basePower : 120, 
    type : fighting
}

const meteorMash = {
    name : 'Meteor Mash', 
    basePower : 100, 
    type : steel
}

const boneRush = {
    name : 'Bone Rush', 
    basePower : 25, 
    type : ground
}

const dragonClaw = {
    name : 'Dragon Claw', 
    basePower : 80, 
    type : dragon
}

const earthQuake = {
    name : 'Earthquake', 
    basePower : 100, 
    type : ground
}

const rockSlide = {
    name : 'Rock Slide', 
    basePower : 75, 
    type : rock
}

const shadowBall = {
    name : 'Shadow Ball', 
    basePower : 80, 
    type : ghost
}

const fireFang = {
    name : 'Fire Fang', 
    basePower : 70, 
    type : fire
}

const hiddenPowerIce = {
    name : 'Hidden Power (ICE)', 
    basePower : 70, 
    type : ice
}

const chargeBeam = {
    name : 'Charge Beam', 
    basePower : 50, 
    type : electric
}

const psyShock = {
    name : 'Psyshock', 
    basePower : 80, 
    type : psychic
}

const focusBlast = {
    name : 'Focus Blast', 
    basePower : 120, 
    type : fighting
}

const energyBall = {
    name : 'Energy Ball', 
    basePower : 90, 
    type : grass
}

const woodHammer = {
    name : 'Wood Hammer', 
    basePower : 120, 
    type : grass
}

const highHorsePower = {
    name : 'High Horsepower', 
    basePower : 95, 
    type : ground
}

const megaPunch = {
    name : 'Mega Punch', 
    basePower : 80, 
    type : normal
}

const superPower = {
    name : 'Superpower', 
    basePower : 120, 
    type : fighting
}

const darkPulse = {
    name : 'Dark Pulse', 
    basePower : 80, 
    type : dark
}

const dracoMeteor = {
    name : 'Draco Meteor', 
    basePower : 120, 
    type : dragon
}

const bugBuzz = {
    name : 'Bug Buzz', 
    basePower : 90, 
    type : bug
}

const fieryDance = {
    name : 'Fiery Dance', 
    basePower : 80, 
    type : fire
}

const gigaDrain = {
    name : 'Giga Drain', 
    basePower : 75, 
    type : grass
}

const pyroBall = {
    name : 'Pyro Ball', 
    basePower : 120, 
    type : fire
}

const gunkShot = {
    name : 'Gunk Shot', 
    basePower : 120, 
    type : poison
}

const snipeShot = {
    name : 'Snipe Shot', 
    basePower : 80, 
    type : water
}

const iceBeam = {
    name : 'Ice Beam', 
    basePower : 90, 
    type : steel
}

const ironHead = {
    name : 'Iron Head', 
    basePower : 80, 
    type : steel
}

const hydroPump = {
    name : 'Hydro Pump', 
    basePower : 120, 
    type : water
}

const freezingGlare = {
    name : 'Freezing Glare', 
    basePower : 90, 
    type : psychic
}


//POKEMON LIST
// Class Pokemon (name,type1,type2,ability,hp,atk,def,speed,moveSet)

/*TROPIUS = new Pokemon('Charizard','Fire','ninguna',150,100,70,120);
DONPHAN( Earthquake, rock tomb, rollout, take down)
GRENINJA ( water shuriken, double team, ice beam, night slash)
UMBREON ( moonlight, snarl, foul play, faint attack )
SNORLAX ( belly drum, body slam, rest, fire punch)
GARDEVOIR (moonblast, pychic, hypnosis, dream eater )
DECIDUEYE (spirit shackle, leaf storm, shadow sneak, brave bird)
HERACROSS (megahorn, brick break, rock tomb, night slash)
SERPERIOR (leaf blade, giga drain, coil, dragon pulse)
TOXAPEX (baneful bunker, venonshock, pin misile, liquidation)
QUAQUAVAL (Aqua step, bulk up, close combat, acrobatics)
ELECTIVIRE ( meditate, thunderpunch, cross chop, ice punch)
weabile (sword dance, ice spinner, ice shard, night slash)
typlosion Hisuian (Infernal parade, willowisp, Flamethrower, shadow ball)
*/

const charizard = {
    name : 'Charizard',
    type : [fire, flying],
    stats : {
        totalHp : 185,
        currentHp : 185,
        attack : 136,
        def : 130,
        speed : 152
    },
    moves : [dragonPulse,fireBlast,hurricane,flameThrower],
    imageFront : 'image/charizard-front.gif',
    imageBack : 'image/charizard-back.gif'
}

const reuniclus = {
    name : 'Reuniclus',
    type : [psychic],
    stats : {
        totalHp : 220,
        currentHp : 220,
        attack : 125,
        def : 85,
        speed : 30
    },
    moves : [focusBlast , psyShock , shadowBall , energyBall],
    imageFront : 'image/reuniclus-front.gif',
    imageBack : 'image/reuniclus-back.gif'
}

const rillaboom = {
    name : 'Rillaboom',
    type : [grass],
    stats : {
        totalHp : 200,
        currentHp : 200,
        attack : 125,
        def : 90,
        speed : 85
    },
    moves : [woodHammer , highHorsePower , megaPunch , superPower],
    imageFront : 'image/rillaboom-front.gif',
    imageBack : 'image/rillaboom-back.gif'
}

const cinderace = {
    name : 'Cinderace',
    type : [fire],
    stats : {
        totalHp : 160,
        currentHp : 160,
        attack : 116,
        def : 70,
        speed : 119
    },
    moves : [pyroBall , ironHead , megaPunch , gunkShot],
    imageFront : 'image/cinderace-front.gif',
    imageBack : 'image/cinderace-back.gif'
}

const inteleon = {
    name : 'Inteleon',
    type : [water],
    stats : {
        totalHp : 140,
        currentHp : 140,
        attack : 125,
        def : 65,
        speed : 120
    },
    moves : [snipeShot , hydroPump , iceBeam , darkPulse],
    imageFront : 'image/inteleon-front.gif',
    imageBack : 'image/inteleon-back.gif'
}

const articuno = {
    name : 'Articuno-Galar',
    type : [flying,psychic],
    stats : {
        totalHp : 180,
        currentHp : 180,
        attack : 125,
        def : 100,
        speed : 95
    },
    moves : [ hurricane, psyShock , freezingGlare , shadowBall],
    imageFront : 'image/articuno-galar-front.gif',
    imageBack : 'image/articuno-galar-back.gif'
}

const moltres = {
    name : 'Rillaboom',
    type : [grass],
    stats : {
        totalHp : 200,
        currentHp : 200,
        attack : 125,
        def : 90,
        speed : 85
    },
    moves : [woodHammer , highHorsePower , megaPunch , superPower],
    imageFront : 'image/rillaboom-front.gif',
    imageBack : 'image/rillaboom-back.gif'
}

const zapdos = {
    name : 'Rillaboom',
    type : [grass],
    stats : {
        totalHp : 200,
        currentHp : 200,
        attack : 125,
        def : 90,
        speed : 85
    },
    moves : [woodHammer , highHorsePower , megaPunch , superPower],
    imageFront : 'image/rillaboom-front.gif',
    imageBack : 'image/rillaboom-back.gif'
}

const dragapult = {
    name : 'Rillaboom',
    type : [dragon, ghost],
    stats : {
        totalHp : 200,
        currentHp : 200,
        attack : 125,
        def : 90,
        speed : 85
    },
    moves : [woodHammer , highHorsePower , megaPunch , superPower],
    imageFront : 'image/rillaboom-front.gif',
    imageBack : 'image/rillaboom-back.gif'
}

const corviknight = {
    name : 'Rillaboom',
    type : [grass],
    stats : {
        totalHp : 200,
        currentHp : 200,
        attack : 125,
        def : 90,
        speed : 85
    },
    moves : [woodHammer , highHorsePower , megaPunch , superPower],
    imageFront : 'image/rillaboom-front.gif',
    imageBack : 'image/rillaboom-back.gif'
}

const runerigus = {
    name : 'Rillaboom',
    type : [grass],
    stats : {
        totalHp : 200,
        currentHp : 200,
        attack : 125,
        def : 90,
        speed : 85
    },
    moves : [woodHammer , highHorsePower , megaPunch , superPower],
    imageFront : 'image/rillaboom-front.gif',
    imageBack : 'image/rillaboom-back.gif'
}

const hydreigon = {
    name : 'Hydreigon',
    type : [ dark , dragon ],
    stats : {
        totalHp : 184,
        currentHp : 184,
        attack : 125,
        def : 90,
        speed : 98
    },
    moves : [darkPulse , dracoMeteor , flameThrower , dragonPulse],
    imageFront : 'image/hydreigon-front.gif',
    imageBack : 'image/hydreigon-back.gif'
}

const volcarona = {
    name : 'Volcarona',
    type : [ fire , bug ],
    stats : {
        totalHp : 170,
        currentHp : 170,
        attack : 135,
        def : 85,
        speed : 100
    },
    moves : [fieryDance , gigaDrain , bugBuzz , fireBlast],
    imageFront : 'image/volcarona-front.gif',
    imageBack : 'image/volcarona-back.gif'
}

/////////////////////////////////////////////////////////////////////////////

const jolteon = {
    name : 'Jolteon',
    type : [electric],
    stats : {
        totalHp : 172,
        currentHp : 172,
        attack : 117,
        def : 112,
        speed : 182
    },
    moves : [thunderBolt , hiddenPowerIce , shadowBall , chargeBeam],
    imageFront : 'image/jolteon-front.gif',
    imageBack : 'NONE'
}

const lucario = {
    name : 'Lucario',
    type : [fighting, steel],
    stats : {
        totalHp : 180,
        currentHp : 180,
        attack : 150,
        def : 90,
        speed : 130
    },
    moves : [auraSphere , closeCombat , meteorMash , boneRush],
    imageFront : 'image/lucario-front.gif',
    imageBack : 'NONE'
}


export {charizard, jolteon, lucario, reuniclus, rillaboom, cinderace, inteleon, hydreigon, volcarona, articuno}