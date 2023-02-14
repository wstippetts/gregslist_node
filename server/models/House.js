import { Schema } from "mongoose";

export const HouseSchema = new Schema(
  {
    address: { type: String, required: true, maxLength: 75 },
    floors: { type: Number },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    price: { type: Number },
    imgUrl: { type: String },
    year: { type: Number },
    description: { type: String, maxLength: 500 },
    squarefeet: { type: Number }

  }
)