


const boxes = document.querySelectorAll(".box");   // saare boxes aagye honge 
const turnText = document.querySelector("#turn");   // abhi kiski turn hai OR YEH LIVE TEXT RHEGA 
const restartBtn = document.querySelector("#restartBtn")  // button

let board = ["","","","","","","","",""];  // ye backend me kya kese chnage hoga 
let currentPlayer = "X";  
let isGameActive = true; // defining game data 

// winning combinations of game 
const winningCombintion = [
 [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]
];




boxes.forEach(box => box.addEventListener("click",handleOX));
restartBtn.addEventListener("click",gameReset);

function handleOX (event)
{
  // 
  const box = event.target; // currently konsa box hai jispr hum click krrhe hai 
  const index = box.getAttribute("data-index"); // current box konsa hai and kya number hai uska yhe yha se pta chlega 

  // if all boxes are full or game over then do nothing 
  if( board[index] !== "" || !isGameActive)  // pehel se agr kuch likha hai toh phir kuch mt likho 
    return ;

  // updation of UI AND updating board
  board[index] = currentPlayer;
  box.innerText = currentPlayer;

  // checkwinner 
  checkWinner ();
}

// hr ek click pr winner call hoga 
function checkWinner ()
{
  let winner = false;

  for(let i=0 ; i<winningCombintion.length;i++)
    {
      let currentOne = winningCombintion[i]; // like winning[0] = {1,2,3};

      const box_1 = board[currentOne[0]];  // ab board ke index pr manlo box_1 = X aaya hai 
      const box_2 = board[currentOne[1]];  // ab board kw index pr manlo box_2 = X aaya hai 
      const box_3 = board[currentOne[2]];  // ab board ke index pr bhi x aaya 

      if(box_1 === "" || box_2 === "" || box_3 ===""){
        continue;  // agr box khali teeno me se ek bhi toh game chlne do 
      }

      // agr teeno box me same value hai toh 
      if(box_1===box_2 && box_2===box_3)
      {
        winner = true;

        // now this is the updation of that game here we are highlighting the boxes 
        currentOne.forEach(index => {
        boxes[index].classList.add("winning-box");
  });
        break;
      }
      
    }

  // if winner found 
  if(winner)
  {
      turnText.innerText = `winner is ${currentPlayer} `;
      isGameActive = false;
  }

  // if draw 
  else if(! board.includes(""))
  {
    turnText.innerText = " its a draw ";
    isGameActive = false;
  }
  else{
    currentPlayer = currentPlayer === "X" ? "O" : "X";           // we are toggling the player here 
    turnText.innerText = `Player ${currentPlayer} turn `;
  }
   
  
}

function gameReset ()
{
  currentPlayer = "X";
  board = ["","","","","","","","",""];  // BAKCNED ME BOARD KHALI HOJAYGA 
  isGameActive = true;   // GAME PHIR SE 
  turnText.innerText = `Player ${currentPlayer} turn `;

 

  boxes.forEach (box => {
    box.innerText = "";  // UI PURA CLEAR HOJAYGA ISSE 
     box.classList.remove("winning-box");
  })

  
}