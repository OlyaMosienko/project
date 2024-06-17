// декларативный стиль - описываем, что хотим получить, но не конкретные действия
import logo from './logo.svg';
import './App.css';

// декларативный стиль - объявление функции, которая не описывает конкретные шаги,
// а лишь возвращает шаблон HTML
export const App = () => {
	return (
		// декларативный стиль - описываем, что хотим получить на выходе
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{/* код внутри параграфа - императивный стиль,
				мы описали шаги, как вычислить год,
				но не написали конкретный */}
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
};
