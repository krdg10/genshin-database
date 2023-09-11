
const charactersData = require('./assets/characters.json');
const talentsData = require('./assets/talents.json');

function getTalentsIDsOfSomePeriods(periodGroup) {
    let listOfTalentsID = []; 

    talentsData.filter(talent => {
        if (talent.periodGroup == periodGroup) {
            listOfTalentsID.push(talent.id);
        };
    });

    return listOfTalentsID;
}

function getCharacterByName(name) {
    return charactersData.find(character => character.name == name);
}

function getAllCharacters() {
    return charactersData.filter(character => character.type == 'char');
}

function getAllWeapons() {
    return charactersData.filter(character => character.type == 'weapon');
}

function getAllFourStarsCharacters() {
    return charactersData.filter(character => character.type == 'char' && character.stars == '4');
}

function getAllFiveStarsCharacters() {
    return charactersData.filter(character => character.type == 'char' && character.stars == '5');
}

function getAllFourStarsWeapons() {
    return charactersData.filter(character => character.type == 'weapon' && character.stars == '4');
}


function getAllFiveStarsWeapons() {
    return charactersData.filter(character => character.type == 'weapon' && character.stars == '5');
}

function getAllMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID));
}

function getAllTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID));
}


function getAllWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID));
}

function getAllWeaponsMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.type == 'weapon');
}


function getAllWeaponsTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.type == 'weapon');
}


function getAllWeaponsWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.type == 'weapon');
}

function getAllCharactersMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.type == 'char');
}


function getAllCharactersTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.type == 'char');
}


function getAllCharactersWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.type == 'char');
}




function getAllFourStarsMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4');
}


function getAllFourStarsTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4');
}


function getAllFourStarsWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4');
}


function getAllFiveStarsMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5');
}


function getAllFiveStarsTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5');
}


function getAllFiveStarsWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5');
}



function getAllFourStarsWeaponsMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4' && character.type == 'weapon');
}


function getAllFourStarsWeaponsTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4' && character.type == 'weapon');
}


function getAllFourStarsWeaponsWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4' && character.type == 'weapon');
}


function getAllFiveStarsWeaponsMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5' && character.type == 'weapon');
}


function getAllFiveStarsWeaponsTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5' && character.type == 'weapon');
}


function getAllFiveStarsWeaponsWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5' && character.type == 'weapon');
}

function getAllFourStarsCharactersMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4' && character.type == 'char');
}


function getAllFourStarsCharactersTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4' && character.type == 'char');
}


function getAllFourStarsCharactersWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '4' && character.type == 'char');
}

function getAllFiveStarsCharactersMondayAndThursday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('1');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5' && character.type == 'char');
}


function getAllFiveStarsCharactersTuesdayAndFriday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('2');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5' && character.type == 'char');
}


function getAllFiveStarsCharactersWednesdayAndSaturday() {
    let listOfTalentsID = getTalentsIDsOfSomePeriods('3');
    return charactersData.filter(character => listOfTalentsID.includes(character.talentID) && character.stars == '5' && character.type == 'char');
}


module.exports = {
    getAllFourStarsCharactersMondayAndThursday,
    getAllFourStarsCharactersTuesdayAndFriday,
    getAllFourStarsCharactersWednesdayAndSaturday,
    getAllFiveStarsCharactersMondayAndThursday,
    getAllFiveStarsCharactersTuesdayAndFriday,
    getAllFiveStarsCharactersWednesdayAndSaturday,
    getCharacterByName,
    getAllCharacters,
    getAllWeapons,
    getAllFourStarsCharacters,
    getAllFiveStarsCharacters,
    getAllFourStarsWeapons,
    getAllFiveStarsWeapons,
    getAllMondayAndThursday,
    getAllTuesdayAndFriday,
    getAllWednesdayAndSaturday,
    getAllWeaponsMondayAndThursday,
    getAllWeaponsTuesdayAndFriday,
    getAllWeaponsWednesdayAndSaturday,
    getAllCharactersMondayAndThursday,
    getAllCharactersTuesdayAndFriday,
    getAllCharactersWednesdayAndSaturday,
    getAllFourStarsMondayAndThursday,
    getAllFourStarsTuesdayAndFriday,
    getAllFourStarsWednesdayAndSaturday,
    getAllFiveStarsMondayAndThursday,
    getAllFiveStarsTuesdayAndFriday,
    getAllFiveStarsWednesdayAndSaturday,
    getAllFourStarsWeaponsMondayAndThursday,
    getAllFourStarsWeaponsTuesdayAndFriday,
    getAllFourStarsWeaponsWednesdayAndSaturday,
    getAllFiveStarsWeaponsMondayAndThursday,
    getAllFiveStarsWeaponsTuesdayAndFriday,
    getAllFiveStarsWeaponsWednesdayAndSaturday

};