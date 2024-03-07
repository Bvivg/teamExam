import React from 'react'

const Button = ({children, theme, event}) => {
  return (
    <button onClick={event} className={theme}>
      {
        children
      }
    </button>
  )
}

export default Button
