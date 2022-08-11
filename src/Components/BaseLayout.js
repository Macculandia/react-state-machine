import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachin from "../Machines/bookingMacine";

export const BaseLayout = () => {
	const [state, send] = useMachine(bookingMachin);
	console.log(state);
	return <div>Hola</div>;
};
