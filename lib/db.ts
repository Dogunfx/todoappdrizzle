import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const sql = neon(process.env.DATABASE_URL!);
export const drizzleDbClient = drizzle({ client: sql });
export const drizzleDb = drizzle(process.env.DATABASE_URL!);
