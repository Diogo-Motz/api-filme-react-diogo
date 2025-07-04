import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../movie/styles.css";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const KEY = process.env.REACT_APP_KEY;
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const fetchMovies = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    };

    // Carregar filmes populares (padrão)
    useEffect(() => {
        fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`);
    }, [KEY]);

    const handleGenreClick = (genreId) => {
        fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genreId}&language=pt-BR`);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${search}&language=pt-BR`);
        }
    };

    const handleAllClick = () => {
        fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`);
    };

    return (
        <div>
            <h1 className="page-title">🎬 Movies</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Buscar filme..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">🔍</button>
            </form>
            <div className="genre-buttons">
                <button onClick={handleAllClick}>Todos</button>
                <button onClick={() => handleGenreClick(28)}>Ação</button>
                <button onClick={() => handleGenreClick(12)}>Aventura</button>
                <button onClick={() => handleGenreClick(16)}>Animação</button>
                <button onClick={() => handleGenreClick(35)}>Comédia</button>
                <button onClick={() => handleGenreClick(80)}>Crime</button>
                <button onClick={() => handleGenreClick(99)}>Documentário</button>
                <button onClick={() => handleGenreClick(18)}>Drama</button>
                <button onClick={() => handleGenreClick(10751)}>Família</button>
                <button onClick={() => handleGenreClick(14)}>Fantasia</button>
                <button onClick={() => handleGenreClick(36)}>História</button>
                <button onClick={() => handleGenreClick(27)}>Terror</button>
                <button onClick={() => handleGenreClick(10402)}>Música</button>
                <button onClick={() => handleGenreClick(9648)}>Mistério</button>
                <button onClick={() => handleGenreClick(10749)}>Romance</button>
                <button onClick={() => handleGenreClick(878)}>Ficção Científica</button>
                <button onClick={() => handleGenreClick(10770)}>Cinema TV</button>
                <button onClick={() => handleGenreClick(53)}>Thriller</button>
                <button onClick={() => handleGenreClick(10752)}>Guerra</button>
                <button onClick={() => handleGenreClick(37)}>Faroeste</button>
            </div>
            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-item">
                        <h2>{movie.title}</h2>
                        <img
                            src={`${imagePath}${movie.poster_path}`}
                            alt={movie.title}
                            width="200"
                        />
                        <Link to={`/movie/${movie.id}`}>
                            <button>Saiba Mais</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
