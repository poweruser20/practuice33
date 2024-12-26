let table = document.getElementById('chessboard');

for(let i = 0; i < 8;i++){
    let tr = document.createElement('tr'); 
    for(let j = 0; j < 8; j++){
        let td = document.createElement('td');
        if((i+j) % 2 == 0){
            td.style.background = "#EFDECD"
        }
        else{
            td.style.background = " #4B3621"
        }
        tr.appendChild(td);
    }
 table.appendChild(tr);
}

let td =document.querySelectorAll('td');
// ICON of 1st row 
td[0].innerHTML ='<i class="fa-solid fa-chess-rook"></i>'
td[1].innerHTML ='<i class="fa-solid fa-chess-knight"></i>'
td[2].innerHTML ='<i class="fa-solid fa-chess-bishop"></i>'
td[3].innerHTML ='<i class="fa-solid fa-chess-queen"></i>'
td[4].innerHTML ='<i class="fa-solid fa-chess-king"></i>'
td[5].innerHTML ='<i class="fa-solid fa-chess-bishop"></i>'
td[6].innerHTML ='<i class="fa-solid fa-chess-knight"></i>'
td[7].innerHTML ='<i class="fa-solid fa-chess-rook"></i>'

//icon for 2 row pawns

td[8].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'
td[9].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'
td[10].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'
td[11].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'
td[12].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'
td[13].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'
td[14].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'
td[15].innerHTML ='<i class="fa-solid fa-chess-pawn"></i>'


td[48].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'
td[49].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'
td[50].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'
td[51].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'
td[52].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'
td[53].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'
td[54].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'
td[55].innerHTML ='<i class="fa-regular fa-chess-pawn"></i>'

td[56].innerHTML ='<i class="fa-regular fa-chess-rook"></i>'
td[57].innerHTML ='<i class="fa-regular fa-chess-knight"></i>'
td[58].innerHTML ='<i class="fa-regular fa-chess-bishop"></i>'
td[59].innerHTML ='<i class="fa-regular fa-chess-queen"></i>'
td[60].innerHTML ='<i class="fa-regular fa-chess-king"></i>'
td[61].innerHTML ='<i class="fa-regular fa-chess-bishop"></i>'
td[62].innerHTML ='<i class="fa-regular fa-chess-knight"></i>'
td[63].innerHTML ='<i class="fa-regular fa-chess-rook"></i>'


let selected = false;


