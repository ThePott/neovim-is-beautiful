import { styleClassName } from "../constants/style"

/** cosnt {label, ...rest} = props */
const NeutralButton = (props: any) => {
    const { label, ...rest } = props
    return (
        <>
            <button {...rest} className={`${styleClassName.button}`}>{label}</button>
        </>
    )
}

export default NeutralButton