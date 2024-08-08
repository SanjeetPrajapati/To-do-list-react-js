import React from 'react'

export const Footer = () => {
  let footerstyle = {
    position: "relative",
    bottom: "-43vh",
    width: "100%",
    
  }
  return (
    <div className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">
        Copyright @copy; my Mytodolist.com
      </p>

    </div>
  )
}
