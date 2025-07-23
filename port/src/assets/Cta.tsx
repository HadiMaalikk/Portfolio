import {Link} from "react-router-dom";
import React from "react";
 
interface CtaProp{
        to: string;
        className?: string;
        title: string;
}

const Cta : React.FC<CtaProp> = ({to,title,className=""}) => {

    return(
    <Link
    to={to}
    className={className}
    >
    {title}
    </Link>
    )
}

export default Cta