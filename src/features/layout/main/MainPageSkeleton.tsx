import Skeleton from "../../../shared/components/Skeleton"
import MainPageLayout from "./MainPageLayout"

const MainPageSkeleton = () => {
  return (
    <MainPageLayout skeleton>

      <MainPageLayout.Header>
        <Skeleton skeletonVariant="shortText" fontVariant="base" />
      </MainPageLayout.Header>

      <MainPageLayout.Section>
        <Skeleton skeletonVariant="box" heightInPixel={176} />
      </MainPageLayout.Section>

      <MainPageLayout.Section>
        <Skeleton skeletonVariant="box" heightInPixel={68} />
      </MainPageLayout.Section>

      <MainPageLayout.Grid>
        <Skeleton skeletonVariant="box" heightInPixel={300} />
        <Skeleton skeletonVariant="box" heightInPixel={300} />
        <Skeleton skeletonVariant="box" heightInPixel={300} />
        <Skeleton skeletonVariant="box" heightInPixel={300} />
        <Skeleton skeletonVariant="box" heightInPixel={300} />
        <Skeleton skeletonVariant="box" heightInPixel={300} />
        <Skeleton skeletonVariant="box" heightInPixel={300} />
      </MainPageLayout.Grid>

    </MainPageLayout>
  )
}

export default MainPageSkeleton