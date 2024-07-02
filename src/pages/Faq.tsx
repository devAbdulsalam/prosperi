import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import ArrowUp from '../components/ArrowUp';

const Index = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<Faq />
			{/* <div>
				<div>
					Frequently asked questions Can’t find the answer you’re looking for?
					Reach out to our customer support team.
				</div>
				<div></div>
			</div> */}
			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
