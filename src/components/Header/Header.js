import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import '../styles/index.css';

function Header() {
    return (
        <div>
            <header>
                <h1></h1>
            </header>
            <nav>
                <BrowserRouter>
                    <Link to="/">
                    </Link>
                    <Switch>
                        <Route path="/" />
                    </Switch>
                    <Link to="/new-contact">
                    </Link>
                    <Switch>
                        <Route path="/new-contact" />
                    </Switch>  
                </BrowserRouter>
                
            </nav>
        </div>
    )
}