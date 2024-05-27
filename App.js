import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import Home from './pages/Home';
    import Contact from './pages/contact';

    function App() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Blog</Link>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        );
    }

    export default App;
    
