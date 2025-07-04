import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

export default function Movie() {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;

  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=pt-BR&api_key=${KEY}`)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error(err));
  }, [KEY]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const filmes = data.results;
        let filme = filmes.find((key) => +key.id === +id);
        setMovie(filme);
        setLoading(false);
      });
  }, [KEY, id]);

  if (loading || !movie) return <div>Loading...</div>;

  const movieGenreNames = movie.genre_ids
    ? movie.genre_ids.map((gid) => {
        const genreObj = genres.find((g) => g.id === gid);
        return genreObj ? genreObj.name : "";
      })
    : [];
    
  const posterUrl = `${imagePath}${movie.poster_path}`;

return (
  <div className="movie-bg-wrapper">
    <div
      className="movie-bg-image"
      style={{ backgroundImage: `url(${posterUrl})` }}
    ></div>
    <nav>
      <h1>Movie</h1>
    </nav>
    <img
      className="img_movie"
      src={posterUrl}
      alt={movie.title}
    />
    <div className="container">
      <h1>{movie.title}</h1>
      <h3>Data de lançamento: {movie.release_date}</h3>
      <div>
        <strong>Gêneros: </strong>
        {movieGenreNames.join(", ")}
      </div>
      <div className="descricao">
        <h4>Descrição: </h4>
        <p className="movie-desc">{movie.overview}</p>
      </div>
      <Link to="/">
        <button className="link_button">Voltar</button>
      </Link>
    </div>
  </div>
);
};

