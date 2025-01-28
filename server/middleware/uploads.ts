import serveStatic from "serve-static";
import { resolve } from "path";

export default defineEventHandler(async (event) => {
	const uploadDir = resolve("./uploads");

	if (event.node.req.url?.startsWith("/uploads")) {
		const middleware = serveStatic(uploadDir);

		return new Promise<void>((res, rej) => {
			middleware(event.node.req, event.node.res, (err?: any) => {
				if (err) rej(err);
				else res();
			});
		});
	}
});
