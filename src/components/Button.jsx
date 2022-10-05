import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <div
      type= 'button'
      style = {{background: bgColor, color, borderRadius}}
      className={`text-${size}`}
      >

    </div>
  )
}

export default Button