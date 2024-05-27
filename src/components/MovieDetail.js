import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieDetail({ movieId, coverImg, title, description, genres }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
			<ul>
				{genres.map((genre) => (
					<li key={genre}>{genre}</li>
				))}
			</ul>
		</div>
	);
}

MovieDetail.propTypes = {
	movieId: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
