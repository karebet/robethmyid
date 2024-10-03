import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect,useState } from "react";
export default function _portfolio({data=[]}) {
    const [showall, setShowall] = useState(false);
    const limitview= 5;
    const remaining= data.length - limitview;
    return (
        <section id="allportofolio" className="container mb-5 pb-5" >
            <span className="h1 mb-0 d-inline-block">{data.length} </span><span className=" fw-300">Portofolio</span>
            {
                data.map((x,i)=>(
                    <Link key={i} className={x.bg+' '+x.tx +' '+(limitview<i && showall==false?'  d-none ':' ')+' d-block shadow project-item  rounded-5 mb-5 px-5 text-decoration-none'} target="_blank" href={x.url}>
                        <span className="row position-relative py-4">
                            <span className="col-md-7">
                                <h2 className="h3 mb-0">{x.title}</h2>
                                <span className=" fw-300">{x.subtitle}</span>
                            </span>
                            <span className="col-md-5 text-md-end">
                                <span className="fst-italic d-block">{x.time}</span>
                                <span className=" fw-300"><i className="fal fa-map-marker"></i> {x.location}</span>
                            </span>
                        </span>
                        
                        <span className="row">
                            <span className="col-md-12 img-rounded-project-area">
                                <Image sizes="100vw" width={0} height={0} className="w-100 img-rounded-project" src={x.img} alt={x.title} />
                            </span>
                        </span>
                    </Link>
                ))
            }

            <div className="text-center row justify-content-center">
                {
                    showall?
                    "":
                    <div className="col-md-5"><div className="px-5"><span className="btn btn-outline-dark rounded-pill px-5 w-100 w-md-auto mb-5 btn-lg shadow" onClick={() => setShowall(true)}> Lihat {remaining} lainnya</span></div></div>
                }
            </div>
        </section>
    );
}

