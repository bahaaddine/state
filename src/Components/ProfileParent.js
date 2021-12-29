import React, { Component } from 'react'
import Profile from './Profile'

export default class ProfileParent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            show: false,
            name: "Bitcoin",
            description: "",
            image: "https://images.bfmtv.com/mA-O-sirQqvJmc_evH3k6nbuEmc=/6x31:534x328/640x0/images/Explications-sur-la-recente-flambee-du-bitcoin-489361.jpg"
        }
    }

    toggle() {
        this.setState({show: !this.state.show})
    }
    render() {
        return (
            <div>
                <span>
                <button onClick={() => this.toggle()}> {this.state.show ? "hide" : "show"} </button>
                {this.state.show ? <Profile 
                name={this.state.name} 
                description={this.state.description} 
                image={this.state.image}
                /> : null}
                </span>
            </div>
        )
    }
}
