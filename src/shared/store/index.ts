import { create } from "zustand";
import type { BoundState } from "../interfaces/boundInterfaces";
import { createPluginSlice } from "./_pluginSlice";

export const useBoundStore = create<BoundState>()((...a) => ({
  ...createPluginSlice(...a),
}))