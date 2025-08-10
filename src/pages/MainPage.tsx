import GridCardForPlugin from "../features/plugin/GridCardForPlugin"
import InputBox from "../shared/components/InputBox"
import NeutralButton from "../shared/components/NeutralButton"
import { styleClassName } from "../shared/constants/style"
import { useGetAndSetAllNvimPlugins } from "../shared/service/apiHandler"

const MainPage = () => {
  const { getAndSetAllNvimPlugins } = useGetAndSetAllNvimPlugins()

  return (
    <div className={styleClassName.flexCol}>
      <p>Main Page</p>

      <div className={styleClassName.groupByBorder}>
        <InputBox placeholder="plugin name" />
        <InputBox placeholder="repo url" />
        <NeutralButton label="POST" />
      </div>

      <div className={styleClassName.groupByBorder}>
        <NeutralButton label="GET" onClick={getAndSetAllNvimPlugins} />
      </div>

      <GridCardForPlugin />

    </div>
  )
}

export default MainPage