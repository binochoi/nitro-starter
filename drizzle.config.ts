import { defineConfig } from 'drizzle-kit';
import { useBuildtimeConfig } from '~/config';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/database/schema',
  out: './.cache/.migrations',
  breakpoints: true,
  dbCredentials: {
    url: useBuildtimeConfig().db.connectionString,
  },
});
