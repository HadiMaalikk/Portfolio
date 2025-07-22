import { Link } from "react-router-dom"
import React from "react";

interface BentoProps {
    title : string;
    to : string;
    children? : React.ReactNode;
    className?: string;
}

const Bento: React.FC<BentoProps>= ({ title, to, children, className = " " }) => {
  return (
    <div className={className}>
        <Link 
        to={to}
        className="hover:text-white transition-colors duration-300"
        >
        {title}
        </Link>
        {children}
        </div>
  )
}

export default Bento