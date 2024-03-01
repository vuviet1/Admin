import React, {useEffect} from 'react';
import Header from "../../components/header";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";

function Order() {

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
                            <h1 className="mt-4">Quản lý thông tin đơn hàng</h1>
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
                                                <i className="fa-solid fa-receipt" />
                                                Đơn hàng
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary add-payment"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#add_order"
                                                >
                                                    <i className="fa-solid fa-plus" />
                                                    Thêm đơn hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>Tên khách hàng</th>
                                                <th>Số điện thoại</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Sdghb</td>
                                                <td>111111111</td>
                                                <td>Chờ duyệt</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-info"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#details_order"
                                                    >
                                                        <i
                                                            className="fa-solid fa-circle-info"
                                                            style={{ color: "white" }}
                                                        />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit_order"
                                                    >
                                                        <i className="fa-regular fa-pen-to-square" />
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Bdsf</td>
                                                <td>222222222</td>
                                                <td>Chờ duyệt</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-info"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#details_order"
                                                    >
                                                        <i
                                                            className="fa-solid fa-circle-info"
                                                            style={{ color: "white" }}
                                                        />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit_order"
                                                    >
                                                        <i className="fa-regular fa-pen-to-square" />
                                                    </button>
                                                    <button className="btn btn-danger">
                                                        <i className="fa-solid fa-trash" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cetrg</td>
                                                <td>33333333333</td>
                                                <td>Chờ duyệt</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-info"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#details_order"
                                                    >
                                                        <i
                                                            className="fa-solid fa-circle-info"
                                                            style={{ color: "white" }}
                                                        />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit_order"
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

                <div
                    className="modal fade"
                    id="edit_order"
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
                                    Cập nhật thông tin đơn hàng
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <input type="hidden" id="id_order_edit" />
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Tên khách hàng
                                    </label>
                                    <input type="text" className="form-control" id="phone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name_em_edit" className="form-label">
                                        Địa chỉ nhận hàng
                                    </label>
                                    <input type="text" className="form-control" id="name_em_edit" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cate" className="form-label">
                                        Số điện thoại
                                    </label>
                                    <input type="text" className="form-control" id="cate" />
                                </div>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected="">Trạng thái</option>
                                    <option value={1}>Chờ duyệt</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
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

                <>
                    <div
                        className="modal fade"
                        id="add_order"
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
                                        Thêm đơn hàng mới
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <input type="hidden" id="id_order_add" />
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">
                                            Tên khách hàng
                                        </label>
                                        <input type="text" className="form-control" id="phone1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name_em_edit" className="form-label">
                                            Địa chỉ nhận hàng
                                        </label>
                                        <input type="text" className="form-control" id="name_em_edit1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cate" className="form-label">
                                            Số điện thoại
                                        </label>
                                        <input type="text" className="form-control" id="cate1" />
                                    </div>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">Trạng thái</option>
                                        <option value={1}>Chờ duyệt</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
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
                    <div
                        className="modal fade"
                        id="details_order"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="detailsBackdropLabel">
                                        Thông tin chi tiết
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <input type="hidden" id="id_order_add" />
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">
                                            Tên khách hàng
                                        </label>
                                        <input type="text" className="form-control" id="phone1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name_em_edit" className="form-label">
                                            Địa chỉ nhận hàng
                                        </label>
                                        <input type="text" className="form-control" id="name_em_edit1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cate" className="form-label">
                                            Số điện thoại
                                        </label>
                                        <input type="text" className="form-control" id="cate1" />
                                    </div>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">Trạng thái</option>
                                        <option value={1}>Chờ duyệt</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Hủy bỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                {/*Modal*/}
            </div>
        </div>
    );
}

export default Order;
