import { pgTable, text, timestamp, serial } from 'drizzle-orm/pg-core';

/**
 * 쓰여질 제목 queue
 */
export const title = pgTable('titles', {
  id: serial().primaryKey(),
  title: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow()
});
