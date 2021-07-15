import React from "react";
import { Cards } from "./cards";
import { Jumbotron } from "./jumbotron";

export const Container = () => {
	return (
		<div className="w-50 mx-auto">
			<Jumbotron />
			<Cards />
		</div>
	);
};
