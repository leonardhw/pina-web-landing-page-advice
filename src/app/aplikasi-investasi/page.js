import Accordion from '@/components/Accordion';
import HubungiPina from '@/components/HubungiPina';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Solusi Investasi Jangka Panjang Cukup dengan 1 Aplikasi',
  description:
    'Aplikasi dengan fitur manajemen aset investasi & portfolio yang memudahkanmu mengatur investasi masa depan. Mulai berinvestasi dengan cerdas dimulai dari PINA!',
};

export default function AplikasiInvestasi() {
  const faqData = [
    {
      question: 'Bagaimana cara memanfaatkan fitur investasi di PINA?',
      answer:
        'Kamu bisa memulai dengan membuat akun di PINA. Setelah itu kamu membuat rekening dana nasabah (RDN) untuk berinvestasi dan kamu akan bisa melakukan investasi di produk reksa dana atau saham yang ada di PINA.',
    },
    {
      question: 'Bisakah saya melacak kinerja investasi saya?',
      answer:
        'Di PINA, kamu dapat melakukan pemantauan kinerja investasi yang kamu miliki. Kamu juga dapat melihat perubahan nilai investasi, pertumbuhan atau penurunan kinerja, serta laporan transaksi terkait.',
    },
    {
      question:
        'Apakah aplikasi PINA juga memungkinkan investasi langsung di pasar saham?',
      answer:
        'Ya, kamu dapat membeli dan menjual saham melalui aplikasi PINA sesuai dengan preferensi dan strategi investasimu atau kamu juga bisa melakukan investasi otomatis dengan saran dari PINA dan CFP PINA.',
    },
    {
      question: 'Apakah saya bisa mendapat panduan untuk berinvestasi?',
      answer:
        'Kamu bisa mendapatkan saran dan panduan dari CFP untuk rencana investasimu dengan melakukan konsultasi bersama CFP PINA. Tak hanya itu, kamu juga akan mendapatkan strategi investasi terbaik dari para ahli untuk mencapai tujuan keuanganmu.',
    },
  ];
  return (
    <main className='bg-white'>
      <section className='bg-pina-yellow-1'>
        <div className='mx-auto max-w-8xl'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center gap-8 px-12 py-12'>
              <h1 className='text-pina-smoke-1'>Solusi Investasi Terpadu</h1>
              <h4 className='text-[1.75rem] leading-relaxed text-pina-smoke-1'>
                Raih tujuan keuangan bersama PINA
              </h4>
              <div className='my-4 w-16 border-b border-black'></div>

              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Solusi investasi berbasis tujuan keuangan yang PINA sediakan
                bisa bantu kamu berinvestasi pada hal-hal yang bermanfaat,
                seperti membeli rumah, menabung untuk kuliah hingga
                mempersiapkan masa pensiun.
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
            <div className='flex items-center justify-center py-12'>
              <Image
                src='/static/images/investasi-di-pina.png'
                width={976}
                height={817}
                alt='investasi di pina'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white pb-24 pt-12'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid grid-cols-2 gap-24'>
            <div className='flex flex-col justify-center gap-8 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>Investasi Berbasis Tujuan</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Tetapkan investasi apa pun ke tujuan keuangan dan lacak
                perjalananmu untuk mencapainya. Aplikasi PINA bantu kamu dalam
                menetapkan tujuan, memilih investasi yang tepat, dan melacak
                kemajuanmu dari waktu ke waktu.
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
            <div className='mx-auto aspect-[0.66] overflow-hidden rounded-[20px]'>
              <Image
                src='/static/images/report-dan-financial-checkup.png'
                width={894}
                height={1404}
                alt='hitung net worth pina'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='mx-auto -mt-48 aspect-[0.66] overflow-hidden rounded-[20px]'>
              <Image
                src='/static/images/fitur-investasi-otomatis.png'
                width={856}
                height={1147}
                alt='lacak aset investasi'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='-mt-48 flex flex-col justify-center gap-8 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>Investasi Otomatis</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Gunakan fitur investasi otomatis di PINA untuk berinvestasi di
                tempat yang sesuai dengan profil risiko dan tujuan keuanganmu.
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

            <div className='-mt-48 flex flex-col justify-center gap-8 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>Kustom Portofolio</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Pilih saham dan reksa dana favoritmu untuk membuat rencana
                investasi yang sesuai dengan kebutuhan. PINA memberimu
                fleksibilitas untuk berinvestasi dengan caramu sendiri.
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
            <div className='mx-auto -mt-48 aspect-[0.66] overflow-hidden rounded-[20px]'>
              <Image
                src='/static/images/chart-emiten-saham.png'
                width={894}
                height={1404}
                alt='hitung net worth pina'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>

          <div className='-mt-24 grid grid-cols-2'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6'>
                <Image
                  src='/static/images/search-icon.svg'
                  width={25}
                  height={25}
                  alt='analysis acc'
                />
                <h4 className='text-[1.75rem] leading-normal'>
                  Pemantauan yang Mudah
                </h4>
              </div>
              <h5 className='mt-6 font-normal leading-normal'>
                Lacak dan pantau portofoliomu dengan mudah. Aplikasi PINA
                menyediakan pembaruan real-time pada aset investasimu secara
                otomatis.
              </h5>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6'>
                <Image
                  src='/static/images/folder-icon.svg'
                  width={25}
                  height={25}
                  alt='analysis acc'
                />
                <h4 className='text-[1.75rem] leading-normal'>
                  Sambungkan Aset
                </h4>
              </div>
              <h5 className='mt-6 font-normal leading-normal'>
                Sertakan aset atau investasi lain di luar PINA ke tujuan
                keuanganmu untuk melihat kemajuan goals-mu.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='text-center text-pina-smoke-1'>Mulai Bersama Pina</h1>
          <div className='mt-48 grid grid-cols-1 gap-8'>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col gap-6'>
                <div className=' pb-4'>
                  <h3>1. Daftar & Buat Akun PINA</h3>
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
              <div className='relative'>
                <Image
                  src='/static/images/buat-akun-pina.png'
                  width={386}
                  height={611}
                  alt='buat akun di PINA'
                  className='mx-auto -mt-12 ml-40'
                />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col gap-6'>
                <div className=' pb-4'>
                  <h3>2. Konsultasi Rutin</h3>
                </div>
                <h5 className='font-normal leading-normal'>
                  Algoritma canggih PINA akan mengarahkan Kamu dengan Certified
                  Financial Planner khusus yang memahami kebutuhan Kamu. Mereka
                  akan memberikan saran sesuai kebutuhan kamu untuk mencapai
                  tujuan keuangan.
                </h5>
              </div>
              <div className='relative '>
                <Image
                  src='/static/images/konsultasi-keuangan-rutin.png'
                  width={386}
                  height={611}
                  alt='konsultasi-cfp-berkala'
                  className='mx-auto -mt-12 ml-40'
                />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col gap-6'>
                <div className=' pb-4'>
                  <h3>3. Dapatkan Rencana Keuangan</h3>
                </div>
                <h5 className='font-normal leading-normal'>
                  Certified Financial Planner Kamu akan membuat rencana
                  komprehensif yang disesuaikan dengan keadaanmu. Mereka akan
                  memandu Kamu melalui rekomendasi keuangan dan, jika Kamu suka
                  dengan rekomendasinya, waktunya mewujudkan tujuan keuanganmu.
                </h5>
              </div>
              <div className='relative '>
                <Image
                  src='/static/images/buat-akun-pina.png'
                  width={386}
                  height={611}
                  alt='laporan rencana keuangan pina
                  Reply'
                  className='mx-auto -mt-12 ml-40'
                />
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col gap-6'>
                <div className=' pb-4'>
                  <h3>4. Pantau dan Pendampingan</h3>
                </div>
                <h5 className='font-normal leading-normal'>
                  Pastikan asetmu selalu bertumbuh dan keuanganmu tetap berada
                  di jalur yang tepat dengan fitur-fitur canggih yang ada di
                  PINA.
                </h5>
              </div>
              <div className='relative '>
                <Image
                  src='/static/images/pantau-portofolio-tujuan-investasi.png'
                  width={386}
                  height={611}
                  alt='pantau pergerakan tujuan investasi'
                  className='mx-auto -mt-12 ml-40'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='mb-24'>Pertanyaan Terkait Fitur Investasi PINA</h1>

          <Accordion data={faqData} icon='plus' firstBorder={true} />
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl pb-24 max-2xl:px-4'>
          <HubungiPina cs='csWomanOne' />
        </div>
      </section>
    </main>
  );
}
