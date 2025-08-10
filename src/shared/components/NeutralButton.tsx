import { styleClassName } from "../constants/style"

interface AdditionalProps {
    label: string
}

type DefaultButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type NeutralButtonProps = DefaultButtonProps & AdditionalProps

const NeutralButton = (props: NeutralButtonProps) => {
    /** MUST specify const from addtional props */
    const { label, ...defaultButtonProps } = props
    return (
        <>
            <button {...defaultButtonProps} className={`${styleClassName.button}`}>{label}</button>
        </>
    )
}

export default NeutralButton