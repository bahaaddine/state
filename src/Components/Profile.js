import React, { Component } from 'react'
import { Card } from "react-bootstrap";

export default class Profile extends Component {
    constructor(props) {
        console.log("construction");
        super(props);
        this.state = {
            count: 0,
        };
    }



    componentDidMount() {
        this.timer = setInterval(() => {this.setState({count: this.state.count+1})} , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="d-flex justify-content-center">
            <Card className="m-3" style={{ width: "18rem",marginRight: "10px"}}>
                <Card.Img variant="top" src={this.props.image}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Bitcoin is a virtual currency created in 2009 by an unidentified person whose pseudonym is Satoshi Nakamoto. Unlike conventional currencies (also known as fiat currency), bitcoin is not issued and administered by a banking authority. It is issued on the blockchain protocol of the same name. {this.state.count}
                        </Card.Text>
                    </Card.Body>
            </Card>
               <Card className="m-3" style={{ width: "18rem",marginRight: "10px"}}>
                <Card.Img variant="top" src={this.props.image}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Bitcoin is a virtual currency created in 2009 by an unidentified person whose pseudonym is Satoshi Nakamoto. Unlike conventional currencies (also known as fiat currency), bitcoin is not issued and administered by a banking authority. It is issued on the blockchain protocol of the same name. {this.state.count}
                        </Card.Text>
                    </Card.Body>
            </Card>
               <Card className="m-3" style={{ width: "18rem",marginRight: "10px"}}>
                <Card.Img variant="top" src={this.props.image}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Bitcoin is a virtual currency created in 2009 by an unidentified person whose pseudonym is Satoshi Nakamoto. Unlike conventional currencies (also known as fiat currency), bitcoin is not issued and administered by a banking authority. It is issued on the blockchain protocol of the same name. {this.state.count}
                        </Card.Text>
                    </Card.Body>
            </Card>
               <Card className="m-3" style={{ width: "18rem",marginRight: "10px"}}>
                <Card.Img variant="top" src={this.props.image}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Bitcoin is a virtual currency created in 2009 by an unidentified person whose pseudonym is Satoshi Nakamoto. Unlike conventional currencies (also known as fiat currency), bitcoin is not issued and administered by a banking authority. It is issued on the blockchain protocol of the same name. {this.state.count}
                        </Card.Text>
                    </Card.Body>
            </Card>
            </div>
          
    )  
    }
}
