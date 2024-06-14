import InsertHouseToDb from "@/utils/db-utils/insert-house";
import { HouseData } from "@/utils/db-utils/insert-house";

export async function POST(request: Request, response: Response) {
  const data: HouseData = await request.json();

  try {
    // 1. Call the insert houses function
    await InsertHouseToDb(data);
    // 2. insert a house from the data.

    return Response.json({ message: "Inserted house successfully" });
  } catch (error) {
    console.log("Error: ", error);
    return Response.json({Error: "An error occured during house insert"})
  }
}


export async function GET() {
    return Response.json({message: "The insert houses API is up and running"})
}