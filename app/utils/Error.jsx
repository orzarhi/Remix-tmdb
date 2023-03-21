import { FaExclamationCircle } from "react-icons/fa";

export const Error = ({ title, children }) => {
	return (
		<div className="grid justify-center text-white mt-10">
			<div className="flex justify-center text-2xl">
				<FaExclamationCircle />
			</div>
			<h2>{title}</h2>
			{children}
		</div>
	);
};
