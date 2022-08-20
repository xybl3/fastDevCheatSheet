import React from "react";

export const CheatWidget = (props) => {
	const cheat = props.cheat;
	console.log(cheat);
	return (
		<>
			<div>
				<h1>{cheat.name}</h1>
				<h3>{cheat.description}</h3>
				<h4>Total tips: {cheat.tips.length}</h4>
				<div className="cheats">
					{cheat.tips.map((tip) => {
						return (
							<div key={tip.name + tip.desc} className="cheat">
								<h5>{tip.name}</h5>
								<h6>{tip.desc}</h6>
								<code>{tip.code}</code>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
