const bcrypt = require('bcrypt');

async function seed() {
  const { User, Product } = require('./models');

  // ==================== ADMIN USER ====================
  try {
    const existing = await User.findOne({ where: { email: 'admin@pharmastore.ro' } });
    if (!existing) {
      const hash = await bcrypt.hash('Admin2026!', 10);
      await User.create({
        email: 'admin@pharmastore.ro',
        name: 'Admin',
        password: hash,
        role: 'admin',
      });
      console.log('✅ Admin creat: admin@pharmastore.ro / Admin2026!');
    } else {
      console.log('✅ Admin deja există');
    }
  } catch (e) {
    console.error('❌ Eroare creare admin:', e.message);
  }

  // ==================== PRODUSE ====================
  const products = [
    // Calmante si Antiinflamatoare
    { name: 'Nurofen 400mg', description: 'Antiinflamator și analgezic pentru dureri și febră.', price: 18.50, category: 'Calmante si Antiinflamatoare', image: 'https://www.gudpharm.ro/image/cache/catalog/produse/nurofen-express-forte-400mg-capsule-moi-x-20-reckitt-benckiser-500x500.jpg', stock: 100 },
    { name: 'Paracetamol 500mg', description: 'Analgezic și antipiretic pentru dureri ușoare și moderate.', price: 8.00, category: 'Calmante si Antiinflamatoare', image: 'https://www.catena.ro/content/images/thumbs/0009422_paracetamol-laropharm-500-mg-x-20-comprimate_550.jpeg', stock: 150 },
    { name: 'Algocalmin 500mg', description: 'Analgezic puternic pentru dureri intense.', price: 12.00, category: 'Calmante si Antiinflamatoare', image: 'https://www.catena.ro/content/images/thumbs/0007296_algocalmin-500mg-x-10-comprimate_550.jpeg', stock: 80 },
    { name: 'Ibuprofen 200mg', description: 'Antiinflamator nesteroidian pentru dureri și inflamații.', price: 9.50, category: 'Calmante si Antiinflamatoare', image: 'https://www.catena.ro/content/images/thumbs/0006623_ibuprofen-lph-200-mg-x-20-comprimate-filmate_550.jpeg', stock: 120 },

    // Vitamine si Suplimente
    { name: 'Vitamina C 1000mg', description: 'Supliment alimentar pentru imunitate și energie.', price: 32.00, category: 'Vitamine si Suplimente', image: 'https://www.catena.ro/content/images/thumbs/0010067_vitamina-c-1000mg-x-30-comprimate-efervescente_550.jpeg', stock: 200 },
    { name: 'Vitamina D3 2000UI', description: 'Esențială pentru oase, mușchi și imunitate.', price: 28.00, category: 'Vitamine si Suplimente', image: 'https://www.catena.ro/content/images/thumbs/0011234_vitamina-d3-2000-ui-x-30-capsule_550.jpeg', stock: 180 },
    { name: 'Magneziu + B6', description: 'Reduce oboseala și susține funcția nervoasă.', price: 35.00, category: 'Vitamine si Suplimente', image: 'https://www.catena.ro/content/images/thumbs/0008765_magneziu-b6-x-30-comprimate_550.jpeg', stock: 150 },
    { name: 'Omega-3 1000mg', description: 'Acizi grași esențiali pentru inimă și creier.', price: 45.00, category: 'Vitamine si Suplimente', image: 'https://www.catena.ro/content/images/thumbs/0009876_omega-3-1000mg-x-30-capsule_550.jpeg', stock: 100 },

    // Sanatate Digestiva
    { name: 'Smecta', description: 'Tratament pentru diaree și disconfort digestiv.', price: 22.00, category: 'Sănătate Digestivă', image: 'https://www.catena.ro/content/images/thumbs/0005432_smecta-3g-x-30-plicuri_550.jpeg', stock: 90 },
    { name: 'Probiotice Lactobacillus', description: 'Reechilibrează flora intestinală.', price: 48.00, category: 'Sănătate Digestivă', image: 'https://www.catena.ro/content/images/thumbs/0011567_probiotice-x-20-capsule_550.jpeg', stock: 70 },
    { name: 'Mezym Forte', description: 'Enzime digestive pentru digestie ușoară.', price: 26.00, category: 'Sănătate Digestivă', image: 'https://www.catena.ro/content/images/thumbs/0006789_mezym-forte-x-20-comprimate_550.jpeg', stock: 110 },

    // Alergii
    { name: 'Aerius 5mg', description: 'Antihistaminic pentru alergii sezoniere.', price: 42.00, category: 'Alergii', image: 'https://www.catena.ro/content/images/thumbs/0007890_aerius-5mg-x-20-comprimate-filmate_550.jpeg', stock: 60 },
    { name: 'Claritine 10mg', description: 'Tratament rapid pentru rinită alergică și urticarie.', price: 38.00, category: 'Alergii', image: 'https://www.catena.ro/content/images/thumbs/0008901_claritine-10mg-x-10-comprimate_550.jpeg', stock: 75 },

    // Sanatatea Inimii
    { name: 'Cardioton', description: 'Supliment pentru tensiune arterială normală.', price: 55.00, category: 'Sănătatea Inimii', image: 'https://www.catena.ro/content/images/thumbs/0009012_cardioton-x-30-capsule_550.jpeg', stock: 50 },
    { name: 'CoQ10 100mg', description: 'Coenzima Q10 pentru sănătatea inimii și energie celulară.', price: 68.00, category: 'Sănătatea Inimii', image: 'https://www.catena.ro/content/images/thumbs/0010123_coq10-100mg-x-30-capsule_550.jpeg', stock: 45 },

    // Dermatologie
    { name: 'Bepanthen Cremă', description: 'Cremă regeneratoare pentru piele iritată și uscată.', price: 29.00, category: 'Dermatologie', image: 'https://www.catena.ro/content/images/thumbs/0005678_bepanthen-crema-x-30g_550.jpeg', stock: 130 },
    { name: 'Nizoral Șampon', description: 'Șampon antimătreată cu ketoconazol 2%.', price: 36.00, category: 'Dermatologie', image: 'https://www.catena.ro/content/images/thumbs/0006234_nizoral-sampon-x-60ml_550.jpeg', stock: 85 },
    { name: 'Sudocrem', description: 'Cremă antiseptică și calmantă pentru iritații cutanate.', price: 24.00, category: 'Dermatologie', image: 'https://www.catena.ro/content/images/thumbs/0007345_sudocrem-x-60g_550.jpeg', stock: 95 },

    // Altele
    { name: 'Thermometru Digital', description: 'Termometru digital rapid și precis.', price: 55.00, category: 'Altele', image: 'https://www.catena.ro/content/images/thumbs/0008456_termometru-digital_550.jpeg', stock: 40 },
    { name: 'Mască FFP2', description: 'Mască de protecție respiratorie certificată FFP2.', price: 8.00, category: 'Altele', image: 'https://www.catena.ro/content/images/thumbs/0009567_masca-ffp2_550.jpeg', stock: 300 },
  ];

  try {
    const count = await Product.count();
    if (count === 0) {
      await Product.bulkCreate(products);
      console.log(`✅ ${products.length} produse adăugate cu succes!`);
    } else {
      console.log(`✅ Produsele există deja (${count} produse în baza de date)`);
    }
  } catch (e) {
    console.error('❌ Eroare creare produse:', e.message);
  }
}

module.exports = seed;
