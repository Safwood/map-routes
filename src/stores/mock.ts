import type { Park } from "../utils/types";
import { LatLngExpression } from "leaflet";

export const parks: Park[] = [
  {
    id: "1",
    name: "Парк Горького",
    address: "м. Ленинский проспект",
    coords: [] as unknown as LatLngExpression,
  },
  {
    id: "2",
    name: "ВДНХ",
    address: "м. ВДНХ",
    coords: [] as unknown as LatLngExpression,
  },
  {
    id: "3",
    name: "Ботанический сад",
    address: "м. ВДНХ",
    coords: [] as unknown as LatLngExpression,
  },
  {
    id: "4",
    name: "Парк Кузьминки",
    address: "м. Кузьминки",
    coords: [] as unknown as LatLngExpression,
  },
  {
    id: "5",
    name: "Парк Царицыно",
    address: "м. Царицыно",
    coords: [] as unknown as LatLngExpression,
  },
  {
    id: "5",
    name: "Коломенский парк",
    address: "м. Коломенская",
    coords: [] as unknown as LatLngExpression,
  },
];
