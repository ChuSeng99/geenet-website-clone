import React from 'react'
import PlanCard from './PlanCard';
import { plans } from '../constants/plans';

const Plan = () => {
  return (
		<div className="p-16 mt-6 flex flex-col gap-5 bg-gray-900 text-gray-200">
			<h2 className="text-5xl font-semibold">Essential plans for everyone.</h2>
			<p className="text-lg">
				Easily stay connected with a plan tailored to your lifestyle, whether
				you are a busy professional, a student on the move, or a family seeking
				a reliable communication.
			</p>
			<div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
				{plans.map((plan) => (
					<PlanCard 
						key={plan.id}
						tagline={plan.tagline}
						price={plan.price}
						features={plan.features}
						isFeatured={plan.isFeatured}
					/>
				))}
			</div>
			<hr className="my-8 text-gray-400" />
			<div className="w-full flex flex-col lg:flex-row gap-10 justify-around">
				<button className="py-10 w-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg text-lg hover:scale-105 hover:border-2 duration-150 cursor-pointer">
					Sign-Up Online With Your Singpass 👉
				</button>
				<button className="py-10 w-full bg-gradient-to-l from-gray-400 to-gray-600 rounded-lg text-lg hover:scale-105 hover:border-2 duration-150 cursor-pointer">
					Find Nearest Reseller Store 🔎
				</button>
			</div>
		</div>
	);
}

export default Plan