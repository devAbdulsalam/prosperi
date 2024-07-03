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
					<h2 className="text-xl md:text-3xl font-semibold  mb-4">Blog</h2>
					<motion.h3
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}}
						className="text-2xl font-semibold mb-4 text-[#007BFF]"
					>
						Insights and Updates
					</motion.h3>
				</div>
				<div className="flex-1">
					<div className="py-4">
						<h2 className="text-lg md:text-2xl font-semibold text-white mb-4">
							Stay updated
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
							Stay informed with the latest news, insights, and updates from
							Prosperi. Our blog covers a range of topics, including financial
							management tips, blockchain technology, user success stories, and
							company announcements. Subscribe to our newsletter to never miss
							an update.
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
