import { Outlet } from "@remix-run/react";
import { Header } from "~/components/header";
import { getUserFromSession } from "~/services/cookiesService";

export default function HeaderLayout() {
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
