// import React from 'react';
import { motion } from 'framer-motion';
import reward from './assets/reward.png';
import transactions from './assets/transactions.png';
import dashboard from './assets/dashboard.png';
import dashboard2 from './assets/dashboard2.png';
import inclusion from './assets/inclusion.png';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

const App = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<Navbar />
			{/* <!-- hero seciton --> */}
			<header className="bg-blue-500 text-white py-6">
				<div className="container mx-auto">
					<div className="relative w-full h-[320px]  md:h-[420px]">
						<div className="absolute  right-40 top-20  h-full hidden md:block">
							<img
								src={dashboard}
								alt="Background Image"
								className="object-cover object-center w-full h-full"
							/>
						</div>
						<div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between z-10">
							<div className="md:w-1/2 mb-4 md:mb-0">
								<motion.h1
									initial={{ opacity: 0, y: 50 }}
									whileInView={{
										opacity: 1,
										y: 0,
										transition: { delay: 0.2, duration: 0.5 },
									}}
									viewport={{ once: false, amount: 0.5 }}
									className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2"
								>
									Prosperi
								</motion.h1>
								<motion.p
									initial={{ opacity: 0, y: 50 }}
									whileInView={{
										opacity: 1,
										y: 0,
										transition: { delay: 0.4, duration: 0.5 },
									}}
									viewport={{ once: false, amount: 0.5 }}
									className="font-regular  md:text-xl mb-8 mt-4  leading-loose md:font-semibold"
								>
									With Celo Blockchain we provide Seamless, secure, and low-cost
									cryptocurrency payments with a rewards system for small
									business patrons.
								</motion.p>
								<a
									href="#contactUs"
									className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-500 font-medium rounded-full transition duration-200"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section className="py-10 isolate relative" id="services">
				<div
					className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
					aria-hidden="true"
				>
					<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7274e6] to-[#5856e2] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] clipPath"></div>
				</div>
				<div className="container mx-auto px-4 py-10">
					<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
						Our Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
						<div className="bg-white rounded-lg shadow-md overflow-hidden">
							<img
								src={dashboard2}
								alt="Payment Options"
								className="w-full h-64 object-cover object-top"
							/>
							<div className="p-6 text-center">
								<h3 className="text-xl font-medium text-gray-800 mb-2">
									Enhanced Payment Options
								</h3>
								<p className="text-gray-700 text-base">
									Make payments using Celo's stablecoins (e.g., cUSD), providing
									a fast and low-fee transaction alternative.
								</p>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-md overflow-hidden">
							<img
								src={reward}
								alt="Reward Program"
								className="w-full h-64 object-cover object-top"
							/>
							<div className="p-6 text-center">
								<h3 className="text-xl font-medium text-gray-800 mb-2">
									Rewards Program
								</h3>
								<p className="text-gray-700 text-base">
									Implement a blockchain-based bonus points system to reward
									regular customers, enhancing customer loyalty and engagement.
								</p>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-md overflow-hidden">
							<img
								src={inclusion}
								alt="Dashboard"
								className="w-full h-64 object-cover"
							/>
							<div className="p-6 text-center">
								<h3 className="text-xl font-medium text-gray-800 mb-2">
									Financial Inclusion
								</h3>
								<p className="text-gray-700 text-base">
									Provide a reliable financial service to unbanked and
									underbanked users through mobile access.
									<details>
										<summary>Read More</summary>
										<p>
											Our jowar flour is also a good source of protein and
											fiber, making it a healthy choice for your family.
										</p>
									</details>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- about us --> */}
			<section className="bg-gray-100" id="aboutus">
				<div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
						<div className="max-w-lg">
							<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
								About Us
							</h2>
							<p className="mt-4 text-gray-600 text-lg">
								One stop solution for implementing a blockchain-based bonus
								points system to reward regular customers, enhancing customer
								loyalty and engagement.
							</p>
						</div>
						<div className="mt-12 md:mt-0">
							<img
								src={dashboard}
								alt="About Us Image"
								className="object-cover rounded-lg shadow-md"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* call to action */}
			<section className="bg-blue-500 text-white py-6">
				<div className="container mx-auto px-6">
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="text-4xl font-bold"
					>
						Prosperi Wallet with Celo Blockchain
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="mt-2"
					>
						Seamless, secure, and low-cost cryptocurrency payments with a
						rewards system for small business patrons.
					</motion.p>
				</div>
			</section>

			{/* <!-- why us  --> */}
			<section className="text-gray-700 body-font mt-10  isolate relative">
				<div
					className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
					aria-hidden="true"
				>
					<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] clipPath"></div>
				</div>
				<div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
					Why Prosperi?
				</div>
				<div className="container px-5 py-12 mx-auto">
					<div className="flex flex-wrap text-center justify-center">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="p-4 md:w-1/4 sm:w-1/2"
						>
							<div className="px-4 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Seamles and secure
								</h2>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="p-4 md:w-1/4 sm:w-1/2"
						>
							<div className="px-4 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Reasonable Rates
								</h2>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="p-4 md:w-1/4 sm:w-1/2"
						>
							<div className="px-4 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Time Efficiency
								</h2>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="p-4 md:w-1/4 sm:w-1/2"
						>
							<div className="px-4 py-6 transform transition duration-500 hover:scale-110">
								<div className="flex justify-center">
									<img
										src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
										className="w-32 mb-3"
									/>
								</div>
								<h2 className="title-font font-regular text-2xl text-gray-900">
									Expertise in Industry
								</h2>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			{/* Step-by-Step Process */}
			<section className="container mx-auto px-6 py-10 relative isolate">
				<div
					className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
					aria-hidden="true"
				>
					<div className="relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8088ff] to-[#05af3e] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] clipPath"></div>
				</div>
				<h2 className="text-2xl font-bold mb-6">How It Works</h2>
				<div className="space-y-4">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="bg-white p-6 rounded-lg shadow-md"
					>
						<h3 className="text-xl font-semibold mb-2">
							1. Expense and Budgeting Tracking Tool
						</h3>
						<p>
							The user links financial accounts, categorizes expenses, sets
							budgets, and tracks spending.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="bg-white p-6 rounded-lg shadow-md"
					>
						<h3 className="text-xl font-semibold mb-2">
							3. Bill Payment Reminder
						</h3>
						<p>The user adds bills, sets reminders, and manages payments.</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="bg-white p-6 rounded-lg shadow-md"
					>
						<h3 className="text-xl font-semibold mb-2">6. Savings Planner</h3>
						<p>
							The user sets savings goals, automates savings, and tracks
							progress.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="bg-white p-6 rounded-lg shadow-md"
					>
						<h3 className="text-xl font-semibold mb-2">
							4. Payment and Transaction Tool
						</h3>
						<p>
							The user sends and receives money and views transaction history.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, duration: 0.5 },
						}}
						viewport={{ once: false, amount: 0.5 }}
						className="bg-white p-6 rounded-lg shadow-md"
					>
						<h3 className="text-xl font-semibold mb-2">
							5. Financial Health Dashboard
						</h3>
						<p>
							The user has a consolidated view of their financial health, with
							insights and reports.
						</p>
					</motion.div>
				</div>
			</section>

			{/* <!-- gallery --> */}
			<section className="text-gray-700 body-font" id="gallery">
				<div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
					Gallery
				</div>

				<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
					<div className="group relative">
						<img
							src={reward}
							alt="Image 1"
							className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
						/>
					</div>

					<div className="group relative">
						<img
							src={transactions}
							alt="Image 1"
							className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
						/>
					</div>

					<div className="group relative">
						<img
							src={reward}
							alt="Image 1"
							className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
						/>
					</div>
					<div className="group relative">
						<img
							src={dashboard}
							alt="Image 1"
							className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
						/>
					</div>
				</div>
			</section>
			{/* call to action */}
			<div className="relative py-16">
				<div
					aria-hidden="true"
					className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
				>
					<div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400 dark:from-blue-700"></div>
					<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
				</div>

				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="relative">
						<div className="flex items-center justify-center -space-x-2">
							<img
								loading="lazy"
								width="400"
								height="400"
								src="https://randomuser.me/api/portraits/women/12.jpg"
								alt="member photo"
								className="h-8 w-8 rounded-full object-cover"
							/>
							<img
								loading="lazy"
								width="200"
								height="200"
								src="https://randomuser.me/api/portraits/women/45.jpg"
								alt="member photo"
								className="h-12 w-12 rounded-full object-cover"
							/>
							<img
								loading="lazy"
								width="200"
								height="200"
								src="https://randomuser.me/api/portraits/women/60.jpg"
								alt="member photo"
								className="z-10 h-16 w-16 rounded-full object-cover"
							/>
							<img
								loading="lazy"
								width="200"
								height="200"
								src="https://randomuser.me/api/portraits/women/4.jpg"
								alt="member photo"
								className="relative h-12 w-12 rounded-full object-cover"
							/>
							<img
								loading="lazy"
								width="200"
								height="200"
								src="https://randomuser.me/api/portraits/women/34.jpg"
								alt="member photo"
								className="h-8 w-8 rounded-full object-cover"
							/>
						</div>

						<div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
							<motion.h1
								initial={{ opacity: 0, y: 50 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.2, duration: 0.5 },
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="text-center text-4xl font-bold text-gray-800  md:text-5xl"
							>
								Earn rewards on your crypto
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 50 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.4, duration: 0.5 },
								}}
								viewport={{ once: false, amount: 0.5 }}
								className="text-center text-xl text-gray-600"
							>
								Rewards are available on the assets listed below. Earnings are
								paid out on a weekly basis in the same asset that earned them.*
							</motion.p>
							<div className="flex flex-wrap justify-center gap-6">
								<a
									href="#"
									className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
								>
									<span className="relative text-base font-semibold text-white ">
										Get Started
									</span>
								</a>
								<a
									href="#aboutus"
									className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-blue-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
								>
									<span className="relative text-base font-semibold text-blue-500 ">
										More about
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Visit us section --> */}
			<section className="bg-gray-100">
				<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Margin, futures and opt-in rewards are subject to certain
							geographic limitations and eligibility criteria.
						</h2>
						<p className="mt-3 text-lg text-gray-500">
							Reward rates are subject to change and compliance with Kraken's
							terms and conditions. These materials are for general information
							purposes only and are not investment advice or a recommendation or
							solicitation to buy, sell, stake or hold any cryptoasset or to
							engage in any specific trading strategy. Some crypto products and
							markets are unregulated, and you may not be protected by
							government compensation and/or regulatory protection schemes. The
							unpredictable nature of the cryptoasset markets can lead to loss
							of funds. Tax may be payable on any return and/or on any increase
							in the value of your cryptoassets and you should seek independent
							advice on your taxation position. For more information, please see
							our Terms of Service.
						</p>
						<p className="mt-3 text-lg text-gray-500">
							Trading futures, derivatives and other instruments using leverage
							involves an element of risk and may not be suitable for everyone.
							Read Kraken’s risk disclosure to learn more.
						</p>
					</div>
				</div>
			</section>
			{/* <!-- footer --> */}
			<Footer />
		</div>
	);
};

export default App;
