import React, {useEffect} from 'react';

function Login() {

    return (
        <div className="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <h3 className="text-center font-weight-light my-4">Đăng nhập</h3>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        id="inputEmail"
                                                        type="email"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="inputEmail">Email</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        id="inputPassword"
                                                        type="password"
                                                        placeholder="Mật khẩu"
                                                    />
                                                    <label htmlFor="inputPassword">Mật khẩu</label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        id="inputRememberPassword"
                                                        type="checkbox"
                                                        defaultValue=""
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="inputRememberPassword"
                                                    >
                                                        Nhớ mật khẩu
                                                    </label>
                                                </div>
                                                <div
                                                    className=" align-items-center justify-content-between mt-4 mb-0"
                                                    style={{textAlign: "center"}}
                                                >
                                                    <a
                                                        className="btn btn-primary d-grid gap-2 col-6 mx-auto btn-lg"
                                                        href="/"
                                                    >
                                                        Đăng nhập
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Login;
