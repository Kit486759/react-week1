import React from 'react';
import './style.css';

class StudentList extends React.Component {

    state = {
        names: ["Alan", "Aaron", "Amy", "Ben", "Barry", "Billy", "Carrie", "Cathy", "Claire", "Danny", "Dennis", "Derrick"]
    }

    componentDidMount() {



    }
    random = () => {
        // let nameList = this.state.names
        let randomIndex = Math.floor((Math.random() * (this.state.names.length - 1)) + 0)

        this.setState({

            names: [this.state.names[randomIndex]]
        })

        console.log(`test btn`)
    }

    // reset = () =>{
    //     this.getInitialState()
    // }

    render() {

        return (
            <>

                <div className="studentList">
                    <ul>
                        {this.state.names.map((name) => <li key={name}> {name} </li>)}
                    </ul>
                    <button onClick={this.random}>Random!</button>
                    {/* <button onClick={this.reset}>reset!</button> */}
                </div>
            </>
        )
    }
}


export default StudentList