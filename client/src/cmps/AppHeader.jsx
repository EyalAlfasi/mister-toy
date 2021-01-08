import { NavLink } from 'react-router-dom';


export function AppHeader() {

    return (
        <header className="main-header">
            <h1 className="main-title">Mister Toy</h1>
            <nav>
                <ul>
                    <li><NavLink activeClassName="nav-active" to="/chart">Chart</NavLink></li>
                    <li><NavLink activeClassName="nav-active" to="/toy">All toys</NavLink></li>
                    <li><NavLink activeClassName="nav-active" exact to="/">Home</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}