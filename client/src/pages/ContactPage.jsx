import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [fbSubmitted, setFbSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 pt-8">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Contact & Feedback</span>
          <h1 className="text-4xl font-serif mt-2 text-slate-900 sm:text-5xl">Suntem aici pentru tine</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Partea Stângă: Detalii Contact */}
          <div className="space-y-10 text-left">
            <h2 className="text-2xl font-serif text-slate-900 mb-6">Informații de contact</h2>
            <div className="space-y-6">
              <ContactItem icon="📞" title="Telefon" text="0800 123 456 (gratuit, L-V 8:00–20:00)" />
              <ContactItem icon="✉️" title="Email" text="contact@pharmastore.ro" />
              <ContactItem icon="📍" title="Sediu Social" text="Str. Farmaciei nr. 12, Sector 1, București" />
              <ContactItem icon="💬" title="Chat Live" text="Disponibil 24/7 pe site și aplicație" />
            </div>
          </div>

          {/* Partea Dreaptă: Formular Contact */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-left relative overflow-hidden">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Trimite-ne un Mesaj</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Numele tău" className="w-full p-3 rounded-xl border border-slate-200 outline-emerald-500" required />
              <input type="email" placeholder="email@exemplu.ro" className="w-full p-3 rounded-xl border border-slate-200 outline-emerald-500" required />
              <textarea className="w-full p-3 h-32 rounded-xl border border-slate-200 outline-emerald-500" placeholder="Cum te putem ajuta?"></textarea>
              <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all">
                Trimite Mesaj ✓
              </button>
            </form>
            {submitted && <div className="absolute inset-0 bg-emerald-50 flex items-center justify-center font-bold text-emerald-800">✅ Mesaj trimis cu succes!</div>}
          </div>
        </div>

        {/* SECȚIUNEA FEEDBACK (CHESTIONAR) */}
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl border border-slate-200 shadow-xl text-left">
          <div className="text-center mb-10">
            <span className="text-emerald-600 font-bold text-xs uppercase italic">Opinia ta contează</span>
            <h2 className="text-3xl font-serif mt-2 text-slate-900">Evaluează experiența ta</h2>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setFbSubmitted(true); }}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight text-[11px]">Cum ai găsit PharmaStore RO?</label>
              <select className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 outline-emerald-500 text-slate-600">
                <option>Google / Motor de căutare</option>
                <option>Facebook / Instagram</option>
                <option>Recomandare prieten</option>
                <option>Publicitate online</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight text-[11px]">Cât de mulțumit ești de serviciile noastre?</label>
              <div className="flex gap-2 text-4xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    onClick={() => setRating(star)}
                    className={`cursor-pointer transition-colors ${rating >= star ? 'text-yellow-400' : 'text-slate-200'}`}
                  >★</span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight text-[11px]">Sugestii sau comentarii (opțional)</label>
              <textarea 
                className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 outline-emerald-500 h-28 resize-none" 
                placeholder="Spune-ne ce putem face mai bine..."
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg">
              Trimite Feedback ✓
            </button>
            
            {fbSubmitted && <div className="text-center p-4 bg-emerald-100 text-emerald-800 rounded-xl font-bold mt-4 animate-pulse">🎉 Mulțumim pentru feedback! Opinia ta contează enorm pentru noi.</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, text }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-xl shrink-0 border border-emerald-100">{icon}</div>
      <div>
        <h4 className="font-bold text-sm text-slate-900 uppercase tracking-tight text-[12px]">{title}</h4>
        <p className="text-slate-500 text-sm">{text}</p>
      </div>
    </div>
  );
}