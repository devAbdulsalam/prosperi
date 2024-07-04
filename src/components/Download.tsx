import { motion } from 'framer-motion';
import sideImage from './../assets/sideImage.png';
import circleWhite from './../assets/circleWhite.png';
import appstore from './../assets/appstore.png';
import circleBlue from './../assets/circleBlue.png';
function Download() {
	return (
		<section
			id="download"
			className="py-16 w-full md:pt-32 relative px-2 md:px-8 lg:px-16"
		>
			<div className="mx-auto md:container md:max-w-7xl flex flex-col md:flex-row items-center justify-between rounded-md bg-[#0125A6] relative p-4">
				<div className="flex flex-col  text-white p-4 md:p-10">
					<h2 className="text-xl md:text-3xl font-bold">
						Get Rewards <br className="hidden md:block" />
						From your Daily Sign In
					</h2>
					<h3 className="md:text-lg font-medium mt-3">
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
						className="w-full flex justify-center mt-6 md:mt-8"
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
				<div className="flex flex-col items-center justify-center relative mt-8 md:mt-0">
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
	);
}

export default Download;
