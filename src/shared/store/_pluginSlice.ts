import type { StateCreator } from "zustand";
import type { BoundState } from "../interfaces/boundInterfaces";
import type { _NvimPluginSlice } from "../interfaces";

export const createPluginSlice: StateCreator<BoundState, [], [], _NvimPluginSlice> = (set) => ({
    // nvimPluginDict: {},
    // setNvimPluginDict(nvimPluginDict) { set({ nvimPluginDict }) },
    nvimPluginArray: [],
    setNevimPluginArray(nvimPluginArray) { set({ nvimPluginArray }) },
})