import React from 'react';
import '../ShowMetaData/ShowMetaData.css';

class ShowMetaData extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                {this.props.metaDataa.map(m=>{
                    return(
                        <div className='metaDataContainer' key={m.id}>
                            <div><img id='imgMetaData' src={m.image.original} /></div>
                            <div className='metaDataContainer2'>
                                <div>Title : {m.name}</div>
                                <div>Summary :{m.summary}</div>
                                <div>Genres : {m.genres}</div>
                                <div>Language : {m.language}</div>
                                <div>Runtime : {m.runtime}</div>
                                <div>Rating : {m.rating.average}</div>
                                <div>URL :<a href={m.url}>{m.url}</a></div>
                            </div>
                        </div>
                        )}
                    )}
            </div>
        )
    }
}

export default ShowMetaData;