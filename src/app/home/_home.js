'use client'
import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/component/_nav"
import Timeline from "@/app/home/_timeline"
import Skill from "@/app/home/_skill"

import { useRef, useEffect,useState } from "react";
import { datarobeth } from "@/app/lib/data";

export default function _home({ data }) {
  const databs= data;
  const ref_hoverDiv = useRef(null);
  const ref_hoverDiv2 = useRef(null);
  let text = '';
  text = databs.text;
  
  const [loaded, setLoaded] = useState(false);
  const [typingfinish, setTypingfinish] = useState(false);
  
  let index = 0;
  

  
  function type() {
      const typingSpeed =10; 
      const typingElement = document.getElementById('typing');
      if (index < text.length) {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = text.substring(0, index + 1);
          typingElement.innerHTML = tempElement.innerHTML;
          index++;
          setTimeout(type, typingSpeed);
      }

      if(index==text.length){
        setTypingfinish(true)
      }

  }


  useEffect(() => {
    

    const circle = document.querySelector('.circle-f-1');
    ref_hoverDiv.current.addEventListener('mousemove', e => {
      circle.style.display = 'block';
      circle.style.left = e.clientX - 100 + 'px';
      circle.style.top = e.clientY - 100 + 'px';
    });
    ref_hoverDiv.current.addEventListener('mouseout', e => {
      circle.style.display = 'none';
    });
    const circle2 = document.querySelector('.circle-f-2');
    ref_hoverDiv2.current.addEventListener('mousemove', e => {
        circle2.style.display = 'block';
        circle2.style.left = (e.clientX - 250) + 'px';
        circle2.style.top = (e.clientY - 250) + 'px';
    });
    ref_hoverDiv2.current.addEventListener('mouseout', e => {
        circle2.style.display = 'none';
    });
    type();
  }, []);
  
  return (
    <div >
      <div className="circle-follow-cursor circle-f-1"></div>
      <section ref={ref_hoverDiv} className=" min-vh-80 position-relative" id="section-1">
        <Nav />
        <div className="container">
          <div className="row mt-5 py-5">
            <div className="col-md-6 pe-md-0">
              
              <div className="typing-effect" id="typing">
                <h1 className="h1 fw-bold">👋 Hi, <span className="fw-light">i'm</span> Robeth Muzaki</h1>
                <p className="h3">Fullstack Developer & Head of IT <br />di <Link className="text-dark link-underline-dark"
                  href="https://iziroam.com">iziRoam</Link>.</p>
                <p>Saya adalah seorang Programmer, yang sudah {new Date().getFullYear() - 2011} tahun mendalami bidang Teknologi.
                </p>
                <p>Sering membuat Aplikasi / Web:</p>
                <ul>
                  <li>CMMS, GIS & ERP</li>
                  <li>E-Commerce , Company Profile & Toko Online</li>
                  <li>Mobile Applications & Game</li>
                </ul>
                <p>
                  Jika memiliki Project, dengan senang hati saya akan membantu untuk menyelesaikannya. <br />
                  <Link className=" btn btn-dark btn-lg rounded-pill px-5" href="#footer">Hubungi Saya</Link>
                </p>
              </div>
              {
                typingfinish==true?<Link className=" btn btn-dark btn-lg rounded-pill px-5" href="#footer">Hubungi Saya</Link>:''
              }

            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="position-relative">
                <div className="flip-card animated-toright cursor img-avatar-big rounded-circle">
                  <div className="flip-card-inner ">
                    <div className="flip-card-front  border-0 rounded-circle">
                      <Image priority={true} sizes="100vw" width={0} height={0} alt="Achmed Robeth Muzaki" className=""
                        src="https://umkmku.s3.ap-southeast-1.amazonaws.com/img/20240306-logorobeth.png" />
                    </div>
                    <div className="flip-card-back border-0 rounded-circle">
                      <Image priority={true} sizes="100vw" width={0} height={0} alt="Achmed Robeth Muzaki" className=""
                        src="https://umkmku.s3.ap-southeast-1.amazonaws.com/img/20240306-logorobeth.png" />

                    </div>
                  </div>
                </div>
                <Image priority={true} sizes="100vw" width={0} height={0} className="img-avatar-big img-avatar-q position-absolute  rounded-circle"
                  src="https://umkmku.s3.ap-southeast-1.amazonaws.com/rbtimg/RBT.png" alt="Achmed Robeth Muzaki" />
              </div>
              <p className="text-lg-center my-3">
                <Link target="_blank" href="//wa.me/6282170699887"
                  className="text-dark text-decoration-noned-inline-block"><i className="fab fa-whatsapp fa-3x"></i></Link>
                <Link target="_blank" href="mailto:karebetconnec@gmail.com"
                  className="text-dark text-decoration-none d-inline-block"><i className="fa fa-at fa-3x"></i>
                </Link>
                <Link target="_blank" href="//github.com/karebet"
                  className="text-dark text-decoration-none d-inline-block">
                  <i className="fab fa-github fa-3x"></i>
                </Link>
                <Link target="_blank" href="//www.linkedin.com/in/achmed-robeth-muzaki"
                  className="text-dark text-decoration-none  d-inline-block">
                  <i className="fab fa-linkedin-in fa-3x"></i>
                </Link>
                <Link target="_blank" href="//facebook.com/Karebetconnec"
                  className="text-dark text-decoration-none  d-inline-block">
                  <i className="fab fa-facebook fa-3x"></i>
                </Link>


              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <Link target="_blank" href="https://jadipro.id" className="text-decoration-none card card-body px-5 rounded-5 pb-0 shadow border-0 bg-primary">
                <div className="row align-items-center">
                  <div className="col-md-9">
                    <h2 className="h1">UMKM punya website gratis!</h2>
                  </div>
                  <div className="col-md-3">
                    <Image style={{ width: '100%', height: 'auto' }} priority={true} sizes="100vw" width={0} height={0} className="w-100" src="https://umkmku.s3.ap-southeast-1.amazonaws.com/rbtimg/jadpro-svg-mini-png.svg" alt="umkm jadipro" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>


      </section>
      <section className="bg-body-tertiary position-relative overlay-y-hidden">
        <div ref={ref_hoverDiv2} className="min-vh-80 d-block position-relative overlay-y-hidden" id="section-2">
            <div className="circle-follow-cursor bg-white circle-f-2"></div>
            <div className="container py-5 my-5">
                <Timeline data={databs.timeline} />
            </div>
        </div>
      </section> 
      <Skill data={databs.skill} />
    </div>
  );
}
