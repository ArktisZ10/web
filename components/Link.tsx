import { Link, LinkProps } from "aleph/react";
import { External } from "~/assets/icons.tsx";

const commonStyle = 'text-lightblue-400 hover:text-lightblue-600 underline hover:no-underline '

export function InternalLink({children, ...props}: Omit<LinkProps, 'className'>) {
    return <Link {...props} className={commonStyle}>
        {children}
    </Link>
}

export function ExternalLink({children, ...props}: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'target'>) {
    return <a {...props} target="_blank" className={commonStyle + 'flex items-center justify-center gap-px'}>
        {children}
        <External className="w-4 h-4 mr-1 stroke-current fill-transparent" />
    </a>
}