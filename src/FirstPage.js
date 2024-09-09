import { useState, useEffect } from "react"
import { getSongs } from "./apiCalls"
import Card from "./Card.js"

export default function FirstPage() {
    const [allSongs, setAllSongs] = useState([]) 
    const [displayedSongs, setDisplayedSongs] = useState([]) 
    const [sort, setSort] = useState("")
    const [filter, setFilter] = useState("")

    const setSongs = () => {
        getSongs()
        .then(data => {
            setAllSongs(data)
            setDisplayedSongs(data)
        })
    }

    useEffect(() => {
        setSongs()
    }, [])

    useEffect(() => {
        sortSongs();
    }, [sort]);
    
    const titles = displayedSongs.map(song => {
       return (
        <Card 
        id={song.id}
        songName={song.songName}
        artistName={song.artistName}
        />
       )
    })

    const sortSongs = () => {
        const sortedSongs = [...allSongs]; 
        if (sort === "atoz") {
            setDisplayedSongs(sortedSongs.sort((a, b) => {
               return a.songName.localeCompare(b.songName)
            }))
        } else if (sort === "ztoa") {
            setDisplayedSongs(sortedSongs.sort((a, b) => {
                return b.songName.localeCompare(a.songName)
            }))
        } else {
            setDisplayedSongs(allSongs)
        }
    }

    return (

        <main>
        <label for="sort">Sort By</label>
<select value={sort} onChange={e => setSort(e.target.value)} id="sort" name="sort">
  <option value="atoz">A to Z</option>
  <option value="ztoa">Z to A</option>
  <option value="reset">Reset</option>
  
</select>
<input 
placeholder="Search by title or artist"
value={filter}
onChange={e => setFilter(e.target.value)}
>
</input>
        <div class="grid grid-cols-3 gap-4">
            {titles}

</div>
</main>
    )
}