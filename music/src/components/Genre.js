import React from 'react'

const Genre = ({listGenre, setListGenre}) => {

    const handleSelect = e => {
        e.preventDefault();
        setListGenre(e.target.value)
    }

    return(
        <form>
            <input
                type='text'
                value={listGenre}
            />
            <button onClick={handleSelect}>
                Get My Playlist
            </button>
        </form>
    )
}

export default Genre;