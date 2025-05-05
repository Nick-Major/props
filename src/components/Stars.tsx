import Star from "./Star";

type StarsProps = {
    count: 0 | 1 | 2 | 3 | 4 | 5;
}

const Stars = ({count = 0} : StarsProps) => {
    if (typeof count !== 'number' || count <= 0 || count > 5) return;

    return (
        <ul className="card-body-stars">
            <Star
                className="star"
                fill="#D3BCA2"
                height="28"
                viewBox="0 0 18 18"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
            ></Star>    
        </ul>
    );
};

export default Stars;