import { useEffect, useState } from "react";
import NavIndicator from "./NavIndicator";
import { useLocation } from "react-router-dom";

export default function NavItem({ children, animateScrolling, target_id, index }) {
    const handleOnClick = () => {
        animateScrolling(`/#${target_id}`);
    };
    const classNameDefault = "group flex items-center py-3";
    const classNameActive = classNameDefault + " active";
    const [className, setClassName] = useState(index === 0 ? classNameActive : classNameDefault);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (pathname === "/" && (hash?.replace("#", "") === target_id || (!hash && index === 0))) {
            setClassName(classNameActive);
        } else {
            setClassName(classNameDefault);
        }
    }, [pathname, hash, target_id, classNameActive, index]);

    return (
        <a className={className} onClick={handleOnClick} href={`#${target_id}`}>
            <NavIndicator />
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {children}
            </span>
        </a>
    );
}
