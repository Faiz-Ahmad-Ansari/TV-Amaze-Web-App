import React from 'react';
import '../ShowMetaData/ShowMetaData.css';

class ShowMetaData extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return(
            <div>
                {this.props.metaDataa.map(m=>{
                    return(
                        <div className='metaDataContainer' key={m.id}>
                            <div><img alt={m.name} id='imgMetaData' src={m.image.original} /></div>
                            <div className='metaDataContainer2'>
                                <div><b>Title</b>    : {m.name}</div>
                                <div><b>Summary</b>  : {m.summary}</div>
                                <div><b>Genres</b>   : {m.genres}</div>
                                <div><b>Language</b> : {m.language}</div>
                                <div><b>Runtime</b>  : {m.runtime}</div>
                                <div><b>Rating</b>   : {m.rating.average}</div>
                                <div><b>URL</b> :<a href={m.url}>{m.url}</a></div>
                            </div>
                        </div>
                        )}
                    )}
            </div>
        )
    }
}

export default ShowMetaData;