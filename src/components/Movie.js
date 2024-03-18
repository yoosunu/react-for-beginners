import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, medium_cover_image, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{`"Title: ${title}"`}</Link>
      </h2>
      <div>{<img src={medium_cover_image} alt={title}></img>}</div>
      <div>
        <strong>[Summary]</strong>
      </div>
      {summary ? <span>{summary}</span> : "No summary"}
      <div>
        <strong>[Gengres]</strong>
      </div>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
