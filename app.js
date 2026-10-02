// JavaScript Application Logic for Minecraft ARG Vault & Story Hub

// Core Seed Data: Novel Utama & 4 Analisis Original dari ChatGPT Thread
const seedVaultEntries = [
  {
    id: "entry-novel-1",
    title: "Stasiun Kesempatan Kedua (Novel Utama)",
    author: "You",
    category: "Novel",
    pillar: "4 Pilar Psikologi Manusia",
    summary: "Naskah novel misteri psikologis tentang Rian, peron kayu jam 03:00 malam, rekaman server Minecraft 2011, dan pertukaran ingatan penyesalan.",
    isMultiChapter: true,
    chapters: {
      1: {
        title: "Bab 1: Stasiun Kabut di Pukul 03:00",
        content: `
          <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-purple-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            Suara gemuruh rel kereta tua itu tidak terdengar seperti besi biasa yang bergesekan dengan baja. Ia bergema lembut namun menusuk, seolah-olah dipancarkan dari dasar jurang tanpa akhir yang tersembunyi di balik tumpukan kode server Minecraft tahun 2011.
          </p>
          <p>
            Rian berdiri sendirian di tepi peron kayu yang lapuk. Udara di sekelilingnya terasa amat dingin dan membeku, namun yang paling aneh adalah pemandangan di kejauhan: batas pandangnya tampak buram akibat efek <em>pixelation</em> rendah—seperti kualitas sinyal video analog horror 480p yang perlahan-lahan kehilangan transmisi frame.
          </p>
          <p>
            Lampu gantung di atas peron berkedip gatal dengan irama yang konsisten. Cahaya kuning temaram itu berdengung lirih, menghasilkan frekuensi gelombang rendah yang persis dengan suara derau (*static noise*) dari piringan hitam <em>Disc 11</em> di Minecraft.
          </p>
          <p>
            Rian menatap pergelangan tangan kirinya. Arloji jarum antik milik almarhum ayahnya berhenti bergerak tepat di angka <strong>03:00</strong>. Jarum detik tidak lagi berdetik. Angin malam tidak lagi berembus. Seluruh alam semesta seolah-olah ditahan oleh sebuah perintah <code>/pause</code> yang tak kasat mata.
          </p>
          <div class="p-5 rounded-2xl bg-purple-950/40 border-l-4 border-purple-500 my-6 shadow-inner">
            <p class="italic text-purple-200 text-sm leading-relaxed">
              "Jika kamu mendengar peluit kereta dua kali di tengah keheningan stasiun, jangan pernah sekali-kali menoleh ke belakang. Peluit pertama bukanlah tanda keberangkatan, melainkan peringatan bahwa sesosok entitas baru saja melangkah turun dari gerbong paling belakang."
            </p>
          </div>
          <p>
            Dengan tangan yang sedikit gemetar, Rian merogoh saku dalam jaket hitamnya. Jemarinya menyentuh selembar fragmen kertas kusam bertinta merah yang kaku. Di kertas itu tertera empat kata yang ditulis dengan tekanan pena mendalam: <strong>[ KELUARGA ] &bull; [ SAHABAT ] &bull; [ PENDAMPING ] &bull; [ DIRI SENDIRI ]</strong>.
          </p>
        `
      },
      2: {
        title: "Bab 2: Gerbong Nomor Tiga & Anomali Blok Kayu",
        content: `
          <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            Ujung lokomotif bernuansa hitam legam meluncur perlahan tanpa suara mesin diesel maupun raungan uap. Kereta itu berhenti persis di depan Rian.
          </p>
          <p>
            Pintu geser besi di gerbong tengah terbuka otomatis dengan gesekan nyaring. Di sudut gerbong nomor tiga, diletakkan secara tak wajar sebuah <strong>blok kayu tua (Oak Log)</strong> mengambang dua sentimeter di atas lantai beludru—anomali arsitektur kuno dari *Alpha Minecraft 1.2.6*.
          </p>
          <div class="p-5 rounded-2xl bg-emerald-950/40 border-l-4 border-emerald-500 my-6 shadow-inner">
            <p class="italic text-emerald-200 text-sm leading-relaxed">
              "Pengetahuan di dunia nyata tidak pernah diberikan secara cuma-cuma. Kamu yang memaksa masuk ke dalam misteri ini harus paham: setiap rahasia yang terungkap selalu menuntut ganti ingatan yang paling ingin kamu simpan."
            </p>
          </div>
          <p>
            Suara bisikan tersebut terngiang langsung di bilik telinga Rian—suara Siti saat mereka masih sering menjelajahi server bersama. Layar ponsel di sakunya menyala sendiri menampilkan obrolan tertulis dari tahun 2018.
          </p>
        `
      },
      3: {
        title: "Bab 3: Bayangan di Ujung Peron Seberang",
        content: `
          <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            Dari balik jendela kaca gerbong, Rian mendapati sosok itu berdiri tegak di peron seberang rel. Sosok itu tersusun dari gumpalan piksel hitam pekat yang terus-menerus bergelombang (*glitching shadow*).
          </p>
          <p>
            "Aku adalah perwujudan dari rasa bersalah yang kamu kubur dalam-dalam," ucap sosok itu. "Kamu mengira sedang menyelidiki misteri Minecraft ARG... padahal kamu hanya melarikan diri dari kenyataan bahwa kamu takut menghadapi dunia nyata."
          </p>
          <p>
            Empat pilar kehidupan yang pernah Rian pelajari—<em>Keluarga, Sahabat, Pendamping, dan Diri Sendiri</em>—kini terpampang jelas seperti cermin retak di hadapannya.
          </p>
        `
      },
      4: {
        title: "Bab 4: Pertukaran Ingatan & Tiket Keberangkatan",
        content: `
          <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-rose-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            Entitas di peron seberang mengulurkan selembar tiket kereta berwarna hitam: <code>RETURN_TICKET_TO_REALITY</code>.
          </p>
          <p>
            "Untuk kembali ke dunia nyata, bayar ongkos keberangkatan dengan satu ingatan paling berharga."
          </p>
          <p>
            Rian memilih menyerahkan ingatan tentang rasa penyesalan dan ketakutannya, mempertahankan ingatan akan persahabatan Siti untuk melangkah maju ke dunia nyata.
          </p>
        `
      },
      5: {
        title: "Epilog: Sinyal Terakhir di Disc 11",
        content: `
          <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-purple-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            Gemuruh rel kereta perlahan memudar, digantikan dentang jam dinding kamar Rian. Ia terbangun di meja kerjanya saat mentari pagi menyapa.
          </p>
          <p>
            Di spektrogram audio <em>Disc 11</em>, muncul kalimat: <strong>"TERIMA KASIH TELAH MENGINGATKUKAN KEMBALI. SEKARANG, HIDUPLAH DENGAN PENUH DI DUNIA NYATA."</strong>
          </p>
          <p>
            Misteri terbesar bukanlah kode game, melainkan bagaimana kita menghargai setiap detik kehidupan bersama orang-orang tercinta.
          </p>
        `
      }
    }
  },

  {
    id: "entry-ori-1",
    title: "Analisis Ori #1: Sisi KELUARGA dalam ARG Minecraft",
    author: "Analisis Original User (ChatGPT)",
    category: "Bedah ARG",
    pillar: "Pilar 1: Keluarga (Dorongan Melindungi & Kehilangan)",
    summary: "Analisis mendalam mengenai pilar KELUARGA dalam ARG Minecraft: Bagaimana teror anomali terberat bukan jumpscare, melainkan ancaman terhapusnya kehangatan rumah.",
    content: `
      <h2 class="text-2xl font-extrabold text-white mb-4 border-b border-purple-800/60 pb-3">
        Analisis Ori #1: Sisi KELUARGA & Kehangatan Rumah yang Terancam
      </h2>
      <div class="p-4 rounded-xl bg-purple-950/60 border border-purple-700/50 mb-6 text-xs text-purple-200 font-mono">
        📌 ANALISIS ORIGINAL USER // DARI DISKUSI CHATGPT ARG MINECRAFT
      </div>
      <p class="first-letter:text-4xl first-letter:font-bold first-letter:text-purple-400 first-letter:mr-3 first-letter:float-left">
        Dalam setiap dunia ARG (Alternate Reality Game) Minecraft yang berkualitas tinggi, elemen teror tidak dibentuk dari monsters berwujud mengerikan atau suara jeritan keras. Teror terdalam justru muncul ketika ARG tersebut menyenggol pilar **KELUARGA**.
      </p>
      <h3 class="text-lg font-bold text-white mt-6 mb-2">1. Rumah Sebagai Ruang Perlindungan Psikologis</h3>
      <p>
        Di game Minecraft, hal pertama yang dibuat oleh setiap pemain saat pertama kali memasuki dunia baru adalah membangun **Rumah (Base)**. Rumah adalah simbol keamanan tempat kita menyimpan barang berharga dan berlindung dari kegelapan malam. Dalam konteks analogi ARG, rumah mewakili **Keluarga**—tempat di mana manusia merasa aman dan dicintai secara alami.
      </p>
      <h3 class="text-lg font-bold text-emerald-400 mt-6 mb-2">2. Teror Terhapusnya Ingatan Masa Kecil</h3>
      <p>
        Anomali dalam ARG Minecraft sering kali disertai narasi terhapusnya ingatan pemain tentang keluarganya. Karakter utama didorong rasa kerinduan mendalam untuk pulang ke rumah.
      </p>
      <div class="p-5 rounded-2xl bg-purple-950/40 border-l-4 border-purple-500 my-6">
        <p class="italic text-purple-200 text-sm leading-relaxed">
          "Ketika sebuah misteri digital menagih bayaran ingatan keluarga, pemain tidak hanya kehilangan kenangan, tetapi juga kehilangan fondasi psikologis mengapa mereka bertahan hidup."
        </p>
      </div>
      <h3 class="text-lg font-bold text-amber-400 mt-6 mb-2">3. Kesimpulan Analisis Pilar Keluarga</h3>
      <p>
        Pilar Keluarga mengajarkan bahwa ketakutan terbesar manusia bukanlah kegelapan fisik, melainkan rasa takut menjadi asing dan terlupakan oleh orang-orang terdekat di dunia nyata.
      </p>
    `
  },

  {
    id: "entry-ori-2",
    title: "Analisis Ori #2: Sisi SAHABAT & Duka Server Terbengkalai",
    author: "Analisis Original User (ChatGPT)",
    category: "Bedah ARG",
    pillar: "Pilar 2: Sahabat (Kesetiaan & Disconnect Permanen)",
    summary: "Analisis mendalam pilar SAHABAT: Mengapa bangunan kota kubus tua tahun 2011 terasa melankolis ketika teman-teman satu server tak pernah login kembali.",
    content: `
      <h2 class="text-2xl font-extrabold text-white mb-4 border-b border-emerald-800/60 pb-3">
        Analisis Ori #2: Sisi SAHABAT & Jejak Digital yang Ditinggalkan
      </h2>
      <div class="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/50 mb-6 text-xs text-emerald-200 font-mono">
        📌 ANALISIS ORIGINAL USER // DARI DISKUSI CHATGPT ARG MINECRAFT
      </div>
      <p class="first-letter:text-4xl first-letter:font-bold first-letter:text-emerald-400 first-letter:mr-3 first-letter:float-left">
        Pilar kedua dalam analisis ARG Minecraft adalah **SAHABAT**. Ini adalah aspek paling relatable bagi siapa saja yang pernah merasakan indahnya bermain game multiplayer di masa remaja.
      </p>
      <h3 class="text-lg font-bold text-white mt-6 mb-2">1. Nostalgia Server Multiplayer Tahun 2011</h3>
      <p>
        Membangun kastil, menambang diamond bersama, dan bercanda di obrolan server Discord/Teamspeak pada tahun 2011–2018 adalah kenangan emas. Namun ARG Minecraft mengeksploitasi momen nostalgia ini menjadi sebuah teror melankolis.
      </p>
      <h3 class="text-lg font-bold text-emerald-400 mt-6 mb-2">2. Fenomena "Offline 1000 Days Ago"</h3>
      <p>
        Dalam ARG, karakter utama sering menelusuri peta server tua di mana status teman-temannya tertulis *Offline 1000 hari yang lalu*. Bangunan batu dan peternakan hewan buatan sahabat masih berdiri utuh tanpa perubahan, namun sang pemilik telah pergi selamanya.
      </p>
      <div class="p-5 rounded-2xl bg-emerald-950/40 border-l-4 border-emerald-500 my-6">
        <p class="italic text-emerald-200 text-sm leading-relaxed">
          "Duka digital terberat di internet bukanlah ketika game tersebut ditutup, melainkan saat kita menyadari kawan seperjuangan kita telah tumbuh dewasa dan melanjutkan hidup tanpa pernah mengucapkan perpisahan."
        </p>
      </div>
      <h3 class="text-lg font-bold text-amber-400 mt-6 mb-2">3. Sinyal Piringan Hitam Disc 11</h3>
      <p>
        Suara derau dan langkah tergesa-gesa di *Disc 11* adalah simbol pencarian kawan yang hilang di dalam kegelapan lorong tambang—sebuah metafora perjuangan mempertahankan ikatan persahabatan yang perlahan renggang.
      </p>
    `
  },

  {
    id: "entry-ori-3",
    title: "Analisis Ori #3: Sisi PENDAMPING & Stasiun Waktu Berhenti",
    author: "Analisis Original User (ChatGPT)",
    category: "Bedah ARG",
    pillar: "Pilar 3: Pendamping (Penyelamat di Batas Akhir)",
    summary: "Analisis pilar PENDAMPING & metafora Stasiun 03:00 malam: Kehadiran seseorang yang memegang tangan kita saat dunia di sekitar kita runtuh.",
    content: `
      <h2 class="text-2xl font-extrabold text-white mb-4 border-b border-amber-800/60 pb-3">
        Analisis Ori #3: Sisi PENDAMPING & Penjaga di Stasiun 03:00
      </h2>
      <div class="p-4 rounded-xl bg-amber-950/60 border border-amber-700/50 mb-6 text-xs text-amber-200 font-mono">
        📌 ANALISIS ORIGINAL USER // DARI DISKUSI CHATGPT ARG MINECRAFT
      </div>
      <p class="first-letter:text-4xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
        Pilar ketiga adalah **PENDAMPING**. Jika pilar keluarga adalah tempat asal dan sahabat adalah rekan perjalanan, maka pendamping adalah sosok yang bersedia berada di samping kita saat batas akhir tiba.
      </p>
      <h3 class="text-lg font-bold text-white mt-6 mb-2">1. Metafora Stasiun Rel Kereta 03:00 Malam</h3>
      <p>
        Stasiun kereta dalam cerita ARG melambangkan **Ruang Liminal**—persimpangan antara penyesalan masa lalu dan keberanian melangkah ke masa depan. Pukul 03:00 malam adalah momen saat waktu berhenti, simbol ketika pikiran manusia paling rapuh menghadapi kenyataan hidup.
      </p>
      <h3 class="text-lg font-bold text-amber-400 mt-6 mb-2">2. Kehadiran Pendamping Sebagai Penyelamat</h3>
      <p>
        Saat realitas di sekitar Rian terdistorsi menjadi piksel-piksel rusak, sosok pendamping hadir sebagai penyeimbang emosional. Pendamping menguji apakah Rian sanggup melepaskan rasa bersalahnya atau terus terjebak di peron kabut.
      </p>
      <div class="p-5 rounded-2xl bg-amber-950/40 border-l-4 border-amber-500 my-6">
        <p class="italic text-amber-200 text-sm leading-relaxed">
          "Tiket keberangkatan dari stasiun waktu tidak dibeli dengan materi, melainkan dengan keikhlasan menyerahkan penyesalan agar kita bisa menghargai pendamping hidup di dunia nyata."
        </p>
      </div>
      <h3 class="text-lg font-bold text-purple-400 mt-6 mb-2">3. Kesimpulan Pilar Pendamping</h3>
      <p>
        Kehadiran pendamping memberikan kepastian bahwa meskipun misteri dunia digital sangat luas, kita tidak akan pernah benar-benar sendirian jika kita mau membuka hati.
      </p>
    `
  },

  {
    id: "entry-ori-4",
    title: "Analisis Ori #4: Sisi DIRI SENDIRI & Paranoia Singleplayer",
    author: "Analisis Original User (ChatGPT)",
    category: "Bedah ARG",
    pillar: "Pilar 4: Diri Sendiri (Konfrontasi Ketakutan Batin)",
    summary: "Analisis pilar DIRI SENDIRI: Mengapa entitas Herobrine dan bayangan hitam sejatinya adalah cermin psikologis rasa bersalah pribadi.",
    content: `
      <h2 class="text-2xl font-extrabold text-white mb-4 border-b border-rose-800/60 pb-3">
        Analisis Ori #4: Sisi DIRI SENDIRI & Konfrontasi Paranoia Batin
      </h2>
      <div class="p-4 rounded-xl bg-rose-950/60 border border-rose-700/50 mb-6 text-xs text-rose-200 font-mono">
        📌 ANALISIS ORIGINAL USER // DARI DISKUSI CHATGPT ARG MINECRAFT
      </div>
      <p class="first-letter:text-4xl first-letter:font-bold first-letter:text-rose-400 first-letter:mr-3 first-letter:float-left">
        Pilar keempat dan yang paling krusial dalam seluruh analisis ARG Minecraft adalah **DIRI SENDIRI**. Ini adalah inti dari misteri psikologis yang mendasari kisah Herobrine dan anomali server.
      </p>
      <h3 class="text-lg font-bold text-white mt-6 mb-2">1. Isolasi Mode Singleplayer</h3>
      <p>
        Mode *Singleplayer* dirancang sebagai ruang pribadi di mana pemain menjadi satu-satunya manusia yang memegang kendali atas dunia tersebut. Namun ketika timbul paranoia bahwa *'ada sosok lain yang mengawasi di balik kabut'*, rasa aman itu langsung hancur.
      </p>
      <h3 class="text-lg font-bold text-rose-400 mt-6 mb-2">2. Entitas Sebagai Cermin Psikologis</h3>
      <p>
        Bayangan hitam atau entitas mata putih yang ditemui Rian di peron seberang sejatinya bukanlah monster dari luar game. Entitas tersebut adalah proyeksi dari **rasa bersalah dan ketakutan batin Rian sendiri**—rasa takut gagal, takut ditinggalkan, dan rasa bersalah karena mengisolasi diri dari masyarakat dunia nyata.
      </p>
      <div class="p-5 rounded-2xl bg-rose-950/40 border-l-4 border-rose-500 my-6">
        <p class="italic text-rose-200 text-sm leading-relaxed">
          "Setiap misteri ARG yang kita cari di internet pada akhirnya bermuara pada satu pertanyaan mendasar: Mampukah kita berdamai dengan kekurangan dan rasa takut di dalam diri kita sendiri?"
        </p>
      </div>
      <h3 class="text-lg font-bold text-emerald-400 mt-6 mb-2">3. Resolusi Akhir</h3>
      <p>
        Ketika Rian berhasil mengakui rasa bersalahnya, bayangan di peron seberang menghilang dan pintu keberangkatan kereta menuju dunia nyata akhirnya terbuka lebar.
      </p>
    `
  }
];

// Active State
let currentReaderEntry = null;
let currentActiveChapter = 1;
let currentCategoryFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  renderCatalogGrid();
  setupScrollProgress();
});

// Storage Helpers
function getUserEntries() {
  const userEntries = localStorage.getItem('user_uploaded_args');
  if (!userEntries) return [];
  try {
    return JSON.parse(userEntries);
  } catch (e) {
    return [];
  }
}

function getAllEntries() {
  const userEntries = getUserEntries();
  return [...seedVaultEntries, ...userEntries];
}

function saveUserEntries(entries) {
  localStorage.setItem('user_uploaded_args', JSON.stringify(entries));
}

// Reading Progress Bar
function setupScrollProgress() {
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('reading-progress-bar');
    if (!bar) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    bar.style.width = scrolled + '%';
  });
}

// Tab Switcher Logic
function switchTab(tabName) {
  const views = ['catalog', 'reader', 'upload'];
  
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const btn = document.getElementById(`tab-btn-${v}`);
    if (el) {
      if (v === tabName) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
    if (btn) {
      if (v === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Category Filter Handling
function setCategoryFilter(category) {
  currentCategoryFilter = category;

  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.getElementById(`filter-pill-${category}`);
  if (activeBtn) activeBtn.classList.add('active');

  renderCatalogGrid();
}

// Render Catalog Grid
function renderCatalogGrid() {
  const grid = document.getElementById('catalog-grid');
  const countBadge = document.getElementById('catalog-count-badge');
  if (!grid) return;

  const all = getAllEntries();
  
  // Filter logic
  let filtered = all;
  if (currentCategoryFilter === 'novel') {
    filtered = all.filter(item => item.isMultiChapter || (item.category && item.category.toLowerCase().includes('novel')));
  } else if (currentCategoryFilter === 'analysis') {
    filtered = all.filter(item => item.category && (item.category.includes('Bedah') || item.category.includes('Analisis')));
  } else if (currentCategoryFilter === 'user') {
    filtered = all.filter(item => item.isUserCustom);
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} dari ${all.length} Karya Ditampilkan`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full p-8 rounded-2xl bg-[#111320] border border-slate-800 text-center space-y-3">
        <i data-lucide="folder-x" class="w-10 h-10 text-slate-500 mx-auto"></i>
        <h4 class="text-sm font-bold text-slate-300">Belum ada karya pada kategori ini</h4>
        <p class="text-xs text-slate-500">Klik "+ Tulis / Upload ARG" untuk menambahkan naskah buatanmu sendiri!</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isNovel = item.isMultiChapter;
    const badgeBg = isNovel ? 'bg-purple-950/80 text-purple-300 border-purple-800/50' : 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50';

    return `
      <div class="p-6 rounded-2xl bg-[#111320] border border-slate-800 hover:border-purple-600/60 transition-all flex flex-col justify-between space-y-4 group relative shadow-lg">
        <div class="space-y-3 cursor-pointer" onclick="openReader('${item.id}')">
          <div class="flex items-start justify-between gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${badgeBg}">
              ${escapeHtml(item.category || 'ARG Mystery')}
            </span>
            <span class="text-[10px] font-mono text-slate-500">${escapeHtml(item.author || 'Anonim')}</span>
          </div>

          <h4 class="text-base font-extrabold text-white group-hover:text-purple-300 transition-colors leading-snug">
            ${escapeHtml(item.title)}
          </h4>

          <p class="text-xs text-slate-300 leading-relaxed">
            ${escapeHtml(item.summary)}
          </p>
        </div>

        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
          <span class="text-purple-400 font-bold cursor-pointer" onclick="openReader('${item.id}')">
            ${item.pillar ? escapeHtml(item.pillar) : 'Bedah Analisis ARG'}
          </span>

          <div class="flex items-center gap-2">
            ${item.isUserCustom ? `
              <button onclick="editUserEntry('${item.id}', event)" title="Edit Naskah Ini" class="p-1.5 rounded-lg bg-slate-800 hover:bg-purple-900/60 text-slate-300 hover:text-purple-300 transition-all">
                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="deleteUserEntry('${item.id}', event)" title="Hapus Naskah Ini" class="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-400 transition-all">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            ` : ''}
            <button onclick="openReader('${item.id}')" class="flex items-center gap-1 text-purple-400 hover:text-purple-300 font-bold transition-all">
              <span>Baca</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// Reading Time Estimator
function updateReadingTime(htmlContent) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const text = tempDiv.textContent || tempDiv.innerText || '';
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  
  const el = document.getElementById('reader-reading-time');
  if (el) {
    el.innerHTML = `
      <i data-lucide="clock" class="w-3.5 h-3.5 text-purple-400"></i>
      <span>~${minutes} menit baca (${words} kata)</span>
    `;
    if (window.lucide) lucide.createIcons();
  }
}

// Open Reader Engine
function openReader(id) {
  const entries = getAllEntries();
  const entry = entries.find(e => e.id === id);
  if (!entry) return;

  currentReaderEntry = entry;
  const readerBody = document.getElementById('reader-body');
  const chapTabsContainer = document.getElementById('reader-chapter-tabs');

  if (!readerBody) return;

  if (entry.isMultiChapter && entry.chapters) {
    chapTabsContainer.classList.remove('hidden');
    chapTabsContainer.innerHTML = Object.keys(entry.chapters).map(chapNum => {
      return `
        <button id="reader-chap-btn-${chapNum}" onclick="loadReaderChapter(${chapNum})" class="chap-tab ${chapNum == 1 ? 'active bg-purple-600 text-white' : 'bg-[#111320] text-slate-400'} px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0">
          ${entry.chapters[chapNum].title}
        </button>
      `;
    }).join('');

    loadReaderChapter(1);
  } else {
    chapTabsContainer.classList.add('hidden');
    readerBody.innerHTML = `
      <div class="mb-6 pb-4 border-b border-slate-800">
        <span class="px-2.5 py-1 rounded-full bg-purple-950 text-purple-300 text-xs font-mono border border-purple-800/40 inline-block mb-2">${escapeHtml(entry.category)}</span>
        <h2 class="text-2xl font-extrabold text-white">${escapeHtml(entry.title)}</h2>
        <p class="text-xs text-slate-400 mt-1">${escapeHtml(entry.author)} | ${escapeHtml(entry.pillar)}</p>
      </div>
      <div class="space-y-4">
        ${entry.content}
      </div>
    `;
    updateReadingTime(entry.content);
  }

  switchTab('reader');
}

function loadReaderChapter(chapNum) {
  if (!currentReaderEntry || !currentReaderEntry.chapters) return;
  currentActiveChapter = chapNum;
  const chap = currentReaderEntry.chapters[chapNum];
  const readerBody = document.getElementById('reader-body');

  if (chap && readerBody) {
    readerBody.innerHTML = `
      <h2 class="text-2xl font-extrabold text-white mb-6 border-b border-slate-800 pb-3">${chap.title}</h2>
      <div class="space-y-4">
        ${chap.content}
      </div>
    `;
    updateReadingTime(chap.content);
  }

  document.querySelectorAll('.chap-tab').forEach(btn => {
    btn.classList.remove('bg-purple-600', 'text-white', 'active');
    btn.classList.add('bg-[#111320]', 'text-slate-400');
  });

  const activeBtn = document.getElementById(`reader-chap-btn-${chapNum}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-[#111320]', 'text-slate-400');
    activeBtn.classList.add('bg-purple-600', 'text-white', 'active');
  }

  window.scrollTo({ top: 120, behavior: 'smooth' });

  if (window.lucide) lucide.createIcons();
}

// Download Active Story as TXT
function downloadCurrentStory() {
  if (!currentReaderEntry) return;

  let title = currentReaderEntry.title;
  let textContent = `=== ${currentReaderEntry.title} ===\n`;
  textContent += `Penulis: ${currentReaderEntry.author || 'Anonim'}\n`;
  textContent += `Kategori: ${currentReaderEntry.category || 'Misteri ARG'}\n`;
  textContent += `Pilar: ${currentReaderEntry.pillar || '-'}\n\n`;
  textContent += `SINOPSIS:\n${currentReaderEntry.summary}\n\n`;
  textContent += `-----------------------------------------\n\n`;

  if (currentReaderEntry.isMultiChapter && currentReaderEntry.chapters) {
    const chap = currentReaderEntry.chapters[currentActiveChapter];
    title = `${currentReaderEntry.title} - ${chap.title}`;
    const cleanBody = chap.content.replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n\n');
    textContent += `${chap.title}\n\n${cleanBody}`;
  } else {
    const cleanBody = currentReaderEntry.content.replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n\n');
    textContent += cleanBody;
  }

  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/[^a-zA-Z0-9_-]/g, '_')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Export Vault Data as JSON
function exportVaultData() {
  const userEntries = getUserEntries();
  const exportPayload = {
    exportedAt: new Date().toISOString(),
    version: "2.5",
    author: "User",
    entries: userEntries
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `arg_vault_backup_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Trigger & Handle Import File
function triggerImportFile() {
  const fileInput = document.getElementById('import-file-input');
  if (fileInput) fileInput.click();
}

function handleImportFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      let newItems = [];
      if (Array.isArray(data)) {
        newItems = data;
      } else if (data.entries && Array.isArray(data.entries)) {
        newItems = data.entries;
      } else {
        throw new Error('Format file JSON tidak valid.');
      }

      const existing = getUserEntries();
      const existingIds = new Set(existing.map(x => x.id));
      let addedCount = 0;

      newItems.forEach(item => {
        if (item.title && (item.content || item.summary)) {
          if (!item.id || existingIds.has(item.id)) {
            item.id = 'imported-arg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
          }
          item.isUserCustom = true;
          existing.unshift(item);
          addedCount++;
        }
      });

      saveUserEntries(existing);
      renderCatalogGrid();
      alert(`🎉 Berhasil mengimpor ${addedCount} karya ARG ke katalog!`);
    } catch (err) {
      alert('Gagal mengimpor file: ' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// Handle Custom Upload & Edit Form
function handleUploadARG(e) {
  e.preventDefault();

  const mode = document.getElementById('upload-mode').value;
  const editId = document.getElementById('upload-id').value;

  const title = document.getElementById('upload-title').value.trim();
  const author = document.getElementById('upload-author').value.trim() || 'Kreator Anonim';
  const category = document.getElementById('upload-category').value;
  const pillar = document.getElementById('upload-pillar').value;
  const summary = document.getElementById('upload-summary').value.trim();
  const rawContent = document.getElementById('upload-content').value.trim();

  if (!title || !summary || !rawContent) {
    alert('Mohon lengkapi Judul, Ringkasan, dan Isi Cerita!');
    return;
  }

  const formattedContent = rawContent.split('\n\n').map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('');

  let userEntries = getUserEntries();

  if (mode === 'edit' && editId) {
    // Edit existing entry
    userEntries = userEntries.map(item => {
      if (item.id === editId) {
        return {
          ...item,
          title,
          author,
          category,
          pillar,
          summary,
          content: formattedContent
        };
      }
      return item;
    });

    saveUserEntries(userEntries);
    cancelEditMode();
    renderCatalogGrid();
    openReader(editId);
    alert('✅ Cerita ARG berhasil diperbarui!');
  } else {
    // Create new entry
    const newEntry = {
      id: 'user-arg-' + Date.now(),
      title,
      author,
      category,
      pillar,
      summary,
      content: formattedContent,
      isMultiChapter: false,
      isUserCustom: true
    };

    userEntries.unshift(newEntry);
    saveUserEntries(userEntries);
    renderCatalogGrid();
    document.getElementById('upload-arg-form').reset();
    openReader(newEntry.id);
  }
}

// Edit User Entry Action
function editUserEntry(id, event) {
  if (event) event.stopPropagation();

  const userEntries = getUserEntries();
  const entry = userEntries.find(x => x.id === id);
  if (!entry) return;

  document.getElementById('upload-mode').value = 'edit';
  document.getElementById('upload-id').value = entry.id;

  document.getElementById('upload-title').value = entry.title;
  document.getElementById('upload-author').value = entry.author;
  document.getElementById('upload-category').value = entry.category;
  document.getElementById('upload-pillar').value = entry.pillar;
  document.getElementById('upload-summary').value = entry.summary;

  // Convert HTML paragraphs back to clean plain text
  const cleanBody = entry.content.replace(/<\/p><p>/g, '\n\n').replace(/<[^>]+>/g, '');
  document.getElementById('upload-content').value = cleanBody;

  document.getElementById('form-heading').textContent = 'Edit Naskah Cerita ARG';
  document.getElementById('submit-btn-text').textContent = 'Simpan Perubahan';
  document.getElementById('cancel-edit-btn').classList.remove('hidden');

  switchTab('upload');
}

// Cancel Edit Mode
function cancelEditMode() {
  document.getElementById('upload-mode').value = 'create';
  document.getElementById('upload-id').value = '';
  document.getElementById('upload-arg-form').reset();
  document.getElementById('form-heading').textContent = 'Upload Cerita / Analisis ARG Kamu';
  document.getElementById('submit-btn-text').textContent = 'Publikasikan ARG';
  document.getElementById('cancel-edit-btn').classList.add('hidden');
}

// Delete User Entry Action
function deleteUserEntry(id, event) {
  if (event) event.stopPropagation();

  if (confirm('Apakah kamu yakin ingin menghapus karya ARG ini dari katalog?')) {
    let userEntries = getUserEntries();
    userEntries = userEntries.filter(item => item.id !== id);
    saveUserEntries(userEntries);
    renderCatalogGrid();
  }
}

// Reader Font & Size controls
function changeReaderFont(fontClass) {
  const el = document.getElementById('reader-body');
  if (el) {
    el.classList.remove('font-serif', 'font-sans', 'font-mono');
    el.classList.add(fontClass);
  }
}

function changeReaderSize(sizeClass) {
  const el = document.getElementById('reader-body');
  if (el) {
    el.classList.remove('text-sm', 'text-base', 'text-lg');
    el.classList.add(sizeClass);
  }
}

// Helper HTML Escape
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ==========================================
// WEB AUDIO API SYNTHESIZER AMBIENCE PLAYER
// ==========================================
let audioCtx = null;
let isAmbiencePlaying = false;
let masterGain = null;
let activeSoundNodes = [];

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = parseFloat(document.getElementById('ambience-vol').value || 0.3);
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function toggleAmbience() {
  initAudioContext();
  const btn = document.getElementById('ambience-play-btn');
  const icon = document.getElementById('ambience-icon');

  if (isAmbiencePlaying) {
    stopAmbienceSound();
    isAmbiencePlaying = false;
    btn.classList.remove('bg-emerald-600', 'animate-pulse');
    btn.classList.add('bg-purple-600');
    icon.setAttribute('data-lucide', 'play');
  } else {
    playAmbienceSound();
    isAmbiencePlaying = true;
    btn.classList.remove('bg-purple-600');
    btn.classList.add('bg-emerald-600', 'animate-pulse');
    icon.setAttribute('data-lucide', 'pause');
  }

  if (window.lucide) lucide.createIcons();
}

function setAmbienceVolume(val) {
  if (masterGain) {
    masterGain.gain.setValueAtTime(parseFloat(val), audioCtx.currentTime);
  }
}

function changeAmbienceMode() {
  if (isAmbiencePlaying) {
    stopAmbienceSound();
    playAmbienceSound();
  }
}

function stopAmbienceSound() {
  activeSoundNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (e) {}
  });
  activeSoundNodes = [];
}

function playAmbienceSound() {
  stopAmbienceSound();
  const mode = document.getElementById('ambience-mode').value;

  if (mode === 'radio') {
    playRadioNoise();
  } else if (mode === 'rain') {
    playRainSound();
  } else if (mode === 'void') {
    playVoidDrone();
  }
}

// Mode 1: Radio Disc 11 Noise
function playRadioNoise() {
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = (Math.random() * 2 - 1) * 0.25;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  const bandpass = audioCtx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.value = 1200;
  bandpass.Q.value = 2.0;

  whiteNoise.connect(bandpass);
  bandpass.connect(masterGain);
  whiteNoise.start();

  activeSoundNodes.push(whiteNoise, bandpass);
}

// Mode 2: Rain Ambience
function playRainSound() {
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    output[i] = (lastOut + (0.02 * white)) / 1.02;
    lastOut = output[i];
    output[i] *= 3.5;
  }

  const rainSource = audioCtx.createBufferSource();
  rainSource.buffer = noiseBuffer;
  rainSource.loop = true;

  const lowpass = audioCtx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 800;

  rainSource.connect(lowpass);
  lowpass.connect(masterGain);
  rainSource.start();

  activeSoundNodes.push(rainSource, lowpass);
}

// Mode 3: Void Space Drone
function playVoidDrone() {
  const freqs = [65.41, 98.00, 130.81]; // C2, G2, C3 chord
  freqs.forEach(f => {
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = f;

    const gain = audioCtx.createGain();
    gain.gain.value = 0.15;

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start();

    activeSoundNodes.push(osc, gain);
  });
}
