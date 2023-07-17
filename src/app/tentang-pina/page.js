import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Tentang PINA dan Cerita Dibalik Wealth Management Platform ',
  description:
    'Siapa dan bagaimana PINA bisa hadir serta selalu siap membantu kamu lebih independen dalam finansial kini dan masa depan.',
};

export default function TentangPina() {
  return (
    <main>
      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-center text-pina-smoke-1'>Tentang PINA</h1>
            <h5 className='text-center text-[1.75rem] text-pina-smoke-1'>
              PINA adalah wealth management platform yang mengkombinasikan akses
              CFP bersertifikat dengan aplikasi keuangan dan investasi yang
              lengkap serta mudah digunakan.
            </h5>
            <div className='mx-auto my-8 w-16 border-b border-black'></div>
            <h5 className='text-center font-normal leading-normal text-pina-smoke-1'>
              Kami menggabungkan fitur keuangan canggih dengan akses ke
              perencana keuangan untuk memberikan pengalaman konsultasi yang
              biasanya hanya tersedia bagi pengguna yang memiliki fasilitas
              khusus.
            </h5>
          </div>
        </div>
      </section>

      <section className='bg-pina-yellow-1 py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='text-center text-pina-smoke-1'>Prinsip dan Values</h1>

          <div className='mt-24 grid grid-cols-2 gap-8'>
            <div className='overflow-hidden rounded-2.5xl bg-white'>
              <div className='bg-pina-yellow-5 px-12 pb-8 pt-12'>
                <h2>Personal</h2>
              </div>
              <div className='px-12 py-8'>
                <h5 className='font-normal leading-normal'>
                  Uang adalah sesuatu yang personal. Setiap orang memiliki
                  pemasukan dan pengeluaran yang berbeda, begitu juga dengan
                  target dan rencana masa depannya.
                </h5>
                <h5 className='mt-4 font-normal leading-normal'>
                  Masing-masing butuh solusi keuangan yang unik, termasuk kamu.
                  PINA hadir untuk membantu kamu membuat rencana keuangan dan
                  investasi yang dipersonalisasi sesuai dengan toleransi risiko
                  dan gaya berinvestasi kamu.
                </h5>
              </div>
            </div>
            <div className='overflow-hidden rounded-2.5xl bg-white'>
              <div className='bg-pina-yellow-5 px-12 pb-8 pt-12'>
                <h2>Sederhana</h2>
              </div>
              <div className='px-12 py-8'>
                <h5 className='font-normal leading-normal'>
                  Berbagai produk, fitur, dan komunikasi di PINA dibuat dan
                  disampaikan sesederhana mungkin agar mudah diakses oleh
                  siapapun.
                </h5>
                <h5 className='mt-4 font-normal leading-normal'>
                  Dengan begitu, semua orang bisa lebih yakin dalam mengambil
                  berbagai keputusan finansial.
                </h5>
              </div>
            </div>
            <div className='overflow-hidden rounded-2.5xl bg-white'>
              <div className='bg-pina-yellow-5 px-12 pb-8 pt-12'>
                <h2>
                  Pelan Tapi <br /> Pasti
                </h2>
              </div>
              <div className='px-12 py-8'>
                <h5 className='font-normal leading-normal'>
                  Perjalanan menuju finansial yang stabil itu dilakukan
                  pelan-pelan tapi lebih kuat ibaratnya seperti lari maraton,
                  bukan lari cepat. Bagi PINA, spekulasi atau jual-beli impulsif
                  bukan cara yang tepat untuk membangun keuangan jangka panjang.
                </h5>
              </div>
            </div>
            <div className='overflow-hidden rounded-2.5xl bg-white'>
              <div className='bg-pina-yellow-5 px-12 pb-8 pt-12'>
                <h2>
                  Kamu adalah <br /> Fokus Kami
                </h2>
              </div>
              <div className='px-12 py-8'>
                <h5 className='font-normal leading-normal'>
                  Klien pertama PINA adalah orang tua, kakak-adik, dan sahabat
                  kami. PINA menganggap kamu dan setiap (calon) klien sebagai
                  orang terdekat, serta akan menemani kamu mewujudkan kebebasan
                  finansial dan menjalani hidup dengan nyaman.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='text-pina-smoke-1'>Manajemen</h1>

          <div className='mt-24 grid grid-cols-2 gap-12'>
            <div className='overflow-hidden rounded-2.5xl bg-pina-green-2'>
              <div className='aspect-[1.11]'>
                <img
                  src='/static/images/daniel-van-leeuwen.jpg'
                  className='h-full w-full object-cover object-center'
                  alt='Daniel Van Leeuwen'
                />
              </div>
              <div className='flex flex-col gap-8 p-12'>
                <h2 className='max-w-xs'>Daniel Van Leeuwen</h2>
                <h3 className='text-2.5xl font-normal leading-normal'>CEO</h3>
                <Link href='' className='group inline-flex items-center gap-6 '>
                  <Image
                    src='/static/images/linkedin-icon.svg'
                    width={42}
                    height={42}
                    alt='linkedin logo'
                  />
                  <h3 className='text-2.5xl leading-normal group-hover:underline'>
                    Daniel Van Leeuwen
                  </h3>
                </Link>
              </div>
            </div>
            <div className='overflow-hidden rounded-2.5xl bg-pina-green-2'>
              <div className='aspect-[1.11]'>
                <img
                  src='/static/images/christian-hermawan.jpg'
                  className='h-full w-full object-cover object-center'
                  alt='Christian Hermawan'
                />
              </div>
              <div className='flex flex-col gap-8 p-12'>
                <h2 className='max-w-xs'>Christian Hermawan</h2>
                <h3 className='text-2.5xl font-normal leading-normal'>COO</h3>
                <Link href='' className='group inline-flex items-center gap-6 '>
                  <Image
                    src='/static/images/linkedin-icon.svg'
                    width={42}
                    height={42}
                    alt='linkedin logo'
                  />
                  <h3 className='text-2.5xl leading-normal group-hover:underline'>
                    Christian Hermawan
                  </h3>
                </Link>
              </div>
            </div>
            <div className='overflow-hidden rounded-2.5xl bg-pina-green-2'>
              <div className='aspect-[1.11]'>
                <img
                  src='/static/images/hendry-chou.jpg'
                  className='h-full w-full object-cover object-center'
                  alt='Hendry Chou'
                />
              </div>
              <div className='flex flex-col gap-8 p-12'>
                <h2 className=''>
                  Hendry <br />
                  Chou
                </h2>
                <h3 className='text-2.5xl font-normal leading-normal'>CPO</h3>
                <Link href='' className='group inline-flex items-center gap-6 '>
                  <Image
                    src='/static/images/linkedin-icon.svg'
                    width={42}
                    height={42}
                    alt='linkedin logo'
                  />
                  <h3 className='text-2.5xl leading-normal group-hover:underline'>
                    Hendry Chou
                  </h3>
                </Link>
              </div>
            </div>
            <div className='overflow-hidden rounded-2.5xl bg-pina-green-2'>
              <div className='aspect-[1.11]'>
                <img
                  src='/static/images/fajar-kuntoro.jpg'
                  className='h-full w-full object-cover object-center'
                  alt='Fajar Kuntoro'
                />
              </div>
              <div className='flex flex-col gap-8 p-12'>
                <h2 className=''>
                  Fajar <br />
                  Kuntoro
                </h2>
                <h3 className='text-2.5xl font-normal leading-normal'>CTO</h3>
                <Link href='' className='group inline-flex items-center gap-6 '>
                  <Image
                    src='/static/images/linkedin-icon.svg'
                    width={42}
                    height={42}
                    alt='linkedin logo'
                  />
                  <h3 className='text-2.5xl leading-normal group-hover:underline'>
                    Fajar Kuntoro
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='text-pina-smoke-1'>CFP®</h1>
          <div className='mt-24 grid grid-cols-2 gap-24'>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#ECEFF4]'>
                  <Image
                    src='/static/images/cfp/1.jpg'
                    fill={true}
                    className='object-cover object-center'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Rista Zwestika Reni, CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No, Anggota: 1800 0407 <br />
                  Basic Financial Planner, Family Finance, Sharia, Business
                  (UMKM) and Investment
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#ECEFF4]'>
                  <Image
                    src='/static/images/cfp/2.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Robby Christy, CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 1400 1537 <br />
                  Basic Financial Planner & Insurance Planner
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#ECEFF4]'>
                  <Image
                    src='/static/images/cfp/3.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  MAYCHELIE Vincent, CFP®, QWP®, AWP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 2100 0225 <br />
                  Business Planner, Tax Planner, Investment Planner
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#ECEFF4]'>
                  <Image
                    src='/static/images/cfp/4.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Tommy Hilman, M.T., CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 2200 0364 <br />
                  Basic Financial Planner
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#ECEFF4]'>
                  <Image
                    src='/static/images/cfp/5.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Maryadi Santana, CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 1900 0586 <br />
                  Basic Financial Planner, Insurance Planner & Investment
                  Planner
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#ECEFF4]'>
                  <Image
                    src='/static/images/cfp/6.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Erick Marlissa, CFP®, BFA
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 2100 0688 <br />
                  Behavioral Finance & Investment Planner
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#ECEFF4]'>
                  <Image
                    src='/static/images/cfp/7.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Sayoga Prasetyo, CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 2200 0363 <br />
                  Basic Financial Planner & Sharia Financial Planner
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#d4d5d0]'>
                  <Image
                    src='/static/images/cfp/8.png'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Lilian Haningtyas, CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 2200 0404 <br />
                  Family Financial Protection
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#d4d5d0]'>
                  <Image
                    src='/static/images/cfp/9.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Defanya Aprechita Tiur, CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 2200 0365
                  <br />
                  Basic Cashflow & Family Finance
                </p>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex items-center justify-center'>
                <div className='relative aspect-square h-[180px] overflow-hidden rounded-full bg-[#d4d5d0]'>
                  <Image
                    src='/static/images/cfp/10.jpg'
                    fill={true}
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='col-span-2 flex flex-col justify-center gap-4'>
                <h3 className='text-2.5xl leading-normal'>
                  Dyah Lestari Agustini, CFP®
                </h3>
                <p className='text-xl font-normal leading-normal'>
                  No. Anggota: 2100 0463 <br />
                  Property Investment & Estate Planner
                </p>
              </div>
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
            <h5 className='text-center text-[1.75rem]'>
              CERTIFIED FINANCIAL PLANNER™
            </h5>
            <h5 className='mx-auto mt-6 max-w-4xl text-center font-normal leading-normal'>
              Penasihat keuangan (CFP) di PINA adalah profesional berpengalaman
              dibidangnya dengan spesialisasi yang unik.
            </h5>
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
        <div className='mx-auto max-w-7xl pb-24 max-2xl:px-4'>
          <div className='flex overflow-hidden rounded-[40px] bg-pina-yellow-1'>
            <div className='flex flex-col items-start justify-between gap-8 px-12 py-8'>
              <h1>Ada Pertanyaan Seputar PINA?</h1>
              <p className='max-w-lg text-[1.25rem] font-normal leading-normal text-pina-smoke-1'>
                Hubungi Tim PINA dan dapatkan panduan lengkap mengenai produk
                PINA di +628-1110-8823-456 atau email ke hello@pina.id
              </p>
              <button className='mb-24 mt-auto rounded-lg bg-pina-smoke-1 px-6 py-4 text-[1.625rem] font-bold leading-snug text-white'>
                Hubungi PINA
              </button>
            </div>
            <Image
              src='/static/images/cs/3.jpg'
              width={579}
              height={579}
              alt='cs PINA'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
