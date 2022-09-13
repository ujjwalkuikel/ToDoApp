import React from 'react'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <a className="navbar-brand" href='https://ujjwalkuikel.github.io/ToDoApp/'>{props.title}</a>
  </nav>
  )
}
