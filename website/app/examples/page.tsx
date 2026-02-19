import Examples from "@/sections/examples";
import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: {
		canonical: "https://chrono-select.vukasin.me/examples",
	},
};

const Page = ({ searchParams: { i } }: { searchParams: { i?: string } }) => {
	return (
		<main>
			<Examples exampleIdx={Number(i)} />
		</main>
	);
};

export default Page;
