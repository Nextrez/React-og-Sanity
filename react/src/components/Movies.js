import { useState } from "react";
import { getMovies } from "../utils/movieService";
import Movie from "./Movie";
import Title from "./Title";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const handleClick = async () => {
        const data = await getMovies();
        setMovies(data);
    };

    return (
        <div>
        <Title title="Movies" />
        <ul>
            {movies?.length > 0 && movies.map(movie => (<Movie key={movie._id} title={movie.title} actor={movie.actor} />))}
        </ul>
        <button type="button" onClick={handleClick}>Hent data</button>
    </div>
    )
}

export default Movies;