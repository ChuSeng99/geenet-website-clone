import React from 'react'
import { planeImg } from "../utils";
import { motion } from "framer-motion";

const Roaming = () => {
  return (
		<div className="w-full text-center flex flex-col md:flex-row items-center justify-around">
			<div className="max-w-lg flex flex-col gap-4">
				<h2 className="text-6xl font-semibold text-left">
					Exciting roaming data and local data in one place.
				</h2>
				<p className="text-gray-600 text-lg text-left">
					Roaming anywhere from our list of countries.
				</p>
				<button className="w-fit px-4 py-2 text-black border-2 border-b-6 border-r-6 border-pink-600 rounded-lg hover:bg-pink-200 transition cursor-pointer">
					Find out more
				</button>
			</div>
			<motion.img
				src={planeImg}
				className="max-h-[500px] w-auto mt-4 md:mt-0"
				alt="Plane"
				initial={{ y: -10 }}
				animate={{ y: 10 }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: 'reverse',
					ease: 'easeInOut',
				}}
			/>
		</div>
	);
}

export default Roaming