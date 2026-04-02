"use client";
import { useState } from 'react';
export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "JAN NOVÁK",
    email: "vas@email.cz",
    role: "ADMINISTRÁTOR"
  });

  // Funkce pro simulaci editace (v reálu by otevřela input nebo modal)
  const handleEdit = (field) => {
    console.log(`Editace pole: ${field}`);
    // Zde by následovala logika pro změnu (např. prompt nebo přepnutí na input)
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            
            <div className="card border-0 shadow-lg p-4 p-md-5 rounded-0">
              <div className="card-body">
                
                <h2 className="auth-title mb-5">PROFIL UŽIVATELE</h2>

                <div className="profile-rows">
                  
                  {/* ŘÁDEK: JMÉNO */}
                  <div className="profile-row mb-4 pb-2 border-bottom d-flex justify-content-between align-items-end">
                    <div>
                      <label className="form-label d-block mb-1">JMÉNO A PŘÍJMENÍ</label>
                      <div className="profile-value">{user.name}</div>
                    </div>
                    <button onClick={() => handleEdit('name')} className="btn-edit-inline">
                      UPRAVIT
                    </button>
                  </div>

                  {/* ŘÁDEK: EMAIL */}
                  <div className="profile-row mb-4 pb-2 border-bottom d-flex justify-content-between align-items-end">
                    <div>
                      <label className="form-label d-block mb-1">REGISTROVANÝ E-MAIL</label>
                      <div className="profile-value">{user.email}</div>
                    </div>
                    <button onClick={() => handleEdit('email')} className="btn-edit-inline">
                      UPRAVIT
                    </button>
                  </div>

                  {/* ŘÁDEK: ROLE (Tady tlačítko vynecháme, role bývá fixní) */}
                  <div className="profile-row mb-4 pb-2 border-bottom d-flex justify-content-between align-items-end">
                    <div>
                      <label className="form-label d-block mb-1">UŽIVATELSKÁ ROLE</label>
                      <div className="profile-value text-muted opacity-50">{user.role}</div>
                    </div>
                    <span className="small text-secondary italic" style={{fontSize: '0.7rem'}}>NELZE MĚNIT</span>
                  </div>

                </div>

                <div className="text-center mt-5">
                  <a href="/login" className="register-link">
                    ODHLÁSIT SE ZE SYSTÉMU
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}