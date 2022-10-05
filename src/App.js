import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories'



function App() {

    const [menuItems, setMenuItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("all")

    useEffect(() => {
        fetch("http://localhost:8001/items")
            .then((resp) => resp.json())
            .then((data) => {
                setMenuItems(data);
                setCategories(['all', ...new Set(data.map((item) => item.category))])
            });
    }, [])


    const filterItems = (category) => {
        setCurrentCategory(category)
    };
    const filteredItems = currentCategory === 'all' ? [...menuItems] : menuItems.filter((item) => item.category === currentCategory);

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Jiko Cafe' Menu</h2>

                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={filteredItems} />
            </section>
        </main>
    );
}

export default App;
