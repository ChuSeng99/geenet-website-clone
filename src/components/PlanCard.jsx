import React from 'react';

const PlanCard = ({ tagline, price, features, isFeatured = false }) => {
	return (
		<div
			className={`px-4 py-8 rounded-2xl ${
				isFeatured ? 'bg-pink-400/20' : 'bg-gray-400/20'
			}`}
		>
			<div className="flex flex-col items-center">
				<p className="mb-4 text-xs text-gray-400">{tagline}</p>
				<h1 className="flex items-start">
					<span className="text-3xl text-gradient relative top-3">$</span>
					<span className="text-8xl text-gradient">{price}</span>
				</h1>
			</div>
			<hr className="mt-4 mb-8 border border-pink-300" />
			<ul className="flex flex-col gap-4 text-center text-gray-300">
				{features.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default PlanCard;
