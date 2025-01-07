import { LatLngExpression } from "leaflet";

export type Park = {
  id: string;
  name: string;
  address: string;
  coords: LatLngExpression;
};
