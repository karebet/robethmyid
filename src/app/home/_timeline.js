export default function _timeline({data=[]}) {
    return (
        <div>
            {data.map((x) => (
                    <div className="row scale-hover position-relative py-4">
                        <div className="col-md-4 lh-1">
                            <span className="h1 mb-0 d-inline-block">{x.hitung_tahun==0?x.tahun:(new Date().getFullYear()-x.hitung_tahun)} </span>
                            <span className=" fw-300">tahun</span>
                            <span className="d-block">{x.sebagai}</span>
                        </div>
                        <div className="col-md-8 lh-1">
                            <p className="fw-bold">{x.location}</p>
                            <p className="mb-0">{x.textdesc}</p>
                            <p>{x.time}</p>
                        </div>
                    </div>
            ))}
        </div>
    );
}



