import { NextResponse } from "next/server";
export async function POST(req) {
    const { email, message } = await req.json();
    const ip = req.headers.get("X-Forwarded-For") || req.headers.get("cf-connecting-ip");
    const t="#ROBETH robeth.my.id ada yang mengirim pesan\n"+email+"\nmessage: "+message+"\nip: "+ip;

    const api_token = process.env.TELE_APITOKEN;
	const chat_id= process.env.TELE_CHATID;
    var url = 'https://api.telegram.org/bot'+api_token+'/sendMessage'+"?chat_id="+chat_id+"&text="+encodeURIComponent(t)+"&parse_mode=html";;
    var response = await fetch(url);
    return NextResponse.json({ status: true,o:o});
}