import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';

const Index = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<div className="container md:max-w-6xl mx-auto flex flex-col gap-4 md:flex-row pt-26  p-4 md:p-10 md:min-h-[60vh] items-center ">
				<div className="flex-1 text-white">
					<h2 className="text-xl md:text-3xl font-semibold mt-20 md:mt-0 mb-4">
						Licence
					</h2>
					<div className="py-4">
						<h2 className="text-lg md:text-2xl font-semibold  text-[#007BFF] mb-4">
							Proprietary Software License
						</h2>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							className="mt-2 text-white md:text-lg"
						>
							Prosperi is licensed under a proprietary software license. Users
							can download and use the app, but the source code and intellectual
							property rights are retained by Prosperi.
						</motion.p>
					</div>
				</div>
				<div className="flex-1 pt-2 py-4 md:py-10 container mx-auto">
					<h2 className="text-lg md:text-3xl font-semibold text-white mb-4">
						Usage Restrictions
					</h2>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						className="text-white mb-4 md:text-lg"
					>
						<span className="font-semibold">Third-Party Components:</span>
						Some components of Prosperi may be licensed under open-source
						licenses. For details, refer to the 'Licenses' section within the
						app settings.
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						className="text-white mb-4 md:text-lg"
					>
						<span className="font-semibold">Contact </span>
						For any licensing inquiries, please contact us at
						support@prosperi.app.
					</motion.p>
				</div>
			</div>
			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
