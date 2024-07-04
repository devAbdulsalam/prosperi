import gemIcon from './../assets/gemIcon.png';
import walletIcon from './../assets/walletIcon.png';
import expenseIcon from './../assets/expenseIcon.png';
import savingsIcon from './../assets/savingsIcon.png';
import taxIcon from './../assets/taxIcon.png';
// import billIcon from './../assets/billIcon.png';
import whyImage from './../assets/whyImage2.png';
import { motion } from 'framer-motion';
function Why() {
	return (
		<section className="md:py-16 isolate relative w-full" id="why">
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7274e6] to-[#5856e2] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] clipPath"></div>
			</div>
			<div className="mx-auto container md:max-w-7xl flex  md:flex-row items-center justify-center flex-col-reverse text-white">
				<div className="p-4 md:py-10 flex-1 mt-10 md:mt-0">
					<h3 className="text-xl font-semibold mb-4">WHY PROSPERI?</h3>
					<p className="text-lg md:text-3xl md:font-bold mb-8">
						At Prosperi, we believe in rewarding our users for their loyalty and
						engagement.
					</p>
					<div className="flex flex-col items-start justify-start gap-3">
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
								className="object-cover object-center h-7 w-7 md:h-10 md:w-10"
							/>
							<p className="md:text-lg font-semibold">Referral Program</p>
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
								className="object-cover object-center h-7 w-7 md:h-10 md:w-10"
							/>
							<p className="md:text-lg font-semibold">Milestone Rewards</p>
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
								className="object-cover object-center h-7 w-7 md:h-10 md:w-10"
							/>
							<p className="md:text-lg font-semibold">
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
								className="object-cover object-center h-7 w-7 md:h-10 md:w-10"
							/>
							<p className="md:text-lg font-semibold">Cashback Offers</p>
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
								className="object-cover object-center h-7 w-7 md:h-10 md:w-10"
							/>
							<p className="md:text-lg font-semibold">Gamified Challenges: </p>
						</motion.div>
					</div>
				</div>
				<div className="flex-1 flex flex-col items-center justify-center">
					<motion.img
						initial={{ opacity: 0, x: 50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						src={whyImage}
						alt="icon Image"
						className="object-contain object-center md:h-[400px] w-full"
					/>
				</div>
			</div>
		</section>
	);
}

export default Why;
