import { PincelIcon } from '../shared/Icons'

const ContainerMenu = ({ children }) => {
    return (
        <article className="h-[80px] bg-slate-900">
            <button>
                <PincelIcon />
            </button>
            {children}
        </article>
    )
}

export default ContainerMenu