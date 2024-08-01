const Food = (props) => {
    const food = props.food;
    return (
        <li className={`food ${!food.stock ? "sold-out" : ""}`}>
            <img src={food.photo} alt={food.name} loading="lazy" />
            <div>
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <span>{food.stock ? food.price : "habis"}</span>
            </div>
        </li>
    );
};

export default Food;
