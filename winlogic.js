import { checkWin } from "./ticTacLogic.js";


let icon = false;
let count = 0;
let arr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const btns_li = document.querySelectorAll('.btn_1');

btns_li.forEach(item => {
    item.addEventListener("click", function () {

        let mark = icon ? '❌' : '⭕';
        item.innerText = mark;
        icon = !icon;

        item.style.pointerEvents = 'none';
        count++;

        document.getElementById('count').innerText = count;


        // Get row & column of this button
        let row = item.dataset.row;
        let col = item.dataset.col;

        // Store value into 2D array
        //let flag11 = false;
        //document.getElementById('win').innerHTML = mark +" has won the game";

        arr[row][col] = mark;
        if (count > 4) {
            let flag11 = false;
            flag11 = checkWin(arr, row, col, mark);
            if (flag11 === true || count > 8) {
                if (flag11)
                    document.getElementById('winMessage').innerHTML = mark + " has won the game";
                else
                    document.getElementById('winMessage').innerHTML = "Game is Drawn";

                setTimeout(() => {
                    location.reload();
                }, 5000);




            }
        }

    });
});

