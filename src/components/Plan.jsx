import React from 'react'

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
				<div className="bg-gray-400/40 px-6 py-8 rounded-2xl">
					<h1 className="mb-4 flex items-start">
						<span className="text-4xl relative top-3">$</span>
						<span className="text-8xl">10</span>
					</h1>
					<p className="text-xs bg-pink-600 w-fit py-1 px-2 rounded-lg">
						Best For Daily Usage
					</p>
					<hr className="my-4 border border-pink-300" />
					<ul className="flex flex-col gap-2">
						<li className="before:content-['✅'] before:mr-2">
							200GB Local Data
						</li>
						<li className="flex items-start gap-2">
							<span className="text-green-500">✅</span>
							<span>
								1GB Data Roaming <br /> (Malaysia/ Indonesia)
							</span>
						</li>
						<li className="before:content-['✅'] before:mr-2">
							1000 Local Mins
						</li>
						<li className="before:content-['✅'] before:mr-2">100 Local SMS</li>
						<li className="before:content-['✅'] before:mr-2">
							Unlimited Local Incoming Call
						</li>
						<li className="before:content-['✅'] before:mr-2">
							Free Caller ID
						</li>
					</ul>
				</div>
				<div className="bg-pink-400/40 px-6 py-8 rounded-2xl">
					<h1 className="mb-4 flex items-start">
						<span className="text-4xl relative top-3">$</span>
						<span className="text-8xl">10</span>
					</h1>
					<p className="text-xs bg-pink-600 w-fit py-1 px-2 rounded-lg">
						Best For Daily Usage
					</p>
					<hr className="my-4 border border-pink-300" />
					<ul className="flex flex-col gap-2">
						<li className="before:content-['✅'] before:mr-2">
							200GB Local Data
						</li>
						<li className="flex items-start gap-2">
							<span className="text-green-500">✅</span>
							<span>
								1GB Data Roaming <br /> (Malaysia/ Indonesia)
							</span>
						</li>
						<li className="before:content-['✅'] before:mr-2">
							1000 Local Mins
						</li>
						<li className="before:content-['✅'] before:mr-2">100 Local SMS</li>
						<li className="before:content-['✅'] before:mr-2">
							Unlimited Local Incoming Call
						</li>
						<li className="before:content-['✅'] before:mr-2">
							Free Caller ID
						</li>
					</ul>
				</div>
				<div className="bg-gray-400/40 px-6 py-8 rounded-2xl">
					<h1 className="mb-4 flex items-start">
						<span className="text-4xl relative top-3">$</span>
						<span className="text-8xl">10</span>
					</h1>
					<p className="text-xs bg-pink-600 w-fit py-1 px-2 rounded-lg">
						Best For Daily Usage
					</p>
					<hr className="my-4 border border-pink-300" />
					<ul className="flex flex-col gap-2">
						<li className="before:content-['✅'] before:mr-2">
							200GB Local Data
						</li>
						<li className="flex items-start gap-2">
							<span className="text-green-500">✅</span>
							<span>
								1GB Data Roaming <br /> (Malaysia/ Indonesia)
							</span>
						</li>
						<li className="before:content-['✅'] before:mr-2">
							1000 Local Mins
						</li>
						<li className="before:content-['✅'] before:mr-2">100 Local SMS</li>
						<li className="before:content-['✅'] before:mr-2">
							Unlimited Local Incoming Call
						</li>
						<li className="before:content-['✅'] before:mr-2">
							Free Caller ID
						</li>
					</ul>
				</div>
				<div className="bg-gray-400/40 px-6 py-8 rounded-2xl">
					<h1 className="mb-4 flex items-start">
						<span className="text-4xl relative top-3">$</span>
						<span className="text-8xl">10</span>
					</h1>
					<p className="text-xs bg-pink-600 w-fit py-1 px-2 rounded-lg">
						Best For Daily Usage
					</p>
					<hr className="my-4 border border-pink-300" />
					<ul className="flex flex-col gap-2">
						<li className="before:content-['✅'] before:mr-2">
							200GB Local Data
						</li>
						<li className="flex items-start gap-2">
							<span className="text-green-500">✅</span>
							<span>
								1GB Data Roaming <br /> (Malaysia/ Indonesia)
							</span>
						</li>
						<li className="before:content-['✅'] before:mr-2">
							1000 Local Mins
						</li>
						<li className="before:content-['✅'] before:mr-2">100 Local SMS</li>
						<li className="before:content-['✅'] before:mr-2">
							Unlimited Local Incoming Call
						</li>
						<li className="before:content-['✅'] before:mr-2">
							Free Caller ID
						</li>
					</ul>
				</div>
			</div>
			<hr className="my-8 text-gray-400" />
			<div className="w-full flex gap-10 justify-around">
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