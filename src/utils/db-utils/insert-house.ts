import { db } from "@/db";
import { houses } from "@/db/schema";

export interface HouseData {
    houseName: string;
    houseDescription: string;
    houseLocation: string;
    houseRent: number;
    caretakerName: string;
    caretakerNumber: string;
    inclusiveWaterBill: boolean;
    inclusiveElectricityBill: boolean;
    vacantHouses: number;
    imageURL: string;
}

export default async function InsertHouseToDb(data: HouseData) {

    // Destrucuture the data
    const houseName = data.houseName;
    const houseDescription = data.houseDescription;
    const houseLocation = data.houseLocation;
    const houseRent = data.houseRent;
    const caretakerName = data.caretakerName;
    const caretakerNumber = data.caretakerNumber;
    const inclusiveWaterBill = data.inclusiveWaterBill;
    const inclusiveElectricityBill = data.inclusiveElectricityBill;
    const vacantHouses = data.vacantHouses;
    // const imageURL = data.imageURL;

    // insert to db
    await db.insert(houses).values({
        houseName,
        houseDescription,
        houseLocation,
        houseRent,
        caretakerName,
        caretakerNumber,
        inclusiveWaterBill,
        inclusiveElectricityBill,
        vacantHouses,
    })

}