import Image from "next/image";
import Link from 'next/link';

export default function Kosik() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
          <Link className="navbar-brand" href="#">Speed</Link>
            <ul className="navbar-nav">
              <li className="nav-item"> <Link className="nav-link" href="/">Domů</Link></li>
              <li className="nav-item"> <Link className="nav-link" href="/kosik">Košík</Link></li>        
              <li className="nav-item"> <Link className="nav-link" href="/profil">Profil</Link></li>
              <li className="nav-item"> <Link className="nav-link" href="/admin">Administrace</Link></li>
            </ul>
      </nav>
      <div className="container py-5 text-center">
        <h1 className="display-1 text-primary">Aplikace Speed</h1>
        <p className="lead">
          Gratuluji, tvůj React projekt s Bootstrapem běží!
        </p>
        <button className="btn btn-success btn-lg">Zkus kliknout</button>
      </div>
    </div>
  );
}
