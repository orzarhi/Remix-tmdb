import { Form, NavLink, useLoaderData } from "@remix-run/react";

export const Header = () => {
	const userId = useLoaderData();
	return (
		<header>
			<nav className="bg-neutral-900 border-white-500 px-4 py-2.5 mb-10">
				{userId && (
					<ul className="flex justify-start max-w-screen-xl p-5 ml-5 text-white font-comic">
						<li className="ml-2">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="ml-8">
							<NavLink to="/popular-tv-shows/1">
								Popular Tv Shows
							</NavLink>
						</li>
						<li className="ml-8">
							<NavLink to="/popular-movie/1">
								Popular Movies
							</NavLink>
						</li>
						<li className="ml-8">
							<NavLink to="/">My Notes</NavLink>
						</li>
						<li className="ml-8">
							<NavLink to="/">My Notes</NavLink>
						</li>
						<li className="ml-8">
							<NavLink to="/">My Notes</NavLink>
						</li>

						<li className="absolute right-0 mr-10">
							<Form method="post" action="logout">
								<button>Logout</button>
							</Form>
						</li>
					</ul>
				)}
			</nav>
		</header>
	);
};
