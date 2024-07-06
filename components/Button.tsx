import { Link, LinkProps } from "aleph/react";


export function NavButton({children, ...props}: Omit<LinkProps, "className">) {
    const baseStyle = "flex items-center justify-center w-60 h-12 border border-slate-300 hover:border-slate-600 rounded-3xl mt-3"
    const transitionStyle = "transition ease-in duration-300 hover:translate-y-1 hover:scale-110"

    return <Link {...props} className={[baseStyle, transitionStyle].join(" ")} >
        {children}
    </Link>
}

export function IconButton() {

}