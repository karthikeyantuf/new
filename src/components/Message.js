import React,{Component} from 'react'

class Message extends Component
{
    constructor()
    {
        super()
        this.state={
            message:"Hello karthik"
        }
        //this.changeMessage=this.changeMessage.bind(this)
    }
    changeMessage= () =>
    {
        this.setState({   // setState change the state of the component 
            message:"Thanks for Subscribing"
        })
    }
    render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            {/*<button onClick={this.changeMessage.bind(this)}>Subscribe</button> {/* event binding 1st method   */}
            <button onClick={this.changeMessage}>Subscribe</button>
        </div>
    )
    }
}//commenting while studying abt git
export default Message