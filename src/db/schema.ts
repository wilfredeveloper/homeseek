import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { url } from 'inspector';

export const houses= pgTable('houses',{
  id:serial('id').primaryKey(),
  houseName:text('house_name').notNull(),
  houseDescription:text('house_description').notNull(),
  houseLocation:text('house_location').notNull(),
  houseRent:integer('house_rent').notNull(),
  caretakerName:text('caretaker_name').notNull(),
  caretakerNumber:text('caretaker_number').notNull(),
  inclusiveWaterBill: boolean("is_water_in_rent").notNull(),
  inclusiveElectricityBill: boolean('is_electricity_in_rent').notNull(),
  vacantHouses:integer('vacant_houses').notNull(),
  imageURL:text('image_url')
})


