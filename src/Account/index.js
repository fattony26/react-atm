import React, { Component } from 'react';

class Account extends Component {
  state = {
    balance: 0
  }

  depositClick = () => {
    this.setState({
      balance: parseInt(this.inputRef.current.value) + this.state.balance
    })
    this.inputRef.current.value ='';
  }

  withdrawClick = () => {
    this.setState({
      balance: parseInt(this.inputRef.current.value) - this.state.balance
    })
    this.inputRef.current.value ='';
  }

  inputRef = React.createRef();
  
  render() {
    console.log(this.inputRef)
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={this.inputRef} />
        <input onClick={this.depositClick} type="button" value="Deposit" />
        <input onClick={this.withdrawClick} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;