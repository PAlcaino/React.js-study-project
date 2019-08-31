import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    //Is the same as creating a constructor and assign the prop
    state = { lat: null, errorMessage:'' };

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return (
                <div className="ui container comments">                    
                    <ApprovalCard>
                        <CommentDetail 
                            author="Pablo" 
                            timeAgo="Today at 12:30AM"
                            comment={this.state.errorMessage}
                            avatar={faker.image.avatar()}/>
                    </ApprovalCard>
                </div>
            )
        }
        
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Loader message="Por favor acepte la petición de ubicación  :)"/>;
    }
    
    //React Requires this method
    render(){   
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );    
    }    

    //Life cycle component used to load data
    //only update props with setState
    componentDidMount(){
        console.log("Component did mount!");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message})
        );
    }

    //Life Cycle component
    componentDidUpdate(){
        console.log("Component Updated!");
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));