import { defineConfig } from "drizzle-kit";
import { useBuildtimeConfig } from "server/config";

const config = useBuildtimeConfig();
export default defineConfig({
	dialect: "postgresql",
	schema: "./src/database/schema",
	out: "./.cache/.migrations",
	breakpoints: true,
	dbCredentials: {
		url: config.db.connectionString,
	},
});
