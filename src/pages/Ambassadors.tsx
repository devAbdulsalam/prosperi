import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';

function Index() {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<div className="container md:max-w-6xl mx-auto flex flex-col md:flex-row p-4 md:p-10 md:min-h-[60vh] items-center">
				<div className="flex-1 text-white">
					<h2 className="text-xl md:text-3xl font-semibold mb-4 capitalize mt-20 md:mt-0">
						Ambassadors
					</h2>
					<motion.h3
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						className="text-lg md:text-2xl font-semibold mb-4 text-[#007BFF]"
					>
						Join the Prosperi Ambassador Program
					</motion.h3>
				</div>
				<div className="flex-1">
					<div className="py-4">
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.5 },
							}}
							className="mt-2 text-white text-sm md:text-lg"
						>
							Become a Prosperi ambassador and help spread the word about our
							innovative financial management platform. As an ambassador, you'll
							gain early access to new features, exclusive rewards, and the
							opportunity to shape the future of Prosperi. Share your unique
							referral code, host events, and engage with our community to earn
							special incentives.
						</motion.p>
					</div>
				</div>
			</div>
			<ArrowUp />
			<Footer />
		</div>
	);
}

export default Index;
