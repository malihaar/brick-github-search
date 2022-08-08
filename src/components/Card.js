import React from 'react'

const Card = (props) => {
        
  return (
    <div
      style={{
        width: "30%",
        minWidth: "500px",
        height: "300px",
        padding: "10px",
        margin: "30px 10px 0 0",
        border: "2px solid rgb(176, 176, 176)",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
      }}
    >
     {props.children}
    </div>
  )
}

export default Card