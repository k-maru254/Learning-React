import React from 'react'
const logoStyle = {
  height:"100%", 
  width: "80px",
  background: `var(--color-1)`,
  color: `var(--color-2)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
function Logo() {
  return (
    <div style={logoStyle}>
      Logo
    </div>
  )
}

export default Logo
