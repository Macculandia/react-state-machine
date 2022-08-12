import { createMachine } from "xstate";

const bookingMachine = createMachine(
	{
		id: "buy plane tickets",
		initial: "initial",
		states: {
			initial: {
				on: {
					START: {
						target: "search",
						actions: "imprimirInicio",
					},
				},
			},
			search: {
				entry: "imprimirEntrada",
				exit: "imprimirSalida",
				on: {
					CONTINUE: "passengers",
					CANCEL: "initial",
				},
			},
			tickets: {
				on: {
					FINISH: "initial",
				},
			},
			passengers: {
				on: {
					DONE: "tickets",
					CANCEL: "initial",
				},
			},
		},
	},
	{
		actions: {
			imprimirInicio: () => console.log("imprimirInicio"),
			imprimirEntrada: () => console.log("imprimirEntrada"),
			imprimirSalida: () => console.log("imprimirSalida"),
		},
	}
);

export default bookingMachine;
