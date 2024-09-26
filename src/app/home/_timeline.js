export default function _timeline() {
    return (
        <div>
            <div className="row scale-hover position-relative py-4">
                <div className="col-md-4 lh-1">
                    <span className="h1 mb-0 d-inline-block">$val['tahun'] </span><span className=" fw-300">$val['tahun_end']</span>
                    <span className="d-block">$val['sebagai']</span>
                </div>
                <div className="col-md-8 lh-1">
                    <p className="fw-bold">$val['location']</p>
                    <p className="mb-0">$val['textdesc']</p>
                    <p>$val['time']</p>
                </div>
            </div>
        </div>
    );
}

