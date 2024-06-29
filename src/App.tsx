import headerPhone from './assets/header-phone-icon.png';
import appstore from './assets/appstore.png';
import gemIcon from './assets/gemIcon.png';
import walletIcon from './assets/walletIcon.png';
import expenseIcon from './assets/expenseIcon.png';
import savingsIcon from './assets/savingsIcon.png';
import taxIcon from './assets/taxIcon.png';
import billIcon from './assets/billIcon.png';
import sideImage from './assets/sideImage.png';
import aboutImage from './assets/aboutImage.png';
import whyImage from './assets/whyImage.png';
import layer1 from './assets/layer1.png';
import layer2 from './assets/layer2.png';
import notification from './assets/notification.png';
import ikImage from './assets/1kImage.png';
import waveImage from './assets/wave.png';
import circleBlue from './assets/circleBlue.png';
import circleWhite from './assets/circleWhite.png';
import circlePink from './assets/circlePink.png';
import circlefull from './assets/circlefull.png';
import circleHalf from './assets/circleHalf.png';
import coinImage from './assets/coinImage.png';
import { motion } from 'framer-motion';
import Navbar from './components/NavBar';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="bg-white min-h-screen w-full">
			<Navbar />
			<header
				id="home"
				className="bg-white text-white py-6 pt-20 relative w-full"
			>
				<div className="absolute top-0 left-0 w-full h-full z-10">
					<img
						src={layer2}
						alt="appstore"
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div className="absolute top-0 left-0 w-full h-full z-10">
					<img
						src={layer1}
						alt="appstore"
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div className="container mx-auto">
					<div className="relative w-full h-[320px]  md:h-[420px]">
						<div className="absolute right-40 top-20  h-full hidden md:block z-10">
							<img
								src={headerPhone}
								alt="Background Image"
								className="object-cover object-center w-full h-full z-10"
							/>
							<motion.img
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.4, duration: 0.5 },
								}}
								src={notification}
								alt="notification left"
								className="object-cover object-center absolute top-0 -left-44 z-10"
							/>
							<motion.img
								initial={{ opacity: 0, x: 50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.5, duration: 0.5 },
								}}
								src={notification}
								alt="notification right"
								className="object-cover object-center absolute bottom-44 -right-36 z-10"
							/>
							<img
								src={circlefull}
								alt="circlefull"
								className="object-cover object-center absolute -top-10 -right-16 w-[180px] h-[180px] -z-10"
							/>
							<img
								src={coinImage}
								alt="circlefull"
								className="object-cover object-center absolute bottom-10 -right-12 w-[70px] h-[70px] -z-10"
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
									className="text-grey-700 font-extrabold text-4xl md:text-5xl leading-10 mb-2"
								>
									Empower <br /> your finance
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
									with block-chain powered productivity
								</motion.p>
								<img
									src={ikImage}
									alt="appstore"
									className="object-cover object-center z-10"
								/>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section id="download" className="py-16 w-full md:pt-32">
				<div className="mx-auto container flex flex-col md:flex-row items-center justify-center rounded-md bg-[#0181F8] relative">
					<div className="flex flex-col  text-white p-10">
						<h2 className="text-3xl font-bold">
							Get Rewards <br className="hidden md:block" />
							From your Daily Sign In
						</h2>
						<h3 className="text-lg font-medium mt-3">
							Earn in prosperi coin when you sign in daily, this could be used{' '}
							<br className="hidden md:block" />
							to purchase goods on the App. <br className="hidden md:block" />{' '}
							Join Today
						</h3>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="w-full flex justify-center mt-4"
						>
							<button className="mr-2 cursor-pointer">
								<img
									src={appstore}
									alt="appstore"
									className="object-cover object-center w-full h-full"
								/>
							</button>
							<button className="mr-2 cursor-pointer">
								<img
									src={appstore}
									alt="appstore"
									className="object-cover object-center w-full h-full"
								/>
							</button>
						</motion.div>
					</div>
					<div className="flex flex-col items-center justify-center relative">
						<img
							src={sideImage}
							alt="icon Image"
							className="object-cover object-center h-[360px] w-full z-10"
						/>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.6, duration: 0.5 },
							}}
							src={circleWhite}
							alt="icon Image"
							className="object-cover object-center h-[70px] w-[70px] absolute -left-4 md:left-0"
						/>
						<motion.img
							initial={{ opacity: 0, x: 50 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							src={circleBlue}
							alt="icon Image"
							className="object-cover object-center h-[80px] w-[80px] absolute top-16 right-12"
						/>
					</div>
				</div>
			</section>
			<section className="md:py-16 isolate relative" id="why">
				<div
					className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
					aria-hidden="true"
				>
					<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7274e6] to-[#5856e2] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] clipPath"></div>
				</div>
				<div className="mx-auto container flex  md:flex-row items-center justify-center flex-col-reverse">
					<div className="p-10">
						<h3 className="text-xl font-semibold mb-2">WHY PROSPERI?</h3>
						<h2 className="text-2xl md:text-3xl font-bold mb-8">
							Prosperi is ideal for boosting customer productivity with enhanced
							security
						</h2>
						<div className="flex flex-col items-start justify-start gap-2">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.4, duration: 0.5 },
								}}
								className="flex items-center justify-start gap-2"
							>
								<img
									src={gemIcon}
									alt="icon Image"
									className="object-cover object-center h-10 w-10"
								/>
								<p className="text-lg font-semibold">
									Tokenized rewards and Incentives
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.5, duration: 0.5 },
								}}
								className="flex items-center justify-start gap-2"
							>
								<img
									src={billIcon}
									alt="icon Image"
									className="object-cover object-center h-10 w-10"
								/>
								<p className="text-lg font-semibold">Bill payment reminders</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.6, duration: 0.5 },
								}}
								className="flex items-center justify-start gap-2"
							>
								<img
									src={expenseIcon}
									alt="icon Image"
									className="object-cover object-center h-10 w-10"
								/>
								<p className="text-lg font-semibold">
									Expense and budget tracking
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.7, duration: 0.5 },
								}}
								className="flex items-center justify-start gap-2"
							>
								<img
									src={walletIcon}
									alt="icon Image"
									className="object-cover object-center h-10 w-10"
								/>
								<p className="text-lg font-semibold">
									Decentralised wallet integration
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.8, duration: 0.5 },
								}}
								className="flex items-center justify-start gap-2"
							>
								<img
									src={savingsIcon}
									alt="icon Image"
									className="object-cover object-center h-10 w-10"
								/>
								<p className="text-lg font-semibold">
									Saving planner, invoicing and payment
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: { delay: 0.9, duration: 0.5 },
								}}
								className="flex items-center justify-start gap-2"
							>
								<img
									src={taxIcon}
									alt="icon Image"
									className="object-cover object-center h-10 w-10"
								/>
								<p className="text-lg font-semibold">Tax management</p>
							</motion.div>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center">
						<motion.img
							initial={{ opacity: 0, x: 50 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							src={whyImage}
							alt="icon Image"
							className="object-cover object-center h-[360px] w-full"
						/>
					</div>
				</div>
			</section>
			<section id="aboutus" className="py-16 relative isolate">
				<div
					aria-hidden="true"
					className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
				>
					<div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400 dark:from-blue-700"></div>
					<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
				</div>
				<img
					src={waveImage}
					alt="appstore"
					className="object-cover object-center h-[70px] w-full absolute bottom-52 -z-10"
				/>
				<div className="mx-auto container flex flex-col md:flex-row items-center justify-center">
					<div className="flex flex-1 flex-col items-center justify-center relative">
						<img
							src={aboutImage}
							alt="icon Image"
							className="object-cover object-center  w-full"
						/>
						<img
							src={circlePink}
							alt="icon Image"
							className="object-cover object-center h-[70px] w-[70px] absolute -left-12 -bottom-6 -z-10"
						/>
						<motion.img
							initial={{ opacity: 0, x: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							src={circleHalf}
							alt="icon Image"
							className="object-cover object-center h-[90px] w-[90px] absolute top-16 right-16 -z-10"
						/>
						<img
							src={circleBlue}
							alt="icon Image"
							className="object-cover object-center h-[90px] w-[90px] absolute -top-10 -left-12 -z-10"
						/>
					</div>
					<div className="flex-1 p-10">
						<motion.h3
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							className="text-xl font-semibold mb-2"
						>
							About us
						</motion.h3>
						<h2 className="text-3xl font-bold mb-4">Prosperi Ecosystem</h2>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="text-lg  mb-3"
						>
							Introducing Prosperi, the comprehensive financial and productivity
							tool that empowers people and small business owners. Prosperi
							delivers a streamlined and safe experience for recording costs,
							managing your finances, and increasing productivity. It is
							integrated with the Celo blockchain.
						</motion.p>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.5, duration: 0.6 },
							}}
							viewport={{ once: false, amount: 0.5 }}
							className="text-lg  mb-1"
						>
							At Prosperi, we think financial management should be simple and
							approachable. Our extensive toolkit is available to assist you in
							managing your finances, whether you're organizing your finances,
							keeping track of your investments, or setting up your wallet.
						</motion.p>
					</div>
				</div>
			</section>
			<Testimonial />
			<section className="bg-white py-16 px-2 border-t border-white">
				<h2 className="text-sm md:text-lg font-semibold mb-2 text-center">
					What are you waiting for download{' '}
					<span className="text-[#0181F8]">Prosperi</span> app{' '}
					<br className="hidden md:block" /> & get started now
				</h2>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.2, duration: 0.5 },
					}}
					viewport={{ once: false, amount: 0.5 }}
					className="w-full flex justify-center"
				>
					<button className="mr-2 cursor-pointer">
						<img
							src={appstore}
							alt="appstore"
							className="object-cover object-center w-full h-full"
						/>
					</button>
					<button className="mr-2 cursor-pointer">
						<img
							src={appstore}
							alt="appstore"
							className="object-cover object-center w-full h-full"
						/>
					</button>
				</motion.div>
			</section>
			<Footer />
		</div>
	);
};

export default App;
