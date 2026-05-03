import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* SECTIUNEA HERO */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              🩺 Trusted Pharma Store
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Produse farmaceutice
              <span className="block text-emerald-600">sigure și de încredere</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Descoperă suplimente, medicamente OTC și produse de îngrijire,
              selectate cu grijă pentru sănătatea ta. Informează-te corect,
              cumpără responsabil.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition"
              >
                Vezi produsele
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 text-left">
              <div className="rounded-xl border border-slate-100 bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-xs text-slate-500">Produse farmaceutice și suplimente</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-xs text-slate-500">Acces rapid la informații</p>
              </div>
            </div>
          </div>

          <div className="relative grid gap-4 text-left">
             <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💊</span>
                  <h2 className="text-sm font-semibold text-slate-800">Medicamente OTC & suplimente</h2>
                </div>
                <p className="text-xs text-slate-500">Găsești rapid produse pentru durere, digestie și imunitate.</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📋</span>
                  <h2 className="text-sm font-semibold text-slate-800">Detalii clare pentru produse</h2>
                </div>
                <p className="text-xs text-slate-500">Compoziție și contraindicații afișate transparent.</p>
              </div>
          </div>
        </div>
      </section>

      {/* SECȚIUNEA SOCIAL MEDIA */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase italic">Rețele Sociale</span>
            <h2 className="text-4xl font-serif mt-2 text-slate-900">Urmărește-ne pe social media</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Oferte exclusive, live-uri cu farmaciști și sfaturi de sănătate zilnice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-[2.5rem] text-white text-left transition-all hover:scale-[1.02] shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Facebook</h3>
              <p className="text-blue-50 mb-8 opacity-90">
                Oferte exclusive și noutăți despre produse direct pe pagina noastră oficială.
              </p>
              <a 
                href="https://www.facebook.com/profile.php?id=61589291246635" 
                target="_blank" 
                className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Urmărește pe Facebook →
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-10 rounded-[2.5rem] text-white text-left transition-all hover:scale-[1.02] shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Instagram</h3>
              <p className="text-pink-50 mb-8 opacity-90">
                Tips & tricks pentru un stil de viață sănătos și recomandări de produse.
              </p>
              <a 
                href="https://www.instagram.com/pharmastorero/" 
                target="_blank" 
                className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-xl hover:bg-pink-50 transition-colors"
              >
                Urmărește pe Instagram →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}