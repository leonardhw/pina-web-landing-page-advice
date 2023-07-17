import Image from 'next/image';
import shieldIcon from '../../public/static/images/shield.svg';
import stampIcon from '../../public/static/images/stamp.svg';
import stamCheckIcon from '../../public/static/images/stamp-check.svg';
import Link from 'next/link';
import Accordion from '@/components/Accordion';

export const metadata = {
  title: 'Wealth Management Platform: Capai Tujuan Keuangan Dengan PINA',
  description:
    'Dapatkan solusi keuangan terbaik dari PINA, wealth management platform yang menyediakan akses ke financial planner berpengalaman untuk bantu kamu capai tujuan keuangan.',
};

export default function Home() {
  const faqData = [
    {
      question: 'Apa itu PINA?',
      answer:
        'Kami adalah platform digital wealth management yang memberikan saran keuangan personal untuk membantu pengguna mencapai tujuan keuangan mereka. Kami menggabungkan fitur keuangan canggih dengan akses ke perencana keuangan untuk memberikan pengalaman konsultasi yang biasanya hanya tersedia bagi pengguna yang memiliki fasilitas khusus.',
    },
    {
      question: 'Apa bedanya wealth management dengan perencanaan keuangan?',
      answer:
        'Wealth management berfokus pada tujuan untuk mempertahankan dan meningkatkan aset dalam jangka panjang. Sementara itu, perencanaan keuangan berfokus untuk membantu klien mencapai tujuan tertentu dalam jangka pendek atau menengah.',
    },
  ];

  console.log(faqData, 'DARI HOME FAQ DATA');
  return (
    <main className=''>
      {/* Hero */}
      <section className='bg-pina-yellow-2'>
        <div className='mx-auto flex max-w-8xl max-2xl:pl-4'>
          <div className='flex w-full flex-col justify-center gap-6 py-24 pr-12'>
            <h1 className='text-pina-smoke-1'>
              Wealth Management Platform Pertama di Indonesia
            </h1>
            <h5 className='leading-relaxed text-pina-smoke-1'>
              Tumbuhkan kekayaan dan capai financial goal cukup di 1 platform
              keuangan bersama Financial Planner berpengalaman
            </h5>
            <div className='flex items-center gap-4'>
              <Link href='https://www.youtube.com'>
                <Image
                  src='/static/images/app-store-download.png'
                  width={150}
                  height={200}
                  alt='appstore download'
                />
              </Link>
              <Link href='https://google.com'>
                <Image
                  src='/static/images/gplay-download-1.png'
                  width={150}
                  height={200}
                  alt='playstore download'
                />
              </Link>
            </div>
          </div>
          <Image
            src='/static/images/capai-financial-goal-dengan-pina.jpg'
            width={500}
            height={0}
            className='w-full object-cover object-center'
            alt='capai financial goal dengan pina'
          />
        </div>
      </section>

      <section className='bg-white py-12'>
        <div className='mx-auto max-w-7xl pb-24 max-2xl:px-4'>
          <div className='grid grid-cols-2'>
            <h2 className='max-w-lg'>
              Miliki Konsultan Keuangan Pribadi dalam Genggaman
            </h2>
            <h5 className='font-normal leading-9'>
              Buat keputusan keuangan yang tepat langsung dengan Konsultan
              Keuangan Pribadi bersertifikat. Aplikasi keuangan khusus untuk
              kamu yang ingin capai tujuan finansial dengan kelola keuangan,
              budgeting, dan investasi yang benar sesuai kondisi keuangan.
            </h5>
          </div>
        </div>
      </section>

      <section className='bg-pina-smoke-2 py-12'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid text-white md:grid-cols-3'>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col gap-4'>
                <Image src={stamCheckIcon} height={79} alt='Certified icon' />
                <h4 className='mt-6 text-white'>
                  Certified <br /> Financial Planner
                </h4>
                <p className='max-w-2xs'>
                  Konsultan keuangan bersertifikasi siap berikan solusi terbaik
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col gap-4'>
                <Image src={stampIcon} height={79} alt='Certified icon' />
                <h4 className='mt-6 text-white'>
                  Integrasi <br /> Platform Teknologi
                </h4>
                <p className='max-w-2xs'>
                  Capai tujuan keuangan lebih mudah didukung Financial Tools
                  lengkap
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex flex-col gap-4'>
                <Image src={shieldIcon} height={79} alt='Certified icon' />
                <h4 className='mt-6 text-white'>
                  Jaminan <br /> Keamanan Data
                </h4>
                <p className='max-w-2xs'>
                  Data pribadi dan keuangan adalah prioritas keamanan PINA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white pt-12'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='pb-12'>
            <h1 className='text-center'>
              Strategi Finansial dengan Tools yang Tepat
            </h1>
            <h5 className='mt-6 text-center font-normal leading-normal'>
              Rekomendasi strategi keuangan dari ahli dan tools finansial
              canggih untuk setiap kebutuhan kamu
            </h5>
          </div>

          <div className='grid md:grid-cols-2'>
            {/* Carousel */}
            <div className=''>
              <swiper-container
                // init='false'
                pagination='true'
                pagination-clickable='true'
                centered-slides='true'
                grab-cursor='true'
                autoplay-delay='5000'
                autoplay-disable-on-interaction='false'
              >
                <swiper-slide>
                  <Image
                    src='/static/images/jadwal-konsultasi-keuangan-pina.png'
                    height={100}
                    width={900}
                    alt=''
                    loading='lazy'
                  />
                </swiper-slide>
                <swiper-slide>
                  <Image
                    src='/static/images/sesi-konsultasi-keuangan-pina.png'
                    height={100}
                    width={900}
                    alt=''
                    loading='lazy'
                  />
                </swiper-slide>
                <swiper-slide>
                  <Image
                    src='/static/images/laporan-konsultasi-keuangan-pina.png'
                    height={100}
                    width={900}
                    alt=''
                    loading='lazy'
                  />
                </swiper-slide>
              </swiper-container>
            </div>

            <div className='flex flex-col justify-center gap-4 pl-4'>
              <h2>Konsultan Keuangan Pribadi</h2>
              <h5 className='font-normal leading-normal'>
                Ketahui kondisi kesehatan keuangan dan konsultasikan kebutuhanmu
                ke Financial Planner berpengalaman PINA untuk dapatkan strategi
                yang tepat.
              </h5>
              <Link href='#'>
                <span
                  className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-4 py-3 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
                  href='#'
                >
                  Konsultasi Sekarang
                </span>
              </Link>
            </div>
          </div>

          <div className=''>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col justify-center pr-6'>
                <h2>Aplikasi Keuangan Lengkap</h2>
                <ul className='mt-8 list-outside list-disc pl-6'>
                  <li>
                    <h5 className='font-normal leading-normal'>
                      Akses mobile application yang dilengkapi fitur perencanaan
                      budget, monitor cash flow hingga net worth tracking untuk
                      memantau kondisi keuangan pengguna secara berkala.
                    </h5>
                    <br />
                    <Link
                      href='/'
                      className='text-2xl font-normal leading-normal text-pina-yellow-1 underline'
                    >
                      Pelajari Selengkapnya
                    </Link>
                  </li>
                  <br />
                  <li>
                    <h5 className='font-normal leading-normal'>
                      Aplikasi dengan investasi otomatis dan kostumasi
                      penempatan aset portfolio (diversifikasi) berdasarkan
                      tujuan keuangan.
                    </h5>
                    <br />
                    <Link
                      href='/'
                      className='text-2xl font-normal leading-normal text-pina-yellow-1 underline'
                    >
                      Pelajari Selengkapnya
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='relative min-h-[1150px]'>
                <Image
                  src='/static/images/aplikasi-manajemen-keuangan-pina.png'
                  width={632}
                  height={30}
                  alt=''
                  className='absolute -left-20 top-0'
                />
                <Image
                  src='/static/images/grafik-portofolio-investasi.png'
                  width={256}
                  height={30}
                  alt=''
                  className='top-30 absolute right-0 top-28'
                />
                <Image
                  src='/static/images/investasi-di-pina.png'
                  width={968}
                  height={30}
                  alt=''
                  className='top-30 absolute bottom-0 left-0'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid items-center pb-12 md:grid-cols-2'>
            <h1>Buat Rencana Keuangan</h1>
            <h5 className='font-normal leading-normal'>
              Bingung mau mulai darimana? PINA sediakan rencana dan strategi
              kelola kekayaan secara lengkap dengan akses konsultasi keuangan
              24/7.
            </h5>
          </div>

          <div className='grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3'>
            {/* Card */}
            <div className='w-full overflow-hidden rounded-xl bg-white shadow-card'>
              <div className='aspect-[4/5] overflow-hidden'>
                <Image
                  src='/static/images/tabungan-dana-darurat.jpg'
                  className=''
                  alt='tabungan dana darurat pina'
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-6'>
                <h3>
                  Tabungan <br /> Dana Darurat
                </h3>
                <p>
                  Cari tahu berapa besar dana darurat yang dibutuhkan. Apakah
                  6x, 9x, atau 12x dari pengeluaran?
                </p>
                <Link href='#'>
                  <span
                    className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-6 py-3 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
                    href='#'
                  >
                    Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-white shadow-card'>
              <div className='aspect-[4/5] overflow-hidden'>
                <Image
                  src='/static/images/tabungan-dana-pendidikan.jpg'
                  className=''
                  alt='tabungan dana pendidikan pina'
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-6'>
                <h3>
                  Tabungan <br /> Dana Pendidikan
                </h3>
                <p>
                  Strategi siapkan dana pendidikan agar masa depan anak tidak
                  terhambat
                </p>
                <Link href='#'>
                  <span
                    className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-6 py-3 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
                    href='#'
                  >
                    Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-white shadow-card'>
              <div className='aspect-[4/5] overflow-hidden'>
                <Image
                  src='/static/images/pilihan-asuransi-yang-tepat.jpg'
                  className=''
                  alt='rekomendasi perlindungan asuransi'
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-6'>
                <h3>
                  Perlindungan <br /> Asuransi
                </h3>
                <p>
                  Dapatkan hitungan premi asuransi dengan harga terbaik sesuai
                  kondisi keuangan kamu
                </p>
                <Link href='#'>
                  <span
                    className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-6 py-3 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
                    href='#'
                  >
                    Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-white shadow-card'>
              <div className='aspect-[4/5] overflow-hidden'>
                <Image
                  src='/static/images/beli-rumah-kpr.jpg'
                  className='h-auto w-full object-cover object-center'
                  alt='rencana beli rumah kpr'
                  width={397}
                  height={500}
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-6'>
                <h3>
                  Rencana <br /> Beli Rumah
                </h3>
                <p>
                  Mau beli rumah cash atau KPR? Cari tahu metode tepat sesuai
                  dengan kondisi keuanganmu
                </p>
                <Link href='#'>
                  <span
                    className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-6 py-3 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
                    href='#'
                  >
                    Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-white shadow-card'>
              <div className='aspect-[4/5] overflow-hidden'>
                <Image
                  src='/static/images/rencana-dana-pensiun-pina.jpg'
                  className=''
                  alt='rencana tabungan pensiun pina'
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-6'>
                <h3>
                  Tabungan <br /> Dana Pensiun
                </h3>
                <p>
                  Pensiun di usia idaman? Buat rencana pensiun kamu jadi
                  kenyataan!
                </p>
                <Link href='#'>
                  <span
                    className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-6 py-3 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
                    href='#'
                  >
                    Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-white shadow-card'>
              <div className='aspect-[4/5] overflow-hidden'>
                <Image
                  src='/static/images/strategi-manajemen-hutang.jpg'
                  className=''
                  alt='strategi manajemen hutang'
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-6'>
                <h3>
                  Manajemen <br /> Utang
                </h3>
                <p>
                  Cari solusi keluar dari jebakan utang dan lunasi utang tepat
                  waktu
                </p>
                <Link href='#'>
                  <span
                    className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-6 py-3 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
                    href='#'
                  >
                    Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='pb-12'>
            <h1 className='text-center'>
              Solusi Finansial untuk Setiap Kebutuhan
            </h1>
            <h5 className='mt-6 text-center font-normal leading-normal'>
              Metode teruji untuk mengatur keuangan berdasarkan kondisi dan
              kebutuhan saat ini.
            </h5>
          </div>

          <div className='grid grid-cols-1 gap-4 pt-12 md:grid-cols-2'>
            <div className='w-full overflow-hidden rounded-xl bg-pina-smoke-4'>
              <div className='aspect-[600/490] w-full overflow-hidden bg-red-300'>
                <img
                  src='/static/images/strategi-keuangan-dasar.jpg'
                  className='h-auto w-full object-cover object-center'
                  alt='strategi-keuangan-untuk-fresh-graduate'
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-8'>
                <h3>Strategi Keuangan Fresh Graduate</h3>
                <p>
                  Mulai lembaran baru yang seru sekaligus menakutkan, biar tidak
                  salah jalan, berikut rencana keuangan yang perlu Fresh
                  Graduate siapkan:
                </p>
                <ul className='list-inside list-disc pl-4'>
                  <li>Menyusun anggaran</li>
                  <li>Membuat rencana tabungan</li>
                  <li>Menyiapkan dana darurat</li>
                  <li>Mitigasi risiko</li>
                </ul>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-pina-smoke-4'>
              <div className='aspect-[600/490] w-full overflow-hidden bg-red-300'>
                <img
                  src='/static/images/manajemen-keuangan-sandwich-gen.jpg'
                  className='h-auto w-full object-cover object-center'
                  alt='rekomendasi kelola keuangan sandwich generation'
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-8'>
                <h3>Manajemen Keuangan Sandwich Generation</h3>
                <p>
                  Khawatir tidak bisa menanggung kebutuhan orang tua dan anak?
                  Ringankan beban pikiran dengan rencana keuangan tepat dengan:
                </p>
                <ul className='list-inside list-disc pl-4'>
                  <li>Pengelolaan cash flow</li>
                  <li>Manajemen pendapatan</li>
                  <li>Mitigasi risiko</li>
                </ul>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-pina-smoke-4'>
              <div className='aspect-[600/490] w-full overflow-hidden bg-red-300'>
                <img
                  src='/static/images/saran-keuangan-rumah-tangga.jpg'
                  className='h-auto w-full object-cover object-center'
                  alt='rekomendasi financial finance'
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-8'>
                <h3>Bangun Kesejahteraan Keluarga</h3>
                <p>
                  Lindungi aset dan buat keputusan investasi yang bijak untuk
                  berikan keluargamu yang terbaik dengan rekomendasi di bawah
                  ini:
                </p>
                <ul className='list-inside list-disc pl-4'>
                  <li>Strategi investasi</li>
                  <li>Rencana tabungan pendidikan</li>
                  <li>Mitigasi risiko</li>
                </ul>
              </div>
            </div>
            <div className='w-full overflow-hidden rounded-xl bg-pina-smoke-4'>
              <div className='aspect-[600/490] w-full overflow-hidden bg-red-300'>
                <img
                  src='/static/images/saran-keuangan-single-parent.jpg'
                  className='h-auto w-full object-cover object-center'
                  alt='saran keuangan single parent'
                />
              </div>
              <div className='flex min-h-[400px] flex-col gap-4 p-8'>
                <h3>Strategi Keuangan Single Parent</h3>
                <p>
                  Kamu sedang memulihkan keamanan finansial dan beradaptasi
                  dengan satu pendapatan? Berikut beberapa rencana keuangan yang
                  cocok untukmu:
                </p>
                <ul className='list-inside list-disc pl-4'>
                  <li>Pengelolaan cash flow</li>
                  <li>Tetapkan tujuan keuangan baru</li>
                  <li>Berinvestasi untuk masa depan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-pina-yellow-1 py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1>Solusi Kesehatan Finansial Paling Lengkap</h1>
          <table className='mt-8 min-w-full divide-y divide-black'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='mx-auto px-6 py-3 text-center text-2xl font-semibold capitalize text-pina-smoke-2 '
                ></th>
                <th
                  scope='col'
                  className='mx-auto px-6 py-3 text-center text-2xl font-semibold capitalize text-pina-smoke-2 '
                >
                  Pina
                </th>
                <th
                  scope='col'
                  className='mx-auto px-6 py-3 text-center text-2xl font-semibold capitalize text-pina-smoke-2 '
                >
                  Bank
                </th>
                <th
                  scope='col'
                  className='mx-auto px-6 py-3 text-center text-2xl font-semibold capitalize text-pina-smoke-2 '
                >
                  Financial <br /> Planner
                </th>
                <th
                  scope='col'
                  className='mx-auto px-6 py-3 text-center text-2xl font-semibold capitalize text-pina-smoke-2 '
                >
                  Aplikasi <br /> Investasi
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-black'>
              <tr>
                <th className='max-w-[120px] px-6 py-3 text-left text-2xl font-semibold capitalize leading-snug text-pina-smoke-2'>
                  Financial <br /> Check up
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className='max-w-[120px] px-6 py-3 text-left text-2xl font-semibold capitalize leading-snug text-pina-smoke-2'>
                  One on One <br /> Consultation
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className='max-w-[120px] px-6 py-3 text-left text-2xl font-semibold capitalize leading-snug text-pina-smoke-2'>
                  Aplikasi Keuangan
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className='max-w-[120px] px-6 py-3 text-left text-2xl font-semibold capitalize leading-snug text-pina-smoke-2'>
                  Aplikasi <br /> Investasi
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
              </tr>
              <tr>
                <th className='mx-auto max-w-[120px] px-6 py-3 text-left text-2xl font-semibold capitalize leading-snug text-pina-smoke-2'>
                  Perencanaan <br />
                  Tujuan Keuangan
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className='max-w-[120px] px-6 py-3 text-left text-2xl font-semibold capitalize leading-snug text-pina-smoke-2'>
                  One on One Coaching
                </th>
                <td className='mx-auto'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
                <td className='mx-auto'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto'
                  />
                </td>
                <td className='text-center'>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='bg-pina-yellow-3 py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1>Mulai Bersama Pina</h1>
          <div className='mt-12 grid grid-cols-1 gap-8'>
            <div className='grid grid-cols-2'>
              <div className='flex gap-6'>
                <div className=''>
                  <div className='border-b-2 border-black pb-4'>
                    <h3 className=''>1</h3>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='border-b-2 border-black pb-4'>
                    <h3>Daftar & Buat Akun PINA</h3>
                  </div>
                  <h5 className='font-normal leading-normal'>
                    Beri tahu PINA kondisi keuanganmu saat ini.
                  </h5>
                  <div className='flex gap-4'>
                    <Image
                      src='/static/images/app-store-download.png'
                      width={150}
                      height={200}
                    />
                    <Image
                      src='/static/images/gplay-download-1.png'
                      width={150}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className='relative'>
                <Image
                  src='/static/images/buat-akun-pina.png'
                  width={386}
                  height={611}
                  alt='buat akun di PINA'
                  className='mx-auto -mt-20 ml-40'
                />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex gap-6'>
                <div className=''>
                  <div className='border-b-2 border-black pb-4'>
                    <h3 className=''>2</h3>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='border-b-2 border-black pb-4'>
                    <h3>Konsultasi Rutin</h3>
                  </div>
                  <h5 className='font-normal leading-normal'>
                    Algoritma canggih PINA akan mengarahkan Kamu dengan
                    Certified Financial Planner khusus yang memahami kebutuhan
                    Kamu. Mereka akan memberikan saran sesuai kebutuhan kamu
                    untuk mencapai tujuan keuangan.
                  </h5>
                </div>
              </div>
              <div className='relative '>
                <Image
                  src='/static/images/konsultasi-keuangan-rutin.png'
                  width={386}
                  height={611}
                  alt='konsultasi-cfp-berkala'
                  className='mx-auto -mt-20 ml-40'
                />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex gap-6'>
                <div className=''>
                  <div className='border-b-2 border-black pb-4'>
                    <h3 className=''>3</h3>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='border-b-2 border-black pb-4'>
                    <h3>Dapatkan Rencana Keuangan</h3>
                  </div>
                  <h5 className='font-normal leading-normal'>
                    Certified Financial Planner Kamu akan membuat rencana
                    komprehensif yang disesuaikan dengan keadaanmu. Mereka akan
                    memandu Kamu melalui rekomendasi keuangan dan, jika Kamu
                    suka dengan rekomendasinya, waktunya mewujudkan tujuan
                    keuanganmu.
                  </h5>
                </div>
              </div>
              <div className='relative '>
                <Image
                  src='/static/images/buat-akun-pina.png'
                  width={386}
                  height={611}
                  alt='laporan rencana keuangan pina
                  Reply'
                  className='mx-auto -mt-20 ml-40'
                />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex gap-6'>
                <div className=''>
                  <div className='border-b-2 border-black pb-4'>
                    <h3 className=''>4</h3>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='border-b-2 border-black pb-4'>
                    <h3>Pantau dan Pendampingan</h3>
                  </div>
                  <h5 className='font-normal leading-normal'>
                    Pastikan asetmu selalu bertumbuh dan keuanganmu tetap berada
                    di jalur yang tepat dengan fitur-fitur canggih yang ada di
                    PINA.
                  </h5>
                </div>
              </div>
              <div className='relative '>
                <Image
                  src='/static/images/pantau-portofolio-tujuan-investasi.png'
                  width={386}
                  height={611}
                  alt='pantau pergerakan tujuan investasi'
                  className='mx-auto -mt-20 ml-40'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-pina-yellow-1 py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='mb-24'>
            Financial Planner Ahli Berbagai Bidang dengan Spesialisasi
            Masing-Masing
          </h1>
          <div className='mt-12 grid gap-12 md:grid-cols-2'>
            <div className='grid aspect-square w-[544px] grid-cols-2 gap-6'>
              <Image
                src='/static/images/cfp-cfp-pina-maryadi.jpg'
                width={272}
                height={272}
                className='aspect-square rounded-full object-cover object-center'
                alt='cfp asuransi pina maryadi'
              />
              <Image
                src='/static/images/cfp-rista.jpg'
                width={272}
                height={272}
                className='aspect-square rounded-full object-cover object-center'
                alt='cfp family finance pina rista'
              />
              <Image
                src='/static/images/cfp-cfp-pina-sayoga.jpg'
                width={272}
                height={272}
                className='aspect-square rounded-full object-cover object-center'
                alt='cfp syariah pina sayoga'
              />
              <Image
                src='/static/images/cfp-cfp-pina-vincent.jpg'
                width={272}
                height={272}
                className='aspect-square rounded-full object-cover object-center'
                alt='cfp tax planner pina vincent'
              />
            </div>

            <div className='flex flex-col justify-center gap-4'>
              <h4>Certified Financial Planner®</h4>
              <h5 className='font-normal leading-normal'>
                Kelola kekayaanmu bersama Perencana Keuangan (CFP®) PINA dengan
                spesialisasi dan ahli di berbagai macam bidang.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='flex flex-col items-center justify-center pb-12'>
            <h1 className='text-center'>Prioritas Keamanan PINA</h1>
            <h5 className='mt-8 text-center'>
              Terdaftar sebagai PSE di Kominfo
            </h5>
            <Image
              src='/static/images/logo-kominfo.png'
              width={202}
              height={159}
              alt='logo kominfo'
              className='mt-6'
            />
          </div>

          <div className='py-12'>
            <h5 className='text-center text-[1.75rem]'>Enkripsi Data</h5>
            <h5 className='mx-auto mt-6 max-w-4xl text-center font-normal leading-normal'>
              Server PINA ada di lokasi aman dengan sertifikasi tier 3 ISO.
              Enkripsi data transaksi (SECTIGO RSA Domain Validation Secure
              Server CA) dan perlindungan koneksi dengan enkripsi 256-bit.
            </h5>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid grid-cols-3'>
            <h1 className=''>
              Pertanyaan <br /> tentang <br /> PINA
            </h1>

            {/* FAQ accordion */}
            <Accordion data={faqData} />
          </div>
        </div>
      </section>
    </main>
  );
}
