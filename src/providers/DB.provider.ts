import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '~/database/schema';

export const DB = () => {
    const config = useRuntimeConfig();
    const client = postgres(config.dbConnectionString);
    return drizzle(client, { schema });
};
export { schema };
