import Header from './Components/Header';
import Footer from './Components/Footer';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
		<Header />

		<Switch>
			<Route exact path="/">
				This is the homepage
			</Route>
			<Route path="/about">
				This is the About Us page
			</Route>
		</Switch>

		<Footer />
    </Router>
  );
}

export default App;