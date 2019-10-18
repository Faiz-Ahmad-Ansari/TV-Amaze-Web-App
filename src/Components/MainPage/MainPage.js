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
        let showID = [];
        for(let i = 1; i < 50; i++){
            showID.push(fetch(`https://api.tvmaze.com/shows/${i}`).then(res=>res.json()
                )
            )
        }

    Promise.all(showID)
        .then(data => {
            console.log(data)
            this.setState({Shows:data})
        })
        .catch(console.log)
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