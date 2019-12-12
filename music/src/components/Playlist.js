import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPlaylist } from '../actions'

const Playlist = ({ getPlaylist, playlist, isFetching }) => {

    const [listGenre, setListGenre] = useState('Rap')

    useEffect(() => {
        getPlaylist(listGenre)
    }, [getPlaylist])

    if (isFetching){
        return <h3>Getting your playlist! </h3>
    }
    console.log(playlist)

    const handleSelect = e => {
        e.preventDefault();
        setListGenre(e.target.value)
    }

    return(
        <div  className='playlist'>
            <form>
                <input
                    type='text'
                    value={listGenre}
                    // onChange={handleChange}
                />
                <button onClick={handleSelect}>
                    Get My Playlist
                </button>
            </form>
            {playlist.map(track => {
                return <div className='track-card'>
                    <h3>{track.name}</h3>
                    <img src={track.img} alt=''/>
                    <a href={'http://youtu.be' + track.eId.slice(3)} target='blank'>Listen Now</a>
                </div>
            })}
        </div>
    )
}

const music = state => {
    return {
        playlist: state.playlist,
        isGetting: state.isGetting,
        error: state.error
    }
}

export default connect(music, { getPlaylist })(Playlist)