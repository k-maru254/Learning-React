import React from 'react'

function NoMatch({setShowHeader}) {
    const style = {
        width:"100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWheight: "Bold"
    };
    setShowHeader(false);
  return (
    <div style={style}>
      Error 404
    </div>
  )
}

export default NoMatch
