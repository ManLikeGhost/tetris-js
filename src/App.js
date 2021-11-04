import logo from './logo.svg';
import './App.css';
import Tetris from './components/Tetris';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<div>
				<Tetris />

				<div className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
				</div>
			</div>
		</div>
	);
}

export default App;
