import React from 'react'
import '../App.css';

class BuildJson extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: ' '
        }
        this.buildJson = this.buildJson.bind(this)
    }

    buildJson(){
        let {input} = this.state
        if(input){
            input = JSON.parse(input)
            this.props.buildJson(input)
            //this.setState({input: ' ' })
        }
    }

    handleEnter = event => {
        if (event.key === 'Enter') this.buildJson();
    }

    inputChange = event => {
        this.setState({input : event.target.value})
    }
    
    render(){
        const {input} = this.state
        return(
            <div className='build-json'>
                <textarea rows='3'
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={input}>
                </textarea>
                <button onClick={this.buildJson}>Build</button>
            </div>
        )
    }
}
export default BuildJson