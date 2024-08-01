import foodList from "../data/foods.json";
import Food from "./Food";

const Menu = () => {
    const foods = foodList;
    const numFood = foods.length;
    return (
        <main className="menu">
            <h2>Menu Kami</h2>
            <>
                <p>
                    Aneka makanan Indonesia yang disajikan oleh Warung Pak ABC
                    sebagai pemenuhan makanan kesehatan yang diperlukan dalam
                    kehidupan sehari-hari.
                </p>
                {numFood > 0 ? (
                    <ul className="foods">
                        {foods.map((food, index) => (
                            <Food food={food} key={index} />
                        ))}
                    </ul>
                ) : (
                    <p>
                        Menu hari ini tidak tersedia, silahkan datang lagi esok.
                    </p>
                )}
            </>
        </main>
    );
};

export default Menu;
