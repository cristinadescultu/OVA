import React, { useState } from 'react';

const articles = [
  {
    tag: 'Nutriție & Imunitate',
    title: 'Cele mai importante vitamine pentru imunitate în sezonul rece',
    meta: '🗓 15 Aprilie 2026 · Autor: Farm. Maria Ionescu · 1 min citire',
    emoji: '🌿',
    color: 'bg-emerald-50',
    excerpt: 'Descoperă ce suplimente te ajută să menții sistemul imunitar puternic în toamnă și iarnă.',
    content: `
      <h4 style="font-weight: bold; margin-top: 20px; color: #10b981;">Vitamina C – scutul clasic</h4>
      <p style="margin-top: 10px;">Vitamina C rămâne cel mai cunoscut antioxidant pentru imunitate. Stimulează producția de globule albe, ajută la absorbția fierului și reduce durata răcelilor.</p>
      <h4 style="font-weight: bold; margin-top: 20px; color: #10b981;">Vitamina D3 – deficiența ascunsă</h4>
      <p style="margin-top: 10px;">Studiile arată că peste 70% dintre români au deficit de vitamina D, mai ales în sezonul rece când expunerea la soare este minimă. Vitamina D3 modulează răspunsul imun.</p>
      <ul style="margin-top: 15px; list-style-type: disc; padding-left: 20px;">
        <li>Doza recomandată: 2000–4000 UI/zi</li>
        <li>Sursă: Suplimente de calitate farmaceutică</li>
      </ul>
    `
  },
  {
    tag: 'Sănătate Cardiovasculară',
    title: 'Cum să monitorizezi corect tensiunea arterială acasă',
    meta: '🗓 28 Martie 2026 · Autor: Farm. Alexandru Popa · 1 min citire',
    emoji: '💙',
    color: 'bg-blue-50',
    excerpt: 'Ghid practic pentru utilizarea tensiometrului digital și interpretarea valorilor.',
    content: `
      <h4 style="font-weight: bold; margin-top: 20px; color: #3b82f6;">Când să măsori tensiunea</h4>
      <p style="margin-top: 10px;">Măsoară tensiunea în fiecare zi, la aceleași ore: dimineața înainte de micul dejun și seara. Înainte de măsurătoare, stai jos 5 minute în liniște.</p>
      <h4 style="font-weight: bold; margin-top: 20px; color: #3b82f6;">Interpretarea valorilor</h4>
      <p style="margin-top: 10px;">Tensiunea normală este sub 120/80 mmHg. Valorile care depășesc constant 140/90 mmHg necesită consult medical urgent.</p>
    `
  },
  {
    tag: 'Îngrijire Personală',
    title: 'Rutina zilnică de îngrijire a pielii recomandată de dermatolog',
    meta: '🗓 10 Martie 2026 · Autor: Dr. Farm. Elena Dumitrescu · 2 min citire',
    emoji: '🌞',
    color: 'bg-orange-50',
    excerpt: 'Pași simpli pentru o piele sănătoasă cu produse dermatologice accesibile.',
    content: `
      <h4 style="font-weight: bold; margin-top: 20px; color: #f97316;">Dimineața – protecție</h4>
      <p style="margin-top: 10px;">Curățare blândă cu gel de spălare și aplicarea obligatorie a unui SPF 50+. Recomandăm branduri precum La Roche-Posay sau Vichy.</p>
      <h4 style="font-weight: bold; margin-top: 20px; color: #f97316;">Seara – hidratare</h4>
      <p style="margin-top: 10px;">Demachiere corectă urmată de o cremă hidratantă bogată pentru a ajuta regenerarea celulară nocturnă.</p>
    `
  }
];

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* FĂRĂ NAVBAR AICI - Este deja în App.jsx */}
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 pt-8">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Blog de Sănătate</span>
          <h1 className="text-4xl font-serif mt-2 text-slate-900">Sfaturi utile pentru sănătatea ta</h1>
          <p className="text-slate-600 mt-4">Articole scrise de farmaciști și specialiști medicali pentru decizii informate.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`h-48 flex items-center justify-center text-6xl ${art.color}`}>
                {art.emoji}
              </div>
              <div className="p-6 text-left">
                <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-wider">{art.tag}</span>
                <h3 className="text-lg font-bold mt-2 leading-tight text-slate-900">{art.title}</h3>
                <p className="text-slate-500 text-sm mt-3 line-clamp-2">{art.excerpt}</p>
                <div className="text-[11px] text-slate-400 mt-4">{art.meta}</div>
                <span className="text-emerald-600 font-bold text-sm mt-4 inline-block">Citește articolul →</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal / Popup pentru Articol */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 bg-slate-100 p-2 rounded-lg hover:bg-slate-200 text-slate-600 font-bold"
            >✕</button>
            <span className="text-emerald-600 font-bold text-xs uppercase">{selectedArticle.tag}</span>
            <h2 className="text-3xl font-serif mt-2 mb-4 leading-tight">{selectedArticle.title}</h2>
            <div className="text-xs text-slate-400 mb-6 border-b pb-4">{selectedArticle.meta}</div>
            
            {/* Secțiunea de conținut - Am adăugat stiluri inline pentru siguranță */}
            <div 
              className="text-slate-700 leading-relaxed text-left text-base pb-6"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />
            
            <button 
              onClick={() => setSelectedArticle(null)}
              className="mt-6 w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700"
            >
              Închide Articolul
            </button>
          </div>
        </div>
      )}
    </div>
  );
}