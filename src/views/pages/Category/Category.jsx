import React, {useEffect} from 'react';
import Header from "../../components/header";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";

function Category() {

    useEffect(() => {
        startTime();
    }, []);

    function startTime() {
        // Lấy Object ngày hiện tại
        const today = new Date();

        // Giờ, phút, giây hiện tại
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        // Ngày hiện tại
        const curDay = today.getDate();

        // Tháng hiện tại
        const curMonth = today.getMonth() + 1;

        // Năm hiện tại
        const curYear = today.getFullYear();

        const curDw = today.getDay();

        // Chuyển đổi sang dạng 01, 02, 03
        m = checkTime(m);
        s = checkTime(s);

        // Ghi ra trình duyệt
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.innerHTML =
                "Thứ " +
                curDw +
                ", " +
                curDay +
                "/" +
                curMonth +
                "/" +
                curYear +
                "    -   " +
                h +
                " giờ " +
                m +
                " phút " +
                s +
                " giây ";
        }

        // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
        var t = setTimeout(function () {
            startTime();
        }, 500);
    }

// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    return (
        <div className="sb-nav-fixed" onLoad={startTime}>
            <Header/>
            <div id="layoutSidenav">
                <Navbar/>
                <div id="layoutSidenav_content">

                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Quản lý danh mục</h1>
                            <div
                                className="card border-left-primary shadow h-100 py-1"
                                style={{
                                    borderLeft: "0.25rem solid orange !important",
                                    textAlign: "center",
                                    marginTop: 10
                                }}
                            >
                                <ol className="breadcrumb mb-2">
                                    <li
                                        className="breadcrumb-item active"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginLeft: 10
                                        }}
                                    >
                                        <div>Bảng điều khiển</div>
                                        <div />
                                        <div style={{ marginLeft: 750 }}>
                                            <div id="current-time" />
                                            <div>
                                                <div id="timer" />
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <div style={{ marginTop: 10 }} />
                            <main>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ marginTop: 5 }}>
                                                <i className="fa-solid fa-table-list" />
                                                Danh mục
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary add-payment"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#addcategory"
                                                >
                                                    <i className="fa-solid fa-plus" />
                                                    Thêm danh mục
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên danh mục</th>
                                                <th>Hành động</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Văn học</td>
                                                <td>
                                                    {/* Button trigger modal */}
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editcategory"
                                                    >
                                                        <i className="fa-regular fa-pen-to-square" />
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Kinh tế</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editcategory"
                                                    >
                                                        <i className="fa-regular fa-pen-to-square" />
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Giáo khoa</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editcategory"
                                                    >
                                                        <i className="fa-regular fa-pen-to-square" />
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </main>

                    <Footer/>
                </div>

                {/*Modal*/}
                <>
                    <div
                        className="modal fade"
                        id="editcategory"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="editBackdropLabel">
                                        Cập nhật danh mục
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <input type="hidden" id="id_pay_edit" />
                                    <div className="mb-3">
                                        <label htmlFor="name_pay_edit" className="form-label">
                                            Tên danh mục
                                        </label>
                                        <input type="text" className="form-control" id="name_pay_edit" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Hủy bỏ
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="modal fade"
                        id="addcategory"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="addBackdropLabel">
                                        Thêm danh mục
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <input type="hidden" id="id_pay_add" />
                                    <div className="mb-3">
                                        <label htmlFor="name_pay_add" className="form-label">
                                            Tên danh mục mới
                                        </label>
                                        <input type="text" className="form-control" id="name_pay_add" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Hủy bỏ
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Thêm mới
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            {/*    Modal*/}
            </div>
        </div>
    );
}

export default Category;