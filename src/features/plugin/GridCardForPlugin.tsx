import NvimPluginCard from '../../shared/components/NvimPluginCard'
import { styleClassName } from '../../shared/constants/style'
import { useBoundStore } from '../../shared/store'

/** 나중에 일반화할 땐 이런 식으로 써야할 수도 있음 */
// type CardFor = "NVIM_PLUGIN"
// { cardFor }: { cardFor: CardFor }
// ----- nono. 조건부 후크는 불가능하므로 후크가 필요한 컴포넌트는 features로 빼낸다.

const GridCardForPlugin = () => {
    const nvimPluginArray = useBoundStore((state) => state.nvimPluginArray)
    return (
        <div className={styleClassName.gridCard}>
            {nvimPluginArray.map((nvimPlugin) => <NvimPluginCard key={nvimPlugin.nvim_plugin_id} nvimPlugin={nvimPlugin} />)}
        </div>
    )
}

export default GridCardForPlugin