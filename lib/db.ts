import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const drizzleDb = drizzle(process.env.DATABASE_URL!);
