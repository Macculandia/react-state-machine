import { createMachine, assign } from "xstate";

const bookingMachine = createMachine(
	{
		id: "buy plane tickets",
		initial: "initial",
		context: {
			passengers: [],
			selectedCountry: "",
		},
		states: {
			initial: {
				on: {
					START: {
						target: "search",
					},
				},
			},
			search: {
				on: {
					CONTINUE: {
						target: "passengers",
						actions: assign({
							selectedCountry: (constext, event) => event.selectedCountry,
						}),
					},
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
					ADD: {
						target: "passengers",
						actions: assign((context, event) =>
							context.passengers.push(event.newPassengers)
						),
					},
				},
			},
		},
	},
	{
		actions: {},
	}
);

export default bookingMachine;
