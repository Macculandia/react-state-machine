import React from "react";
import "../Styles/Components/Tickets.css";

export const Tickets = ({ send, context }) => {
	const finish = () => {
		send("FINISH");
	};

	return (
		<div className="Tickets">
			<p className="Tickets-description description">Gracias por volar con book a fly </p>
			<span role="img" aria-labelledby="heart">
				💚
			</span>
			<div className="Tickets-ticket">
				<div className="Tickets-country">Colombia</div>
				<div className="Tickets-passengers">
					<span>✈</span>
					{context.passengers.map((person, idx) => {
						return <p key={idx}>{person}</p>;
					})}
				</div>
			</div>
			<button onClick={finish} className="Tickets-finalizar button">
				Finalizar
			</button>
		</div>
	);
};
