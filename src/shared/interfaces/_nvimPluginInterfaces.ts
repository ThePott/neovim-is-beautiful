/** MUST FOLLOW TYPE FROM DATABASE */
export interface NvimPlugin {
  nvim_plugin_id: number
  nvim_plugin_name: string
  nvim_plugin_repo_url: string
}

/** pluginId: Plugin */
// export type NvimPluginDict = Record<number, NvimPlugin>

export interface _NvimPluginSlice {
  /** 1. 변화 추적을 해야 할 때, 2. 중복을 제거해야 할 때만 Dict를 쓴다 */
  // nvimPluginDict: NvimPluginDict
  // setNvimPluginDict: (nvimPluginDict: NvimPluginDict) => void

  nvimPluginArray: NvimPlugin[]
  setNevimPluginArray: (nvimPluginArray: NvimPlugin[]) => void
}
