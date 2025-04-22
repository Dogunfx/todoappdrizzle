import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

// Define a Todo table using Drizzle
export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  completed: integer("completed"),
});
