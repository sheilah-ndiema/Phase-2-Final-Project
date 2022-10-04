import React, { useState } from 'react';
//import logo from './logo.svg';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);


    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Jiko Cafe' menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;

