import Navbar from '../components/NavBar';
import Part from '../components/Part';
import Footer from '../components/Footer';
import ArrowUp from '../components/ArrowUp';
import { motion } from 'framer-motion';

const mainFeatures = [
	{
		title: 'Expense and Budget Tracking',
		items: [
			{
				text: 'Add Transactions:',
				content:
					"Go to the 'Expenses' section and add your transactions manually.",
			},
			{
				text: 'Sync Bank Accounts:',
				content: 'Link your bank accounts for automatic expense tracking.',
			},
			{
				text: 'View Reports:',
				content: 'Generate expense reports to understand your spending habits.',
			},
		],
	},
	{
		title: 'Bill Payment Reminders',
		items: [
			{
				text: 'Set Reminders:',
				content:
					"Navigate to the 'Reminders' section to set up bill payment notifications.",
			},
			{
				text: 'Get Alerts:',
				content:
					'Receive push notifications before due dates to avoid late fees.',
			},
		],
	},
	{
		title: 'Savings Planner',
		items: [
			{
				text: 'Set Goals:',
				content: "Define your savings goals in the 'Savings' section.",
			},
			{
				text: 'Track Progress:',
				content: 'Monitor your contributions and progress towards your goals.',
			},
			{
				text: 'Adjust Plans:',
				content: 'Modify your savings plans as needed to stay on track.',
			},
		],
	},
	{
		title: 'Wallet Setup and Management',
		items: [
			{
				text: 'Create Wallet:',
				content: 'Set up your Celo blockchain wallet during account creation.',
			},
			{
				text: 'Manage Funds:',
				content: 'View your wallet balance and transaction history.',
			},
			{
				text: 'Transfer Funds:',
				content: 'Easily transfer funds to other wallets or accounts.',
			},
		],
	},
	{
		title: 'Payment and Transaction Tools',
		items: [
			{
				text: 'Send and Receive Payments:',
				content:
					"Use the 'Payments' section to send and receive funds securely.",
			},
			{
				text: 'Transaction History:',
				content: 'View detailed records of all your transactions.',
			},
		],
	},
	{
		title: 'Rewards and Loyalty Programs',
		items: [
			{
				text: 'Referral Program:',
				content:
					'Share your referral code to earn bonuses when new users join.',
			},
			{
				text: 'Milestone Rewards:',
				content: 'Achieve financial milestones to unlock special rewards.',
			},
			{
				text: 'Cashback Offers:',
				content: 'Benefit from cashback deals with partnered merchants.',
			},
			{
				text: 'Gamified Challenges:',
				content:
					'Participate in challenges and earn badges for completing financial tasks.',
			},
		],
	},
];

const Index = () => {
	return (
		<div className="bg-[#06002B] min-h-screen w-full relative">
			<Navbar />
			<Part />
			<div className="container md:max-w-6xl mx-auto flex flex-col md:flex-row p-4 md:p-10 md:pt-14 gap-4">
				<div className="flex-1 text-white pt-10">
					<h2 className="text-xl md:text-3xl font-semibold  mb-4 mt-5 md:mt-0">
						User Guide
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
						Getting Started
					</motion.h3>

					<ol className="list-decimal space-y-3 ml-2 md:ml-6">
						<li>
							<span className="md:text-lg font-semibold">
								Download and Install:{' '}
							</span>
							Get the Prosperi app from the App Store or Google Play.
						</li>
						<li>
							<span className="md:text-lg font-semibold">
								Create an Account:{' '}
							</span>
							Follow the prompts to set up your account and decentralized
							wallet.
						</li>
						<li>
							<span className="md:text-lg font-semibold">
								Secure Your Wallet:{' '}
							</span>
							Save your seed phrase in a secure location. This is crucial for
							accessing your funds if you lose access to your device.
						</li>
					</ol>
				</div>
				<div className="pb-0 md:py-10 flex-1 text-white"></div>
			</div>
			<div className="container md:max-w-6xl mx-auto p-4 gap-4">
				<div className="flex-1 text-white">
					<h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
						Main Features
					</h2>
					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 pb-10 md:p-20">
						{mainFeatures.map((item, index) => (
							<div key={index} className="mb-3">
								<h2 className="text-lg md:text-xl font-semibold text-[#A2C4FE] mb-4">
									{index + 1}. {item.title}
								</h2>
								<ul className="list-disc space-y-3 ml-3 md:ml-6">
									{item?.items.map((item, index) => (
										<li key={index}>
											<span className="font-semibold">{item.text}</span>{' '}
											{item.content}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
			<ArrowUp />
			<Footer />
		</div>
	);
};

export default Index;
