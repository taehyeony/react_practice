import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
	const [loading, setLoading] = useState(true);
	const [movieDetail, setMovieDetail] = useState(null);
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovieDetail(json);
		setLoading(false);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<MovieDetail
					key={movieDetail.data.movie.id}
					movieId={movieDetail.data.movie.id}
					title={movieDetail.data.movie.title}
					coverImg={movieDetail.data.movie.large_cover_image}
					description={movieDetail.data.movie.description_full}
					genres={movieDetail.data.movie.genres}
				/>
			)}
		</div>
	);
}

export default Detail;
