import { Link } from "react-router-dom"

export default function Card({ songName, artistName, id }) {

    return (
        <div class="border-2 border-blue-300 rounded-t-lg">
            <Link to={`/song/${id}`} >{songName}</Link>
            <p>By {artistName}</p>
        </div>
    )
}