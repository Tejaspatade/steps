import React, { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const [step, setStep] = useState(3);
	const [isOpen, setIsOpen] = useState(true);

	const handlePrevious = () => {
		if (step > 1) setStep((s) => s - 1);
	};
	const handleNext = () => {
		if (step < 3) setStep((s) => s + 1);
	};

	return (
		<>
			<button className="close" onClick={() => setIsOpen((o) => !o)}>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>

					<p className="message">
						Step {step}: {messages[step - 1]}
					</p>

					<div className="buttons">
						<Button
							textColor="#fff"
							bgColor="#7950f2"
							text="Previous"
							onClick={handlePrevious}
						>
							👈🏼 Previous
						</Button>
						<Button
							textColor="#fff"
							bgColor="#7950f2"
							text="Next"
							onClick={handleNext}
						>
							Next 👉🏼
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

function Button({ textColor, bgColor, onClick, children }) {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: bgColor,
				color: textColor,
			}}
		>
			{children}
		</button>
	);
}
