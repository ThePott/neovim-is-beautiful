import InputBox from "../shared/components/InputBox"
import NeutralButton from "../shared/components/NeutralButton"

const MainPage = () => {
  return (
    <div>
      <p>Main Page</p>
      <InputBox placeholder="plugin name" />
      <InputBox placeholder="repo url" />
      <NeutralButton label="버튼 이름 아무거나" />
    </div>
  )
}

export default MainPage