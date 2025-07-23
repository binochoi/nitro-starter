import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

/**
 * 작가 목록
 */
export const author = pgTable("authors", {
	id: serial().primaryKey(),
	name: text().notNull(),
	createdAt: timestamp().notNull().defaultNow(),
});
