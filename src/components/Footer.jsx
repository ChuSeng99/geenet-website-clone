import React from 'react'

const Footer = () => {
  return (
		<footer className="text-white bg-gradient-to-t from-gray-800 from-[85%] to-white to-[15%]">
			<div className="bg-gradient-to-b from-gray-400 to-gray-600 w-1/2 mx-auto p-10 rounded-lg flex justify-between items-center">
				<p className='text-2xl text-gray-200'>Get more updates on our social platforms</p>
				<ul className="flex gap-4">
					<li>🚀</li>
					<li>🚀</li>
					<li>🚀</li>
					<li>🚀</li>
				</ul>
			</div>
			<div className='mt-2'>
				<div className="w-full flex px-16">
					<div className="py-8 flex-1 text-center">
						<p className="mb-2">About Us</p>
						<ul className="text-gray-300 flex flex-col gap-1">
							<li className="hover:text-pink-600">
								<a href="#">Board Of Directors</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Vision, Mission, Goals</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Core Values</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Partners & Solutions</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Portfolio</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Media</a>
							</li>
						</ul>
					</div>
					<div className="py-8 flex-1 text-center">
						<p className="mb-2">Support</p>
						<ul className="text-gray-300 flex flex-col gap-1">
							<li className="hover:text-pink-600">
								<a href="#">Service Announcement</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Network Services</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">PDPA</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Data Protection</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">International Calls And SMS</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Critical Information Summary</a>
							</li>
						</ul>
					</div>
					<div className="py-8 flex-1 text-center">
						<p className='mb-2'>Contact Us</p>
						<ul className="text-gray-300 flex flex-col gap-1">
							<li className="hover:text-pink-600">
								<a href="#">Dormitory Locator</a>
							</li>
							<li className="hover:text-pink-600">
								<a href="#">Reseller Store Locator</a>
							</li>
						</ul>
					</div>
				</div>
				<hr className='my-2' />
				<div class="px-16 grid gap-4 md:flex md:justify-between py-4 text-gray-200 text-sm">
					<p>Copyright &copy; 2025 Geenet Pte Ltd. All rights reserved.</p>

					<ul class="flex gap-8">
						<li class="hover:underline cursor-pointer">
							<a href="#"></a>
							<span>Privacy Policy</span>
						</li>
						<li class="hover:underline cursor-pointer">
							<a href="#"></a>
							<span>Terms of Use</span>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer