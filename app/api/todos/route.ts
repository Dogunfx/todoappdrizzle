// app/api/todos/route.ts
import { drizzleDb } from "../../../lib/db";
import { todos } from "../../../lib/schema";

export async function GET() {
  try {
    const result = await drizzleDb.select().from(todos);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch todos" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  const { title, description } = await request.json();

  try {
    await drizzleDb.insert(todos).values({ title, description, completed: 0 });
    return new Response(JSON.stringify({ message: "Todo created" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create todo" }), {
      status: 500,
    });
  }
}
