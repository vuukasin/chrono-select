import { MetadataRoute } from "next";

const BASE_URL = "https://chrono-select.vukasin.me";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${BASE_URL}/examples`,
			lastModified: new Date(),
			priority: 0.8,
		},
	];
}
