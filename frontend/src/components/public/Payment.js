import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
// require('dotenv')(;

require('dotenv').config()
export default class Payment extends Component {
  state = { payment: false}
  // state = {}
  onToken = (token) => {
    const email = this.props.email
    // console.log(token)
    axios.post('https://cocktail-app.now.sh/api/stripe', {
      token,
      email
    })
    .then( response => {
      console.log(response)
      const { success} = response.data
      this.setState({ 
        success
      })
      
    })
    .catch ( err => {
      console.log(err.response)
    })
  }

  render() {
    if (this.state.success) {
      return <Redirect to="/UserProfile" />
    } 
    else {
    return (
      <div style={{paddingTop: '40px'}}>
        <StripeCheckout
          token = {this.onToken}
          stripeKey = {"pk_test_315Jrr5E4VK9O1motqWvTJS9"}
         
        />
      </div>
    )
  } 
  }
}
