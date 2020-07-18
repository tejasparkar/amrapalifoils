import React from 'react'
import {NavLink, Link ,withRouter } from 'react-router-dom';
const Navbar=(props)=> {
    return (
        <div>
            <header>
                <div class="header-area ">
                    <div class="header-top black-bg d-none d-md-block">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-md-6 col-lg-6">
                                    <div class="header-contact">
                                        <a href="#"><i class="fa fa-phone"></i> +880 256 356 256</a>
                                        <a href="#"><i class="fa fa-envelope"></i> support24@durg.com</a>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-lg-6">
                                    <div class="header-top-menu">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-header" class="main-header-area white-bg">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-2 col-lg-2">
                                    <div class="logo-img">
                                        <Link to="/">
                                            <img style={{height:"90px"}} src="img/logo.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-7">
                                    <div class="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><NavLink to="/About">About</NavLink></li>
                                                <li><NavLink to="/Product">Products</NavLink></li>
                                                <li><NavLink to="/Contact">Contact</NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3">
                                    <div class="quote-area">
                                        <div class="search-bar">
                                            <a id="search_1" href="javascript:void(0)"><i class="fa fa-search"></i></a>
                                        </div>
                                        <div class="get-quote d-none d-lg-block">
                                            <a class="boxed-btn" href="#">Get a quote</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                            <div class="search_input" id="search_input_box">
                                <div class="container ">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default withRouter(Navbar)