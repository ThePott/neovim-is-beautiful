import MainPageLayout from "../features/layout/main/MainPageLayout"
import GridContentForPlugin from "../features/plugin/GridCardForPlugin"
import InputBox from "../shared/components/InputBox"
import NeutralButton from "../shared/components/NeutralButton"
import { useGetAndSetAllNvimPlugins } from "../shared/service/apiHandler"

const MainPage = () => {
  const { getAndSetAllNvimPlugins } = useGetAndSetAllNvimPlugins()

  return (
    <MainPageLayout>
      
      <MainPageLayout.Header>Main Page</MainPageLayout.Header>

      <MainPageLayout.Section>
        <InputBox placeholder="plugin name" />
        <InputBox placeholder="repo url" />
        <NeutralButton label="POST" />
      </MainPageLayout.Section>

      <MainPageLayout.Section>
        <NeutralButton label="REFRESH" onClick={getAndSetAllNvimPlugins} />
      </MainPageLayout.Section>

      <MainPageLayout.Grid>
        <GridContentForPlugin />
      </MainPageLayout.Grid>
      
    </MainPageLayout>
  )
}

export default MainPage