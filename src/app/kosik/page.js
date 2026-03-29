import Image from "next/image";
import Link from "next/link";

export default function Kosik() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
        <Link className="navbar-brand" href="#">
          <img src="/logo_SpEEd.png" alt="main_logo " style={{ height: "40px" }}/>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Domů
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/kosik">
              Košík
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/profil">
              Profil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/admin">
              Administrace
            </Link>
          </li>
        </ul>
      </nav>

      {/* Kontejner pro obsah košíku */}
      <div className="container py-5 text-center">
        <h2 className="display-1 text-primary py-3"> spEEd</h2>

        <div className="row justify-content-center g-4">
          <h3 className="card-title text-info py-2">Obsah Vašeho košíku</h3>

          {/* Karty s položkami */}
          <div className="card">
            <div className="card mb-3">
              <h5 className="card-title text-center">Volkswagen ID.3</h5>
              <h6 className="card-title">Celková cena položky</h6>
              <p className="card-text">980 000 Kč</p>
            </div>

            {/* Údaje pro shrnutí objednávky */}
            <h4 className="card-title">Celková cena položek v košíku</h4>
            <p className="card-text">2 789 990 Kč</p>

            {/*Tlačítka pro potvrzení/přidání dalšího zboží*/}
            <div className="col justify-content-center g-4">
              <Link href="/" className="btn btn-secondary px-3 ms-3">
                Přidat další položky
              </Link>
              <Link href="/objednavka" className="btn btn-success px-3 ms-3">
                Přejít k objednávce
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
