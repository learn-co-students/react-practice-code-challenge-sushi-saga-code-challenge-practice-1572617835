import React, { Component } from 'react'

export class SushiWallet extends Component {

    constructor(){
        super();
        this.state = {
            moneyInput: ''
        }
    }

    handleChange = (event) => {
        this.setState({moneyInput: event.target.value.replace(/\D/g,'')})
    }


    render() {
        return (
            <form onSubmit={(event) =>this.props.handleMoneySubmit(event, this.state.moneyInput)}>
                <label>
                    Add Money:
                    <input onChange={this.handleChange} type="text" name="money" value={this.state.moneyInput}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SushiWallet
