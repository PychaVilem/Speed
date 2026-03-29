import Image from "next/image";
import Link from "next/link";

export default function carDetails() {
  return (
    <div>
      {/* Černá navigační lišta s odkazy na další stránky */}
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

      <div className="container py-5 text-center">
        <h1 className="display-1 text-primary">spEEd</h1>
        <h2>Zvolené vozidlo</h2>
        {/* První část s obrázkem uprostřed -> sloupec zarovnaný na prostředek a zabírající polovinu šířky řádku */}
        <div className="row justify-content-center g-4">
          <div className="col-md-6 text-white g-3">
            <img
              className="card-img-top"
              src="https://storage.googleapis.com/wp-resources/suri.cz/g3__template/uploads/2024/09/09-prehled-levnych-elektromobilu-dostupnych-na-ceskem-trhu-02.webp"
              alt="Card image cap"
            />
          </div>
        </div>

        {/*Základní údaje vozidla jako karta zabírající čtvrtinu šířky řádku a s výškou 200 */}
        <div className="row justify-content-center g-4">
          <div className="col-md-3 text-white g-3">
            <div className="card h-200">
              <div className="card-body">
                <h5 className="card-title">Základní údaje</h5>
                <p className="card-text"> Značka vozidla</p>
                <p className="card-text">Model</p>
                <p className="card-text">Karosářská varianta</p>
                <p className="card-text">Rok výroby</p>
                <p className="card-text">Barva</p>
                <p className="card-text">Cena základní varianty</p>
              </div>
            </div>
          </div>

          {/* Technické údaje vozidla jako karta zabírající čtvrtinu šířky řádku a s výškou 200*/}
          <div className="col-md-3 text-white g-3">
            <div className="card h-200">
              <div className="card-body">
                <h5 className="card-title">Technické údaje</h5>
                <p className="card-text">Palivo</p>
                <p className="card-text">Obsah motoru</p>
                <p className="card-text">Výkon</p>
                <p className="card-text">Spotřeba</p>
                <p className="card-text">Typ převodovky</p>
                <p className="card-text">Emisní norma</p>
              </div>
            </div>
          </div>
        </div>
        
        {/*Tlačítko pro přidání do košíku*/}
         <Link href="/kosik" className="btn btn-primary">Přidat do košíku</Link>
      </div>
    </div>
  );
}
