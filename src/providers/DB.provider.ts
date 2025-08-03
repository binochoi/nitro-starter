import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
/** biome-ignore lint/performance/noNamespaceImport: reason */
import * as schema from "server/database/schema";

export const DB = () => {
	const config = useRuntimeConfig();
	const client = postgres(config.dbConnectionString);
	return drizzle(client, { schema });
};
export { schema };
