import Image from "next/image";
import Link from "next/link";

export default function _portfolio({data=[]}) {
    return (
        <section id="allportofolio" class="container mb-5 pb-5" >
            <span class="h1 mb-0 d-inline-block">{data.length} </span><span class=" fw-300">Portofolio</span>
            {
                data.map((x,i)=>(
                    <Link class="d-block shadow project-item  rounded-5 <?= $val['bg'] ?> <?= $val['tx'] ?> mb-5 px-5 text-decoration-none" target="_blank" href="<?= $val['url'] ?>">
                        <span class="row position-relative py-4">
                            <span class="col-md-7">
                                <h2 class="h3 mb-0">{x.title}</h2>
                                <span class=" fw-300">{x.subtitle}</span>
                            </span>
                            <span class="col-md-5 text-md-end">
                                <span class="fst-italic d-block">{x.time}</span>
                                <span class=" fw-300"><i class="fal fa-map-marker"></i> {x.location}</span>
                            </span>
                        </span>
                        
                        <span class="row">
                            <span class="col-md-12 img-rounded-project-area">
                                <Image priority={true} sizes="100vw" width={0} height={0} class="w-100 img-rounded-project" src={x.img} alt={x.title} />
                            </span>
                        </span>
                    </Link>
                ))
            }
        </section>
    );
}

