import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      {/* Úvodní text pro návštěvníky */}
      <div className="container py-5 text-center">
        <h1 className="display-1 text-primary">spEEd</h1>
        <p className="lead">
          Vítejte na našem internetovém obchodě s velkou nabídkou elektromobilů
        </p>
        <h2 className="display-2 text">Aktuálně nabízené elektromobily</h2>

          {/* Začátek mřížky s vozidly */}
        <div className="row justify-content-center g-4">
          {/*První prvek s autem v mřížce*/}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Avenue_Roosevelt_%C3%A0_Bruxelles%2C_Zen_Car_en_recharge.jpg/640px-Avenue_Roosevelt_%C3%A0_Bruxelles%2C_Zen_Car_en_recharge.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">BMW i3</h5>
                <p className="card-text">Německá prémiovka na poli elektromobility.</p>
                <Link href="/detail-vozidla" className="btn btn-primary">
                  Detail auta
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://placehold.co/600x400?text=Auto+1"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Volkswagen ID.3</h5>
                <p className="card-text">Vozidlo pro každý den od Volkswagenu</p>
                <Link href="/detail-vozidla" className="btn btn-primary">
                  Detail auta
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://placehold.co/600x400?text=Auto+1"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Škoda Enyaq</h5>
                <p className="card-text">Elektrické SUV domácího výrobce</p>
                <Link href="/detail-vozidla" className="btn btn-primary">
                  Detail auta
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://placehold.co/600x400?text=Auto+1"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Kia EV6</h5>
                <p className="card-text">Asijská konkurence zavedeným značkám</p>
                <Link href="/detail-vozidla" className="btn btn-primary">
                  Detail auta
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://placehold.co/600x400?text=Auto+1"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Tesla Model X</h5>
                <p className="card-text">Další zajímavé vozidlo od Tesly</p>
                <Link href="/detail-vozidla" className="btn btn-primary">
                  Detail auta
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
