import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            {match && "< "}
            <Link
                style={{ textDecoration: match ? 'underline' : 'none' }}
                className={match ? 'text-secondary' : 'text-white'}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " />"}
        </div>
    );
};

export default CustomLink;