import React from "react";

export const Cards = () => {
	return (
		<div className="card">
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a longer card with supporting text below as a
					natural lead-in to additional content. This content is a
					little bit longer.
				</p>
				<p className="card-text">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</p>
			</div>
		</div>
	);
};
