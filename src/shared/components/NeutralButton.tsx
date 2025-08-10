import { styleClassName } from "../constants/style"

/** cosnt {label, ...rest} = props */
const NeutralButton = (props: any) => {
    const { label, ...rest } = props
    return (
        <>
            <button {...rest} className={`${styleClassName.button} text-amber-600`}>{label}</button>
            <button {...rest} className={`text-amber-600`}>{label}</button>
        </>
    )
}

export default NeutralButton