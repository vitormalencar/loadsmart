import React, { Component } from 'react'
import HeaderLogo from '../../assets/images/header-logo.svg'
import './Header.css'

export default class Header extends Component {
  state = {
    active: false,
  }

  onclickHandler = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  render() {
    return (
      <div className="header">
        <a href="/" className="logo">
          <img src={HeaderLogo} alt="logo header" />
        </a>
        <nav className="navWide">
          <a href="/" className="active">
            <span className="fas fa-phone fa-rotate-90" />
            (646) 887 6278
          </a>
          <a href="#shipper">Shipper</a>
          <a href="#carrier">Become a Carrier</a>
          <a href="#login">Login</a>
          <a href="#signUp">Sign Up</a>
        </nav>

        <nav className="navNarrow">
          <button onClick={this.onclickHandler} className="hamburger-icon">
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
          </button>
          <div
            className={`${
              this.state.active ? 'show-mobilenav' : 'hide-mobilenav'
            }`}
          >
            <a href="/" className="active">
              <span className="fas fa-phone fa-rotate-90" />
              (646) 887 6278
            </a>
            <a href="#shipper">Shipper</a>
            <a href="#carrier">Become a Carrier</a>
            <a href="#login">Login</a>
            <a href="#signUp">Sign Up</a>
          </div>
        </nav>
      </div>
    )
  }
}
