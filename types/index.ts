import { MouseEventHandler } from "react";

export interface CustomBtnProps {
  title: string;
  containerStyles?: string;
  hanldeClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: 26;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
