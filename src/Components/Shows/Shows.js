import React from 'react';
import './Shows.css';
import ShowMetaData from '../ShowMetaData/ShowMetaData';

class Shows extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            metaData : [],
            showShows : true,
            showShowMetaData : false
        }
    }

    
    metaData = (event)=>{
        event.preventDefault();
        let target = event.target.innerHTML;
        let filterShowByName = this.props.Shows.filter((showName)=>showName.name===target)
        this.setState({metaData:filterShowByName,showShows:false,showShowMetaData:true})
        console.log(filterShowByName)
    }

    show = (show) => {
        return(
            <div className='showsContainer2' key={show.id}>
                <div><img className='imgShows' src={show.image.medium} /></div>
                <div onClick={this.metaData} id='showName'>{show.name}</div>
            </div>
            )}

    mainPage = (event) => {
        event.preventDefault();
        this.setState({showShows:true,showShowMetaData:false})
    }

    runningShows = (activeShow) => activeShow.status === "Running"

    render(){       
        return(
            <div className='showMain'>
               {this.state.showShows && <div className='showsContainer'>
                    {this.props.Shows.filter(this.runningShows).map(this.show)}
                </div>}
                {this.state.showShowMetaData && <div>
                    <div className='btnDiv'><button id='btn' onClick={this.mainPage}>Back to Main Page</button></div>
                    <ShowMetaData metaDataa={this.state.metaData}/>
                </div>}
                <div id='signContainer'><div>Developed By <b>Faiz Ahmad Ansari</b></div></div>
            </div>
        )
    }
}

export default Shows;