// // let computerMove;
// // computerMove = 'kamień';
// // let playerMove = 'papier';
// // printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

// // //randomSecondNumber = (Math.floor(Math.random()*9) + 11);





// let playerMove, playerInput;
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('Wpisana odpowiedź to: ' + playerInput);
// if (playerInput == '1') {
//     playerMove = 'kamień';
// } else if(playerInput == '2' ){
//     playerMove = 'papier';
// } else (playerInput == '3') 
//     playerMove = 'nożyce';

// printMessage('Mój ruch: ' + playerMove);

// /**
//  * Describe this function...
//  */
// function getMoveName(argMoveId) {
//     console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
//     if (argMoveId == 1) {
//     return 'kamień';
//     } else if(argMoveId == 2){
//             return 'papier';
//     } else(argMoveId == 3)
//     return 'nożyce';
// }

// /**
//  * Describe this function...
//  */
// function displayResult(argPlayerMove, argComputerMove) {
//     console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
//     if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
//     printMessage('Wygrywasz!');
//     } else if(argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
//     printMessage('Przegrywasz :(');
//     } else if (argPlayerMove = argPlayerMove) {
//         printMessage('Remis!');
//     } else if( argPlayerMove == "nożyce" && argComputerMove == 'kamień'){
//         printMessage('przegrywasz')
//     } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
//         printMessage('wygrywasz!');
//     } else if(argPlayerMove == 'kamień' && argComputerMove == 'papier') {
//         printMessage('przegrywasz');
//     } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
//         printMessage('wygrywasz');
//     }
//     printMessage('Zagrałem ' + argPlayerMove + ', a Ty ' + argComputerMove);
// }
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('wybór ruchu gracza to: ' + playerInput);
// playerMove = getMoveName(playerInput);
// console.log('ruch gracza to: ' + playerMove);
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('wylosowana liczba to: ' + randomNumber);
// computerMove = getMoveName(randomNumber);
// console.log('ruch komputera to: ' + computerMove);
// displayResult(playerMove, computerMove);

let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


/**
 * Describe this function...
 */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
        return 'kamień';
        } else if(argMoveId == 2){
                return 'papier';
        } else(argMoveId == 3)
        return 'nożyce';
    }

/**
 * Describe this function...
 */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        } else if(argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
        printMessage('Przegrywasz :(');
        } else if( argPlayerMove == "nożyce" && argComputerMove == 'kamień'){
            printMessage('przegrywasz')
        } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
            printMessage('wygrywasz!');
        } else if(argPlayerMove == 'kamień' && argComputerMove == 'papier') {
            printMessage('przegrywasz');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
            printMessage('wygrywasz');
        }  else  {
            printMessage('Remis!');
        }
        printMessage('Zagrałem ' + argPlayerMove + ', a Ty ' + argComputerMove);
    }
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);