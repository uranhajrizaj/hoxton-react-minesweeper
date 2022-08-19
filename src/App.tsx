import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const[squares, setSquares] = useState([
  {
  id: 1,
  value: 'bomb',
  checked: false,
  showValue: false,

 },
 {
  id: 2,
  value: '',
  checked: false,
  showValue: false,
  
 },
 {
  id: 3,
  value: '1',
  checked: false,
  showValue: false,
  
 },
 {
  id: 4,
  value: '2',
  checked: false,
  showValue: false,
 
 
 },
 {
  id: 5,
  value: '0',
  checked: false,
  showValue: false,

 },
 {
  id: 6,
  value: '3',
  checked: false,
  showValue: false,
 
 },
 {
  id: 7,
  value: '4',
  checked: false,
  showValue: false,

 },
 {
  id: 8,
  value: 'bomb',
  checked: false,
  showValue: false,
 
 },
 {
  id: 9,
  value: '0',
  checked: false,
  showValue: false,
 
 }])
  const[isGameOver, setIsGameOver] = useState(false)
  const[isGameWon, setIsGameWon] = useState(false)
  
function getRandomSquares(squares) {
  return [...squares].sort(() => Math.random() - 0.5)
}
useEffect(() => {
  setSquares(getRandomSquares(squares))
} , [])
  
function openRandomSquare(square) {
}
function checkIfGameOver(square) {
  if (square.value === 'bomb' ) {
    setIsGameOver(true) 
    squares.map(square => {
      square.checked=true
      square.showValue=true
    }
      )
  }
}
function checkIfWin() {
  let count = 1
  squares.map(square => square.checked && square.value !== 'bomb'? count++ : count)
  console.log(count)
  if (count === squares.length - squares.filter(square => square.value === 'bomb').length) {
    setIsGameWon(true)
    squares.map(square => square.checked=true)
    setSquares(getRandomSquares(squares))
  }
}


function uncheck() {
  squares.map(square => {
    square.checked=false
    square.showValue=false
  }
    )
  setIsGameOver(false)
  setIsGameWon(false)
  setSquares(getRandomSquares(squares))


}
function update(target){
  let updatesquares= squares.map(square => target.id===square.id ? {...square, checked: true, showValue: true} : square)
  setSquares(updatesquares)
}


  return (
    <div className="App">
      <div className='tabel'>
        <h3>Minesweeper</h3>
        <ul>
          {squares.map(square => (
            <>
            <input onClick={()=>{
              checkIfGameOver(square)
              update(square) 
              checkIfWin()
              openRandomSquare(square)
            }
            }type="checkbox" name="myCheckboxes" id="myCheckboxes1" value={square.value} disabled={isGameOver} checked={square.checked}/>
            {square.value==="bomb"&&square.showValue===true && isGameWon===false? <label>🎆</label>: null} 
            {square.value==="bomb"&& isGameWon===true? <label>🎉</label>: null}
            {square.value!=="bomb"&&square.showValue===true? <label>{square.value}</label>: null}
            </>
          ))}
          
        </ul>
        {isGameOver? <><h4>Game Over</h4>   <button onClick={ uncheck}>Play Again</button> </>:null}
        {isGameWon? <><h4>You Won!</h4>   <button onClick={ uncheck}>Continue</button> </>:null}
      
         
      </div>
    </div>
  )
}

export default App
