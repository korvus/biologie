// import logo from './logo.svg';
import './style/App.css';
import pages, { PageContext } from './context.js';
import { useContext } from 'react';

// import reducer from './reducer.js';
function Menu() {
    
    const { setPageindex } = useContext(PageContext);

    return (
        <div className="menu">
            {pages.map((name, i) => (
                <span key={i} onClick={() => setPageindex(i)}>
                    {name.label}
                </span>
            ))}
        </div>
    );
}

export default Menu;
