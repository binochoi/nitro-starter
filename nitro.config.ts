import { fileURLToPath } from "url";
import cfBinding from "nitro-cloudflare-dev";

//https://nitro.unjs.io/config
export default defineNitroConfig({
	compatibilityDate: "2025-03-05",
	modules: [cfBinding],
	srcDir: "src",
	preset: "cloudflare_module",
	minify: true,
	rollupConfig: {
		external: ["cloudflare:sockets"],
	},
	typescript: {
		tsConfig: {
			compilerOptions: {
				strict: true,
				verbatimModuleSyntax: false,
				moduleResolution: "bundler",
				paths: {
					server: [fileURLToPath(new URL("../admin/server", import.meta.url))],
				},
			},
		},
	},
	alias: {
		server: fileURLToPath(new URL("../admin/server", import.meta.url)),
	},

	logLevel: 4,
	// cloudflareDev: {
	//   configPath: './wrangler.toml',
	// },
});
