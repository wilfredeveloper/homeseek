CREATE TABLE IF NOT EXISTS "houses" (
	"id" serial PRIMARY KEY NOT NULL,
	"house_name" text NOT NULL,
	"house_description" text NOT NULL,
	"house_location" text NOT NULL,
	"house_rent" integer NOT NULL,
	"caretaker_name" text NOT NULL,
	"caretaker_number" text NOT NULL,
	"is_water_in_rent" boolean NOT NULL,
	"is_electricity_in_rent" boolean NOT NULL,
	"vacant_houses" integer NOT NULL,
	"image_url" text
);
