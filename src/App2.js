import React from 'react';
import StudentList from './StudentList'
import Loading from './Loading'
import './style.css';

class DisplayUi extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayStudentList: false,
            loading:true
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                displayStudentList: true,
                loading:false
            })
            console.log('2 sec')
            console.log(this.state.displayStudentList)
        }, 2000)



    }

    render() {
        return (
            <>
                <div className="container2">
                    <div className="display">
                    {this.state.loading === true ? <Loading />: ""}
                    {this.state.displayStudentList === true ? <StudentList /> :""}
                    </div>
                </div >
            </>
        )
    }
}



export default DisplayUi;