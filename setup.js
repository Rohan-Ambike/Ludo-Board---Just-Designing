const dice = document.querySelector("#dice");
const dots = ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6", "dot7"];


let chance;
let diceCount = 6;
const colors = ["yellow", "red", "blue", "green"];


function roll() {
    diceCount = Math.ceil(Math.random() * 6);
    showDots();
    chance >= 4 ? chance = 1 : chance++;
}


const yellow = {
    color: "yellow",
    start: [6, 2, 7, 3],
    positions: {
        pawn1: [2, 2, 3, 3],
        pawn2: [2, 4, 3, 5],
        pawn3: [4, 2, 5, 3],
        pawn4: [4, 4, 5, 5]
    },
    active: [],
    inactive: ["pawn1", "pawn2", "pawn3", "pawn4"],
    house: []
}

const red = {
    color: "red",
    start: [2, 8, 3, 9],
    positions: {
        pawn1: [2, 10, 3, 11],
        pawn2: [2, 12, 3, 13],
        pawn3: [4, 10, 5, 11],
        pawn4: [4, 12, 5, 13]
    },
    active: [],
    inactive: ["pawn1", "pawn2", "pawn3", "pawn4"],
    house: []
}

const blue = {
    color: "blue",
    start: [12, 6, 13, 7],
    positions: {
        pawn1: [10, 2, 11, 3],
        pawn2: [10, 4, 11, 5],
        pawn3: [12, 2, 13, 3],
        pawn4: [12, 4, 13, 5]
    },
    active: [],
    inactive: ["pawn1", "pawn2", "pawn3", "pawn4"],
    house: []
}

const green = {
    color: "green",
    start: [8, 12, 9, 13],
    positions: {
        pawn1: [10, 10, 11, 11],
        pawn2: [10, 12, 11, 13],
        pawn3: [12, 10, 13, 11],
        pawn4: [12, 12, 13, 13]
    },
    active: [],
    inactive: ["pawn1", "pawn2", "pawn3", "pawn4"],
    house: []
}

const safehouse = {
    safe1: [8, 2, 9, 3],
    safe2: [2, 6, 3, 7],
    safe3: [6, 12, 7, 13],
    safe4: [12, 8, 13, 9]
}








