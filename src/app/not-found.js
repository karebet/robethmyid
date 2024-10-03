import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-light">
    <div id="notfound">
    <div className="notfound">
    <div className="notfound-404">
    <h1 >Oops!</h1>
    </div>
    <h2>404 - Page not found</h2>
    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
    <Link href={"/"}>Go To Homepage</Link>
    </div>
    </div>
    </section>
    )
}