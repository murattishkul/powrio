import React from 'react'
import Store from '../store/Store'

class CreateJson extends React.Component{
    constructor(props){
        super(props)
        this.state = {label: ' '}
        this.display = this.display.bind(this)
    }

    display(){
        let label = Store.createJson()
        this.setState({
            label: label
        })
    }

    render(){
        //console.log(this.state.label)
        return (
            <div className="create-json">
                <button onClick={this.display}>Create Json</button>
                <img src="https://image.flaticon.com/icons/svg/1321/1321212.svg" alt=""/>
                <div className="label-for-json">{this.state.label}</div>
            </div>
        )
    }
}

export default CreateJson