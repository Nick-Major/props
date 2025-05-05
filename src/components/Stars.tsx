import Star from "./Star";

type StarsProps = {
    count: 0 | 1 | 2 | 3 | 4 | 5;
}

const Stars = ({count = 0} : StarsProps) => {
    if (typeof count !== 'number' || count <= 0 || count > 5) return null;

    return (
        <ul className="card-body-stars">
            {[...Array(count)].map((_, index) => (
                <Star
                    key={index}
                    className="star"
                    fill="#D3BCA2"
                    height="28"
                    viewBox="0 0 18 18"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                />
            ))}    
        </ul>
    );
};

export default Stars;