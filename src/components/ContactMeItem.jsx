import React from "react";

export default function ContactMeItem({ data }) {
    return (
        <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200 hover:-translate-y-[2px]" href={data.href}>
                <span className="sr-only">{data.name}</span>
                {data.svg}
            </a>
        </li>
    );
}
