import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const transactionsPath = path.join(process.cwd(), "src", "transactions.json");

  try {
    const json = await fs.promises.readFile(transactionsPath, "utf-8");
    return NextResponse.json(json);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error reading transactions file:", error);
    }
    return NextResponse.json(
      { message: "Erro ao carregar transações" },
      { status: 500 }
    );
  }
}
