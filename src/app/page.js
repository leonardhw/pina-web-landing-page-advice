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

  return (
    <main className=''>
      {/* Hero */}
      <section className='bg-pina-yellow-2'>
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-5'>
          <div className='flex w-full flex-col justify-center gap-6 p-8 sm:col-span-3 sm:px-12 sm:py-12'>
            <h1 className='text-pina-smoke-1'>
              Wealth Management Platform Pertama di Indonesia
            </h1>
            <h5 className='font-normal leading-normal text-pina-smoke-1'>
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
          <div className='relative order-first h-[250px] w-full bg-red-200 sm:order-last sm:col-span-2 sm:h-[588px]'>
            <Image
              src='/static/images/hero/capai-financial-goal-dengan-pina.jpg'
              fill={true}
              className='h-full w-full object-cover object-bottom'
              alt='capai financial goal dengan pina'
              priority={true}
            />
          </div>
        </div>
      </section>

      <section className='bg-white py-12'>
        <div className='mx-auto max-w-7xl pb-24 max-2xl:px-6'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0'>
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
        <div className='mx-auto max-w-7xl max-2xl:px-6'>
          <div className='grid gap-8 text-white sm:grid-cols-3 sm:gap-0'>
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
        <div className='mx-auto max-w-7xl max-2xl:px-6'>
          <div className='pb-12'>
            <h1 className='text-center'>
              Strategi Finansial dengan Tools yang Tepat
            </h1>
            <h5 className='mt-6 text-center font-normal leading-normal'>
              Rekomendasi strategi keuangan dari ahli dan tools finansial
              canggih untuk setiap kebutuhan kamu
            </h5>
          </div>

          <div className='mb-20 grid grid-cols-1 gap-8 md:grid-cols-2'>
            {/* Carousel */}
            <div className=''>
              <swiper-container
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
                  />
                </swiper-slide>
                <swiper-slide>
                  <Image
                    src='/static/images/sesi-konsultasi-keuangan-pina.png'
                    height={100}
                    width={900}
                    alt=''
                  />
                </swiper-slide>
                <swiper-slide>
                  <Image
                    src='/static/images/laporan-konsultasi-keuangan-pina.png'
                    height={100}
                    width={900}
                    alt=''
                  />
                </swiper-slide>
              </swiper-container>
            </div>

            <div className='flex flex-col justify-center gap-4 sm:pl-4'>
              <h2>
                Perencana <br /> Keuangan Pribadi
              </h2>
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
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
              <div className='order-last flex flex-col justify-center pr-6 sm:order-first'>
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
                      href='/aplikasi-keuangan'
                      className='border-b-2 border-pina-yellow-1 text-lg/tight font-bold leading-normal text-pina-yellow-1 hover:border-pina-yellow-4 hover:text-pina-yellow-4 sm:text-2xl'
                    >
                      Pelajari Selengkapnya &gt;&gt;
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
                      href='/aplikasi-investasi'
                      className='border-b-2 border-pina-yellow-1 text-lg/tight font-bold leading-normal text-pina-yellow-1 hover:border-pina-yellow-4 hover:text-pina-yellow-4 sm:text-2xl'
                    >
                      Pelajari Selengkapnya &gt;&gt;
                    </Link>
                  </li>
                </ul>
                <div className='mt-12 flex items-center gap-4 pl-6'>
                  <Link href='https://www.youtube.com'>
                    <Image
                      src='/static/images/app-store-download.png'
                      width={150}
                      height={44}
                      alt='appstore download'
                    />
                  </Link>
                  <Link href='https://google.com'>
                    <Image
                      src='/static/images/gplay-download-1.png'
                      width={150}
                      height={44}
                      alt='playstore download'
                    />
                  </Link>
                </div>
              </div>
              <div className='relative hidden sm:block sm:min-h-[1150px]'>
                <Image
                  src='/static/images/aplikasi-manajemen-keuangan-pina.png'
                  width={632}
                  height={30}
                  alt='fitur manajemen keuangan pina'
                  className='absolute -left-20 top-0 max-sm:hidden'
                />
                <Image
                  src='/static/images/grafik-portofolio-investasi.png'
                  width={256}
                  height={30}
                  alt='alokasi pengeluaran pina'
                  className='top-30 absolute right-0 top-28 max-sm:hidden'
                />
                <Image
                  src='/static/images/investasi-di-pina-group.png'
                  width={968}
                  height={30}
                  alt='grafik portofolio investasi'
                  className='sm:top-30 sm:absolute sm:bottom-0 sm:left-0'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid grid-cols-1 items-center gap-8 pb-12 md:grid-cols-2'>
            <h1>Buat Rencana Keuangan</h1>
            <h5 className='font-normal leading-normal'>
              Bingung mau mulai darimana? PINA sediakan rencana dan strategi
              kelola kekayaan secara lengkap dengan akses konsultasi keuangan
              24/7.
            </h5>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:pt-12 md:grid-cols-3'>
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
              <div className='flex flex-col gap-4 p-6 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-6 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-6 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-6 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-6 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-6 sm:min-h-[400px]'>
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

      <section className='bg-white py-12 sm:py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='sm:pb-12'>
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
              <div className='flex flex-col gap-4 p-8 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-8 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-8 sm:min-h-[400px]'>
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
              <div className='flex flex-col gap-4 p-8 sm:min-h-[400px]'>
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

      <section className='bg-pina-yellow-1 py-12 sm:py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1>Solusi Kesehatan Finansial Paling Lengkap</h1>
          <table className='mt-8 min-w-full divide-y divide-black'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='text-center text-xs font-semibold capitalize text-pina-smoke-2 sm:mx-auto sm:px-6 sm:py-3 sm:text-2xl '
                ></th>
                <th
                  scope='col'
                  className='text-center text-xs font-semibold capitalize text-pina-smoke-2 sm:mx-auto sm:px-6 sm:py-3 sm:text-2xl '
                >
                  Pina
                </th>
                <th
                  scope='col'
                  className='text-center text-xs font-semibold capitalize text-pina-smoke-2 sm:mx-auto sm:px-6 sm:py-3 sm:text-2xl '
                >
                  Bank
                </th>
                <th
                  scope='col'
                  className='text-center text-xs font-semibold capitalize text-pina-smoke-2 sm:mx-auto sm:px-6 sm:py-3 sm:text-2xl '
                >
                  Financial <br /> Planner
                </th>
                <th
                  scope='col'
                  className='text-center text-xs font-semibold capitalize text-pina-smoke-2 sm:mx-auto sm:px-6 sm:py-3 sm:text-2xl '
                >
                  Aplikasi <br /> Investasi
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-black'>
              <tr>
                <th className=' px-3 py-3 text-left text-xs font-semibold capitalize leading-snug text-pina-smoke-2 sm:max-w-[120px] sm:px-6 sm:py-3 sm:text-2xl'>
                  Financial <br /> Check up
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className=' px-3 py-3 text-left text-xs font-semibold capitalize leading-snug text-pina-smoke-2 sm:max-w-[120px] sm:px-6 sm:py-3 sm:text-2xl'>
                  One on One <br /> Consultation
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className=' px-3 py-3 text-left text-xs font-semibold capitalize leading-snug text-pina-smoke-2 sm:max-w-[120px] sm:px-6 sm:py-3 sm:text-2xl'>
                  Aplikasi Keuangan
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className=' px-3 py-3 text-left text-xs font-semibold capitalize leading-snug text-pina-smoke-2 sm:max-w-[120px] sm:px-6 sm:py-3 sm:text-2xl'>
                  Aplikasi <br /> Investasi
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
              </tr>
              <tr>
                <th className='mx-auto px-3 py-3  text-left text-xs font-semibold capitalize leading-snug text-pina-smoke-2 sm:max-w-[120px] sm:px-6 sm:py-3 sm:text-2xl'>
                  Perencanaan <br />
                  Tujuan Keuangan
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
                <td>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
              </tr>
              <tr>
                <th className=' px-3 py-3 text-left text-xs font-semibold capitalize leading-snug text-pina-smoke-2 sm:max-w-[120px] sm:px-6 sm:py-3 sm:text-2xl'>
                  One on One Coaching
                </th>
                <td className='mx-auto'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
                <td className='mx-auto'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={32}
                    height={32}
                    className='mx-auto h-6 w-6 sm:h-8 sm:w-8'
                  />
                </td>
                <td className='text-center'>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='bg-pina-yellow-3 py-12 sm:py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1>Mulai Bersama Pina</h1>
          <div className='mt-12 grid grid-cols-1 gap-8 sm:mt-36'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
              <table className=''>
                <thead>
                  <tr className='align-baseline'>
                    <th className=''>
                      <div className='pb-3 text-left sm:border-b-[0.5px] sm:border-black'>
                        <h3 className=''>1</h3>
                      </div>
                    </th>
                    <th className='pl-6'>
                      <div className='border-b-[0.5px] border-black pb-3 text-left'>
                        <h3 className=''>Daftar & Buat Akun PINA</h3>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='align-baseline'>
                    <td></td>
                    <td className='pl-6'>
                      <h5 className='mt-4 font-normal leading-normal sm:mt-6'>
                        Beri tahu PINA kondisi keuanganmu saat ini.
                      </h5>
                      <div className='mt-4 flex items-center gap-4 sm:mt-6'>
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
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='relative hidden sm:block'>
                <Image
                  src='/static/images/buat-akun-pina.png'
                  width={386}
                  height={611}
                  alt='buat akun di PINA'
                  className='mx-auto sm:-mt-20 sm:ml-40'
                />
              </div>
              <table className=''>
                <thead>
                  <tr className='align-baseline'>
                    <th className=''>
                      <div className='pb-3 text-left sm:border-b-[0.5px] sm:border-black'>
                        <h3 className=''>2</h3>
                      </div>
                    </th>
                    <th className='pl-6'>
                      <div className='border-b-[0.5px] border-black pb-3 text-left'>
                        <h3 className=''>Konsultasi Rutin</h3>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='align-baseline'>
                    <td></td>
                    <td className='pl-6'>
                      <h5 className='mt-4 font-normal leading-normal sm:mt-6'>
                        Algoritma canggih PINA akan mengarahkan Kamu dengan
                        Certified Financial Planner khusus yang memahami
                        kebutuhan Kamu. Mereka akan memberikan saran sesuai
                        kebutuhan kamu untuk mencapai tujuan keuangan.
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='relative hidden sm:block'>
                <Image
                  src='/static/images/konsultasi-keuangan-rutin.png'
                  width={386}
                  height={611}
                  alt='konsultasi-cfp-berkala'
                  className='mx-auto sm:-mt-20 sm:ml-40'
                />
              </div>
              <table className=''>
                <thead>
                  <tr className='align-baseline'>
                    <th className=''>
                      <div className='pb-3 text-left sm:border-b-[0.5px] sm:border-black'>
                        <h3 className=''>3</h3>
                      </div>
                    </th>
                    <th className='pl-6'>
                      <div className='border-b-[0.5px] border-black pb-3 text-left'>
                        <h3 className=''>Dapatkan Rencana Keuangan</h3>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='align-baseline'>
                    <td></td>
                    <td className='pl-6'>
                      <h5 className='mt-4 font-normal leading-normal sm:mt-6'>
                        Certified Financial Planner Kamu akan membuat rencana
                        komprehensif yang disesuaikan dengan keadaanmu. Mereka
                        akan memandu Kamu melalui rekomendasi keuangan dan, jika
                        Kamu suka dengan rekomendasinya, waktunya mewujudkan
                        tujuan keuanganmu.
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='relative hidden sm:block'>
                <Image
                  src='/static/images/buat-akun-pina.png'
                  width={386}
                  height={611}
                  alt='laporan rencana keuangan pina
                  Reply'
                  className='mx-auto sm:-mt-20 sm:ml-40'
                />
              </div>
              <table className=''>
                <thead>
                  <tr className='align-baseline'>
                    <th className=''>
                      <div className='pb-3 text-left sm:border-b-[0.5px] sm:border-black'>
                        <h3 className=''>4</h3>
                      </div>
                    </th>
                    <th className='pl-6'>
                      <div className='border-b-[0.5px] border-black pb-3 text-left'>
                        <h3 className=''>Pantau dan Pendampingan</h3>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='align-baseline'>
                    <td></td>
                    <td className='pl-6'>
                      <h5 className='mt-4 font-normal leading-normal sm:mt-6'>
                        Pastikan asetmu selalu bertumbuh dan keuanganmu tetap
                        berada di jalur yang tepat dengan fitur-fitur canggih
                        yang ada di PINA.
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='relative hidden sm:block'>
                <Image
                  src='/static/images/pantau-portofolio-tujuan-investasi.png'
                  width={386}
                  height={611}
                  alt='pantau pergerakan tujuan investasi'
                  className='mx-auto sm:-mt-20 sm:ml-40'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-pina-yellow-1 py-12 sm:py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='mb-12 sm:mb-24'>
            Perencana Keuangan Bersertifikat dari Berbagai Bidang dengan
            Spesialisasi Masing-Masing
          </h1>
          <div className='grid grid-cols-1 gap-12 sm:mt-12 md:grid-cols-2'>
            <div className='grid aspect-square w-full grid-cols-2 gap-6 sm:w-[544px]'>
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

      <section className='bg-white py-12 sm:py-24'>
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

      <section className='bg-white py-12 sm:py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-3'>
            <h1 className='hidden sm:block'>
              Pertanyaan <br /> tentang <br /> PINA
            </h1>
            <h1 className='sm:hidden'>Pertanyaan tentang PINA</h1>

            {/* FAQ accordion */}
            <Accordion data={faqData} />
          </div>
        </div>
      </section>
    </main>
  );
}
