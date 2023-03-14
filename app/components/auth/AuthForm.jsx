import {
	Form,
	Link,
	useActionData,
	useNavigation,
	useSearchParams,
} from "@remix-run/react";

export const AuthForm = () => {
	const title = "Welcome.";

	const [searchParams] = useSearchParams();
	const navigation = useNavigation();
	const validationErrors = useActionData();

	const authMode = searchParams.get("mode") || "login";

	const submitBtnCaption = authMode === "login" ? "Login" : "Create User";
	const toggleBtnCaption =
		authMode === "login"
			? "Create a new user"
			: "Log in with existing user";

	const isSubmitting = navigation.state !== "idle";

	return (
		<div className="flex flex-col items-center min-h-screen p-5 pt-6 mx-auto font-comic sm:justify-center sm:pt-0 sm:w-full">
			<h2 className="mb-12 text-6xl font-extrabold text-center text-rose-200 ">
				{title.split("").map((letter, index) => (
					<span
						key={index}
						className="text-pink-200 cursor-pointer hover:text-rose-900"
					>
						{letter}
					</span>
				))}
			</h2>

			<Form method="post" className="w-2/5">
				<div className="mb-4">
					<label className="block mb-1 text-white">
						Email-Address
					</label>
					<input
						id="email"
						type="text"
						name="email"
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:bg-gray-100"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block mb-1 text-white">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						minLength={7}
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:bg-gray-100"
						required
					/>
				</div>
				<div className="flex items-center justify-between mt-6">
					<div className="flex items-center">
						<input
							id="remember_me"
							type="checkbox"
							className="text-red-600 border border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
						/>

						<label className="block ml-2 text-sm leading-5 text-slate-400">
							Remember me
						</label>
					</div>
					<Link to={"/"} className="text-sm text-white">
						Forgot your password?
					</Link>
				</div>
				{validationErrors && (
					<ul className="flex justify-center m-5 text-xl text-white underline decoration-red-600 hover:delay-150 hover:text-red-600 hover:decoration-white ">
						{Object.values(validationErrors).map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
				)}
				<div className="mt-6">
					<button
						className="inline-flex items-center justify-center w-full px-4 py-2 font-semibold text-white capitalize transition bg-red-600 border border-transparent rounded-md hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Authenticating..." : submitBtnCaption}
					</button>
				</div>
				<div className="mt-6 text-center">
					<Link
						className="text-white underline"
						to={
							authMode === "login"
								? "?mode=signup"
								: "?mode=login"
						}
					>
						{toggleBtnCaption}
					</Link>
				</div>
			</Form>
		</div>
	);
};
