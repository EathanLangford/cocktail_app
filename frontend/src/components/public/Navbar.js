import React, { Component } from 'react'
import './Navbar.css'
import { HashLink as Link } from "react-router-hash-link"
// import { Hashlink as Link } from 'react-router-hash-link'

export default class Navbar extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll() {
        this.setState({scroll: window.scrollY})
    }

    componentDidMount = () => {
      const el = document.querySelector('nav')
      this.setState({top: el.offsetTop, height: el.offsetHeight})
      window.addEventListener('scroll', this.handleScroll)
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ?
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0
    }
    
    
  render() {
    return (
      <>
        {/* <div>We can also put a message up here if we want to</div> */}
        <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
            
            <ul>
                <li><Link to='/#home'>The Back Bar</Link></li>
                <li><Link to='/#about'>About</Link></li>
                <li><Link to='/#how-it-works'>How it Works</Link></li>
                <li><Link to='/#register' >Register</Link></li>
            </ul>
        </nav>
      </>
    )
  }
}



