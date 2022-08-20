import React, { useContext } from "react";
import CheatState from "../state/CheatState";

export const ChoseCheat = () => {
	const [, setCheatIndex] = useContext(CheatState);

	return (
		<>
			<div>ChoseCheat</div>
			<select
				onChange={(e) => {
					setCheatIndex(e.target.value);
				}}
			>
				<option value={1}>Python</option>
				<option value={2}>JavaScript</option>
			</select>
		</>
	);
};
