import appstore from './assets/appstore.png';
import aboutImage from './assets/aboutImage.png';
import { motion } from 'framer-motion';
import waveImage from './assets/wave.png';
import circleBlue from './assets/circleBlue.png';
import circlePink from './assets/circlePink.png';
import circleHalf from './assets/circleHalf.png';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Part from './components/Part';
import Why from './components/Why';
import Testimonial from './components/Testimonial';
import Download from './components/Download';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="bg-white min-h-screen w-full relative">
			<Navbar />
			<Part />
			<Header />
			<Download />
			<Why />
			<section id="aboutus" className="py-16 relative isolate w-full">
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
					className="object-cover object-center h-[70px] w-full absolute bottom-52 -z-10 "
				/>
				<img
					src={circleHalf}
					alt="circlefull"
					className="object-cover object-center absolute -top-0 right-10 w-[180px] h-[180px] -z-10 opacity-20"
				/>
				<div className="mx-auto container flex flex-col md:flex-row items-center justify-center">
					<div className="flex flex-1 flex-col items-center justify-center relative p-10">
						<img
							src={aboutImage}
							alt="icon Image"
							className="object-cover object-center  w-full"
						/>
						<img
							src={circlePink}
							alt="icon Image"
							className="object-cover object-center h-[70px] w-[70px] absolute md:-left-12 -bottom-6 -z-10"
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
							className="object-cover object-center h-[90px] w-[90px] absolute -top-4 md:top-16 right-16 -z-10"
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
							className="text-xl font-semibold mb-2 mt-6 md:mt-0"
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
			<section className="bg-white py-16 px-2 border-t border-white w-full">
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
