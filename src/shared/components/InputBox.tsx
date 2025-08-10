import { styleClassName } from "../constants/style"

const InputBox = (props: any) => {
  return (
    <input type="text" {...props} className={`block border-1 outline-0 py-2 px-3 ${styleClassName.rounded} ${styleClassName.borderMuted}`} />
  )
}

export default InputBox