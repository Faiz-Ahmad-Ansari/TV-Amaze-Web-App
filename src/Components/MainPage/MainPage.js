import React from 'react';
import Shows from '../Shows/Shows';
import './MainPage.css'

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Shows : []
        }
    }
    componentDidMount(){
        
        fetch('https://api.tvmaze.com/shows')
        .then(res=>res.json())
        .then(data => {
            this.setState({Shows:data})
            console.log(data)
        })
    }

    render(){
        return(
            <div className='mainPageContainer'>
                <div className='title'>TV Amaze Web App</div>
                <div><Shows Shows={this.state.Shows} /></div>
            </div>
            )
        }
}
export default MainPage;