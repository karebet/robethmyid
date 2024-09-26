import Link from "next/link";
export default function _nav() {
    return (
        <div>
            <div className="navbar navbar-expand-lg shadow fixed-top bg-white rounded" >
                <div className="container ">
                    <div className="order-lg-1">
                        <button className="btn d-none">
                            <i className="fal fa-moon"></i>
                        </button>
                    </div>
                    <button className="navbar-toggler order-lg-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse order-lg-0" id="navbarsExample11">
                        <span className="navbar-brand col-lg-3 me-0"></span>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link " href="/">Tentang Saya</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="#allportofolio">Portofolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="#footer">Hubungi Saya</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

