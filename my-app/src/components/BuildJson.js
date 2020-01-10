import React from 'react'

class BuildJson extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: {}
        }
    }

    buildJson(){
        const {input} = this.state
        if(input){
            this.props.buildJson(input)
            this.setState({input: {} })
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
            <div>
                <input
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={input}>
                </input>
                <button onClick={this.buildJson}>Build</button>
            </div>
        )
    }
}
export default BuildJson