import React from 'react'

//VD 1: Truyền props từ cha xuống con
function ChildComponent({ name, age }) {
  return (
    <>
    <div> Day la component con</div>
        {name}, {age}
    </>
  )
}

export default ChildComponent
