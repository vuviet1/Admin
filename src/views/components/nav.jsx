import React from "react";

class Navbar extends React.Component {

render() {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav
                    className="sb-sidenav accordion sb-sidenav-dark"
                    id="sidenavAccordion"
                >
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <a className="nav-link" href="/">
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                Bảng điều khiển
                            </a>
                            <div className="sb-sidenav-menu-heading">Quản lý</div>
                            <a className="nav-link" href="/employee">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-regular fa-address-card"></i>
                                </div>
                                Quản lý nhân viên
                            </a>
                            <a className="nav-link" href="/customer">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-users"></i>
                                </div>
                                Quản lý khách hàng
                            </a>
                            <a className="nav-link" href="/category">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-layer-group"></i>
                                </div>
                                Quản lý danh mục
                            </a>
                            <a className="nav-link" href="/book">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-solid fa-book-open"></i>
                                </div>
                                Quản lý sách
                            </a>
                            <a className="nav-link" href="/order">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-regular fa-calendar-check"></i>
                                </div>
                                Quản lý đơn hàng
                            </a>
                            <a className="nav-link" href="/payment">
                                <div className="sb-nav-link-icon">
                                    <i className="fa-brands fa-paypal"></i>
                                </div>
                                Quản lý PTTT
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
}

export default Navbar;