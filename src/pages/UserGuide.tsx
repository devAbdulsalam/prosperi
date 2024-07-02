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
					<h2 className="text-3xl font-semibold text-white mb-4">User Guide</h2>
					<div className="mb-4">
						<h2 className="text-2xl font-semibold text-white mb-4">
							Getting Started
						</h2>
						<ol>
							<li>
								Download and Install: Get the Prosperi app from the App Store or
								Google Play.
							</li>
							<li>
								Create an Account: Follow the prompts to set up your account and
								decentralized wallet.
							</li>
							<li>
								Secure Your Wallet: Save your seed phrase in a secure location.
								This is crucial for accessing your funds if you lose access to
								your device.
							</li>
						</ol>
					</div>
					<h2 className="text-2xl font-semibold text-white mb-4">
						Main Features
					</h2>
					<div>
						<h2 className="text-2xl font-semibold text-white mb-4">
							1. Expense and Budget Tracking
						</h2>
						<ol>
							<li>
								Download and Install: Get the Prosperi app from the App Store or
								Google Play.
							</li>
							<li>
								Create an Account: Follow the prompts to set up your account and
								decentralized wallet.
							</li>
							<li>
								Secure Your Wallet: Save your seed phrase in a secure location.
								This is crucial for accessing your funds if you lose access to
								your device.
							</li>
						</ol>
					</div>
					<div>
						<h2 className="text-2xl font-semibold text-white mb-4">
							2. Bill Payment Reminders
						</h2>
						<ol>
							<li>
								Download and Install: Get the Prosperi app from the App Store or
								Google Play.
							</li>
							<li>
								Create an Account: Follow the prompts to set up your account and
								decentralized wallet.
							</li>
							<li>
								Secure Your Wallet: Save your seed phrase in a secure location.
								This is crucial for accessing your funds if you lose access to
								your device.
							</li>
						</ol>
					</div>
				</div>
			</div>
			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
