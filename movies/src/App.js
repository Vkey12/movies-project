import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://movies-two-theta.vercel.app/Search`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
  };
}

export default App;
