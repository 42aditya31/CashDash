import { seedTransactions } from "@/action/seed";

export async function GET() {
  const result = await seedTransactions();
  return Response.json(result);
}