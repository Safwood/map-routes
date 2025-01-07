import { defineStore } from "pinia";
import { parks } from "./mock";
import type { Park } from "@/utils/types";

type MapItemsState = {
  parks: Park[];
};

export const useMapItemsStore = defineStore({
  id: "mapItems",
  state: (): MapItemsState => ({
    parks: parks,
  }),
  actions: {
    addPark(park: Park) {
      this.parks.push(park);
    },
  },
});
