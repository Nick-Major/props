type StarProps = {
    className?: string;
    fill?: string;
    height?: number | string;
    viewBox?: string;
    width?: number | string;
    xmlns?: string;
}

const Star = ({ className, fill, height, viewBox, width, xmlns} : StarProps) => {
    return (
        <li className={className}>
            <svg 
                fill={fill} 
                height={height}
                viewBox={viewBox}
                width={width}
                xmlns={xmlns}
            >
                <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                <path d="M0 0h18v18H0z" fill="none"/>
            </svg>
        </li>
    );
};

export default Star;