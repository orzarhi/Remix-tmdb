import { Outlet } from "@remix-run/react";
import { Header } from "~/components/header";
import { getUserFromSession } from "~/services/cookiesService";

export default function HomeLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export const loader = ({ request }) => {
	return getUserFromSession(request);
};
