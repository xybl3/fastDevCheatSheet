import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ThemeState from "./state/ThemeState";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ChoseCheat } from "./components/ChoseCheat";
import CheatState from "./state/CheatState";
import { CheatWidget } from "./components/CheatWidget";

function App() {
	const [data, setData] = useState(null);
	const [theme, setTheme] = useState(false);
	const [cheatIndex, setCheatIndex] = useState(1);

	useEffect(() => {
		console.log("fetching cheats");
		axios
			.get("http://127.0.0.1:8000/cheats/" + cheatIndex)
			.then((data) => {
				setData(data.data.sheet);
			})
			.catch((e) => {
				console.log(e);
				setData(null);
			});
	}, [cheatIndex]);

	// if (data == null)
	// 	return (
	// 		<>
	// 			<h1>NULL</h1>
	// 		</>
	// 	);

	return (
		<>
			<ThemeState.Provider value={[theme, setTheme]}>
				<ThemeSwitcher></ThemeSwitcher>
				{data == null || data.error ? (
					<h1>Data is not available</h1>
				) : (
					<CheatWidget cheat={data}></CheatWidget>
				)}
				<CheatState.Provider value={[cheatIndex, setCheatIndex]}>
					<h1>{cheatIndex.toString()}</h1>
					<ChoseCheat></ChoseCheat>
				</CheatState.Provider>
			</ThemeState.Provider>
		</>
	);
}

export default App;
