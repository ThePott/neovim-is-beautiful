import { Outlet } from "react-router"
import { styleClassName } from "../../shared/constants/style"

const AppLayout = () => {
    return (
        <div className={`${styleClassName.fullScreen} ${styleClassName.bg} ${styleClassName.fontVivid}`}>
            <p>여기는 헤더 자리</p>
            <Outlet />
        </div>
    )
}

export default AppLayout