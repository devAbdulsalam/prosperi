import { motion } from 'framer-motion';
// import { useState } from 'react';

// const FAQItem = ({
// 	question,
// 	answer,
// }: {
// 	question: string;
// 	answer: string;
// }) => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<div className="border-b border-gray-50 py-4">
// 			<button
// 				className="w-full text-left focus:outline-none"
// 				onClick={() => setIsOpen(!isOpen)}
// 			>
// 				<div className="flex justify-between items-center">
// 					<span className="text-lg font-medium text-[#A2C4FE]">{question}</span>
// 					<svg
// 						className={`w-6 h-6 transform transition-transform duration-300 text-white ${
// 							isOpen ? 'rotate-180' : ''
// 						}`}
// 						fill="none"
// 						stroke="currentColor"
// 						viewBox="0 0 24 24"
// 						xmlns="http://www.w3.org/2000/svg"
// 					>
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							strokeWidth="2"
// 							d="M19 9l-7 7-7-7"
// 						></path>
// 					</svg>
// 				</div>
// 			</button>
// 			{isOpen && <div className="mt-2 text-white">{answer}</div>}
// 		</div>
// 	);
// };

const Index = () => {
	const faqData = [
		{
			question: 'What is Prosperi?',
			answer:
				'Prosperi is a financial and productivity management app integrated with the Celo blockchain to offer secure, efficient, and user-friendly tools for managing your finances.',
		},
		{
			question: 'How do I create an account?',
			answer:
				'Download the Prosperi app, open it, and follow the on-screen instructions to create a new account. You will need to set up a decentralized wallet and securely store your seed phrase.',
		},
		{
			question: 'How do I track my expenses?',
			answer:
				'Navigate to the "Expenses" section, where you can manually add transactions or sync with your bank account for automatic tracking.',
		},
		{
			question: 'What rewards does Prosperi offer?',
			answer:
				'Prosperi offers various rewards, including referral bonuses, milestone rewards, cashback offers, and gamified challenges to keep you engaged and motivated.',
		},
		{
			question: 'Is my data secure?',
			answer:
				'Yes, Prosperi uses blockchain technology and encryption protocols to ensure the security and privacy of your data.',
		},
		{
			question: 'How can I contact support?',
			answer:
				'For any inquiries or support, you can contact us at support@prosperi.app.',
		},
	];

	return (
		<div className="py-16">
			{/* <div className="max-w-2xl mx-auto p-8 rounded-lg shadow">
				<div className="text-3xl font-semibold text-white mb-4">
					<h3>Frequently asked questions</h3>
					<h3 className="text-2xl font-semibold mb-4 text-[#007BFF] mt-4">
						Can’t find the answer you’re looking for? Reach out to our customer
						support team.
					</h3>
				</div>
				{faqData.map((item, index) => (
					<FAQItem key={index} question={item.question} answer={item.answer} />
				))}
			</div> */}
			<div className="container md:max-w-6xl mx-auto flex flex-col md:flex-row p-4 md:p-8">
				<div className="flex-1 text-white">
					<h2 className="text-xl md:text-3xl font-semibold  mb-4">
						Frequently asked questions
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
						Can’t find the answer you’re looking for? Reach out to our customer
						support team.
					</motion.h3>
				</div>
				<div className="flex-1">
					{faqData.map((item, index) => (
						<div key={index} className="py-4">
							<h3 className="text-lg font-medium text-[#A2C4FE]">
								{item.question}
							</h3>
							<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.5 },
						}} className="mt-2 text-white md:text-lg">{item.answer}</motion.p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Index;
