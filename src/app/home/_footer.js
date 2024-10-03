'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect,useState } from "react";
export default function _footer({data=[]}) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sapa, setSapa] = useState("pagi");
    const [responWA, setResponWA] = useState(false);
    const areaemail = useRef(null);
    const areamessage = useRef(null);
    const areamessagetextarea = useRef(null);
    

    const [chat, setChatData] = useState([
        {user:'robeth',message:'Halo, ada yang bisa saya bantu? '},
        {user:'robeth',message:'Silahkan ceritakan Project yang dimiliki, dengan senang hati saya akan membantu menyelesaikan.'}
    ]);

    
    useEffect(() => {
        
    },[chat])

    const sendmessage = async function() {
        if(!email){
            alert("Silahkan lengkapi email/nomor telpon Anda terlebih dahulu.");
            return;
        }
        if(!message){
            alert("Silahkan lengkapi Pesan Anda terlebih dahulu.");
            return;
        }
        var datalama = chat;
        datalama.push({user:'me',message:message});
        setChatData(datalama);
        try {
            const response = await fetch('https://cl1l5f4jy0.execute-api.ap-southeast-1.amazonaws.com/be/robethmyid-contact'.toString(),{
                 method: "POST",
                 headers: {
                    'Accept': 'application/json'
                  },
                 body: JSON.stringify({email, message}),
            });
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
            const data = await response.json();
            if(data.status==true){
                    var datalama = chat;
                    datalama.push({user:'robeth',message:'Baik, tunggu sebentar ya, saya akan menghubungi Anda segera.'});
                    setChatData(datalama);
                    setMessage("");
                    areamessagetextarea.current.value = "";
                    areamessagetextarea.current.style.height = "auto";
                    areamessagetextarea.current.focus();
            }
          } catch (error) {
            console.error("Error fetching packages:", error);
            return;
          }
    }
    return (
        <div>
            <footer className="bg-body-tertiary py-5 mt-5 mt-md-0" id="footer">
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-5 order-md-1 position-relative footer-bullet-message">
                            <div className="px-5 position-relative" style={{"zIndex": "2"}}>
                                <div className="mb-4">
                                    <input ref={areaemail} onChange={(e)=>setEmail(e.target.value)} id="modal-myemail" type="text" placeholder="Email / Nomor telpon"
                                        className="shadow form-control form-control-lg rounded-pill" />
                                </div>
                                <div className="mb-4">
                                    {
                                        email.length>0?
                                        <input readOnly onClick={(e)=>{
                                            setTimeout(function() {
                                                areamessagetextarea.current.focus();
                                              }, 2000);
                                            
                                        }} data-bs-toggle="modal" data-bs-target="#modalcreatepesan" type="text" placeholder="Ceritakan Project Anda"
                                        className="shadow form-control form-control-lg rounded-pill" />
                                        :
                                        <input readOnly onClick={(e)=>{
                                            areaemail.current.focus();
                                        }} type="text" placeholder="Ceritakan Project Anda"
                                        className="shadow form-control form-control-lg rounded-pill" />
                                    }
                                    
                                </div>
                                <div className="mb-4">
                                    <button className="btn btn-light w-100 btn-lg rounded-pill">Kirim</button>
                                </div>
                                <div className="py-5">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 text-center text-md-start justify-content-center position-relative order-md-0">
                            <h2 className="h1 fw-bold ">Konsultasi Project Gratis, Hubungi saya!</h2>
                            <div className="rounded-linkedin d-block rounded-pill p-3 border border-dark">
                                <div className="row">
                                    <div className="col-4 col-md-3">
                                        <Image priority={true} sizes="80vw" width={0} height={0}  className="w-100 h-auto rounded-circle" src={data.image} alt={data.title} />
                                    </div>
                                    <div className="col-8 col-md-9 text-start">
                                        <span className="mb-0 h5 fw-bold">Achmed Robeth Muzaki</span>
                                        <p className="mb-0 text-muted small">{data.core_position}</p>
                                        <Link name="Linkedin Robeth Muzaki" target="_blank" href="//www.linkedin.com/in/achmed-robeth-muzaki"
                                            className="text-dark text-decoration-none me-2 d-inline-block">
                                            <i className="fab fa-linkedin-in"></i>
                                        </Link> 
                                        <Link name="Whatsapp Robeth Muzaki" target="_blank" href="//wa.me/6282170699887"
                                            className="text-dark text-decoration-noned-inline-block me-2 "><i className="fab fa-whatsapp"></i></Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            <div className={"modal fade "} id="modalcreatepesan">
                <div className="modal-dialog" role="document">
                    <div className="modal-content border-0 rounded-5">
                        <div className="modal-body top-rounded bg-wa text-white">
                            <div className="row">
                                <div className="col-1 pe-0">
                                    <Image sizes="100vw" width={0} height={0}   alt={data.title} className="w-100 h-auto" src={data.logo} />
                                </div>
                                <div className="col-8 pt-1">
                                    <span className="h5 ">Robeth Muzaki</span>
                                </div>
                                <div className="col-3 text-end">
                                    <span
                                    className="btn-close h-auto text-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body bg-wa-chat">
                            <div className="row">
                                <div className="col-md-12 area-message" ref={areamessage}>
                                    {
                                        chat.map((item,index)=>{
                                            if(item.user=='robeth'){
                                                return(
                                                    

                                                    <div className="message-wa message-wa-robeth" key={index}>
                                                        {item.message}
                                                        <span className="message-wa-robeth-arrow"></span>
                                                    </div>
                                                )
                                            }else{
                                                return(
                                                        

                                                    <div className="message-wa message-wa-my" key={index}>
                                                        {item.message}
                                                        <span className="message-wa-my-arrow"></span>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="modal-body bottom-rounded bg-wa-chat">
                            <div className="row">
                                        <div className="col-10">
                                            <textarea ref={areamessagetextarea} onChange={(e)=>{
                                                const target = e.target;
                                                areamessagetextarea.current.style.height = "auto";
                                                areamessagetextarea.current.style.height = `${target.scrollHeight}px`;
                                                setMessage(e.target.value)}} id="modal-message" placeholder="Ketik disini" className="form-control rounded-4" name="" rows="1"></textarea>
                                        </div>
                                        <div className="col-2">
                                            <button onClick={async function(e){
                                                var datamsg= await sendmessage(e);
                                                
                                                
                                            }} id="modal-submit" className="btn btn-secondary border-0 bg-wa w-100 rounded-4">
                                                <i className="fal fa-paper-plane text-white" aria-hidden="true"></i>
                                            </button>
                                        </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

