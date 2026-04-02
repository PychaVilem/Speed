"use client";
import React from 'react';

export default function RegisterPage() {
  const handleRegister = (e) => e.preventDefault();

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow-lg p-4 p-md-5 rounded-0">
              <div className="card-body">
                <h2 className="text-center mb-5 auth-title">
                  REGISTRACE
                </h2>

                <form onSubmit={handleRegister}>
                  <div className="mb-4">
                    <label className="form-label">CELÉ JMÉNO</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Jan Novák" required />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">E-MAIL</label>
                    <input type="email" className="form-control form-control-lg" placeholder="vas@email.cz" required />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">HESLO</label>
                    <input type="password" className="form-control form-control-lg" placeholder="******" required />
                  </div>

                  <div className="mb-5">
                    <label className="form-label">POTVRZENÍ HESLA</label>
                    <input type="password" className="form-control form-control-lg" placeholder="******" required />
                  </div>

                  <button type="submit" className="btn btn-auth w-100 py-3 shadow-sm">
                    VYTVOŘIT ÚČET
                  </button>
                </form>

                <div className="text-center mt-5 text-secondary">
                  <p className="mb-2">Již máte vytvořený účet?</p>
                  <a href="/login" className="register-link">
                    PŘIHLASTE SE ZDE
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