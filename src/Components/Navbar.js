import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import micro from '../micro.png'
const Navbar = () => {
    const [first, setfirst] = useState('light')


    const toggle = () => {
        if (first === 'light') {
            setfirst('dark')

        }
        else {
            setfirst('light')

        }
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${first === 'dark' ? 'bg-dark' : ''}`} style={first === 'dark' ? {} : {background: 'linear-gradient(to right, #667eea, #764ba2)'
}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span className='News'>News</span> <span className='World'>World</span></Link>
                    <button className="navbar-toggler text-bg-light  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
                            <li className=" nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/">Home <i class="bi bi-house-door"></i></Link>
                            </li>

                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/business">Business <i class="bi bi-briefcase"></i></Link>
                            </li>
                            <li className="nav-item">

                                <Link className=" text-light nav-link active" aria-current="page" to="/entertainment">Entertainment <i class="bi bi-tv"></i></Link>
                            </li>


                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/health">Health <i class="bi bi-heart-pulse"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/general">General <i class="bi bi-globe"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/science">Science <i class="bi bi-funnel"></i>  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/sports">Sports <i class="fas fa-basketball-ball"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-light nav-link active" aria-current="page" to="/Technology">Technology <i class="bi bi-laptop"></i></Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>

                        <button onClick={toggle} className="btn logo btn-light">
                            {
                                first === 'light' ? <i class="bi bi-moon-stars"></i> : <i class="bi bi-brightness-high" />

                            }
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
