import React, {Component} from 'react';
class Home extends Component{
    render(){
        return (
            <div>
                <div id="greeting">
                    <h1>Welcome, {this.props.name}</h1>
                </div>
            </div>
        )
    }
}

export default Home;