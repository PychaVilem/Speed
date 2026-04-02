"use client"; 
import React from 'react';
export default function LoginPage() {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            {/* Karta bez zaoblení, stín definován v CSS */}
            <div className="card border-0 shadow-lg p-4 p-md-5 rounded-0">
              <div className="card-body">
                {/* Font Impact z globals.css */}
                <h2 className="text-center mb-5 auth-title">
                  PŘIHLÁŠENÍ
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    {/* Font Aeonik + Barva Šedá z globals.css */}
                    <label className="form-label">E-MAIL</label>
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      placeholder="vas@email.cz" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-5">
                    <label className="form-label">HESLO</label>
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      placeholder="******" 
                      required 
                    />
                  </div>

                  {/* Tlačítko se Šedo-Modrým přechodem z globals.css */}
                  <button type="submit" className="btn btn-auth w-100 py-3 shadow-sm">
                    VSTOUPIT DO SYSTÉMU
                  </button>
                </form>

                <div className="text-center mt-5 text-secondary">
                  <p className="mb-2">Ještě u nás nemáte vytvořený účet?</p>
                  {/* Modrá barva + Linka z globals.css */}
                  <a href="/register" className="register-link">
                    ZAREGISTRUJTE SE ZDE
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