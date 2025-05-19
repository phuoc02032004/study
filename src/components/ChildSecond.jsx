import React from 'react'

//VD 2
function ChildSecond({handleOnClick}) {
  return (
    <div>
        <div>Day la ChildSecond</div>
        <button onClick={handleOnClick} >
            Tang
        </button>
    </div>
  )
}

export default ChildSecond
