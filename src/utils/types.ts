import { LatLngExpression } from "leaflet";

export type Park = {
  id: string;
  name: string;
  coords: LatLngExpression;
};
