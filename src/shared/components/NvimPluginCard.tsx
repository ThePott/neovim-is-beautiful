import { styleClassName } from '../constants/style'
import type { NvimPlugin } from '../interfaces'

const NvimPluginCard = ({ nvimPlugin }: { nvimPlugin: NvimPlugin }) => {
    return (
        <div className={styleClassName.groupByBorder}>
            <p>{nvimPlugin.nvim_plugin_name}</p>
            <p>{nvimPlugin.nvim_plugin_repo_url}</p>
        </div>
    )
}

export default NvimPluginCard