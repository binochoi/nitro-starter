import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

/**
 * 글 디테일 목록
 */
export const article = pgTable("articles", {
	id: serial().primaryKey(),
	title: text().notNull(),
	content: text().notNull(),
	createdAt: timestamp().notNull().defaultNow(),
	updatedAt: timestamp().notNull().defaultNow(),
});
