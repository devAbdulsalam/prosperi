import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';

const Index = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<div className="py-10 text-white">
				<div className="py-10 container mx-auto">
					<h2 className="text-3xl font-semibold text-white mb-4">Licence</h2>
					<h3 className="text-2xl font-semibold text-white mb-4">
						Proprietary Software License
					</h3>
					<p>
						Prosperi is licensed under a proprietary software license. Users can
						download and use the app, but the source code and intellectual
						property rights are retained by Prosperi
					</p>
				</div>
			</div>
			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
