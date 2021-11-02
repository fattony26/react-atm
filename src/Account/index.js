import React, { Component } from 'react';

class Account extends Component {
  state = {
    balance: 0
  }

  inputRef = React.createRef();

  depositClick = () => {
    this.setState({
      balance: parseInt(this.inputRef.current.value) + this.state.balance
    })

    this.inputRef.current.value ='';
  }

  withdrawClick = () => {
    
    if (this.state.balance - parseInt(this.inputRef.current.value) < 0) {
      return "Not Enough Funds"
      
    } else {
      this.setState({
        balance: this.state.balance - parseInt(this.inputRef.current.value)
      })
      this.inputRef.current.value ='';

    }
  }

  render() {
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