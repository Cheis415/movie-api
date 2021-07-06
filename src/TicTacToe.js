import React, { useState } from 'react';



function TicTacToe() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }} className="gameBoard">
    <div id="statusArea" className="status" style={{
  marginTop: '5px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
}}>Next player: <span>X</span></div>
    <div id="winnerArea" className="winner" style={{
  marginTop: '5px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
}}>Winner: <span>None</span></div>
    <button style={{
  marginTop: '15px',
  marginBottom: '16px',
  width: '80px',
  height: '40px',
  backgroundColor: '#8acaca',
  color: 'white',
  fontSize: '16px',
}}>Reset</button>
    <div style={{
  backgroundColor: '#eee',
  width: '208px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  border: '3px #eee solid'
}}>
      <div className="board-row" style={{display: 'flex'}}>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
      </div>
      <div className="board-row" style={{display: 'flex'}}>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
      </div>
      <div className="board-row" style={{display: 'flex'}}>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
            <div>
      className="square"
        style={{
  width:'60px',
  height:'60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
}}
    </div>
      </div>
    </div>
  </div>
)
  
}

export default TicTacToe;
