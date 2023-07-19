import Accordion from '@/components/Accordion';
import HubungiPina from '@/components/HubungiPina';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Harga Berlangganan Konsultasi dan Aplikasi Keuangan PINA',
  description:
    'Temukan solusi finansial sesuai kebutuhan dan kondisi keuanganmu saat ini, PINA sediakan berbagai paket berlangganan untuk kemudahan akses dan aplikasi',
};

export default function Harga() {
  const faqData = [
    {
      question: 'Bagaimana cara pembayarannya?',
      answer:
        'Kamu bisa membayar langsung dengan transfer bank, dompet elektronik, atau kartu kredit',
    },
    {
      question: 'Apa ada diskon untuk langganan 12 bulan?',
      answer:
        'Ya! Dengan berlangganan 12 bulan, kamu bisa menghemat sebanyak 25% persen dibanding berlangganan secara triwulan.',
    },
    {
      question: 'Bisakah pasangan saya bergabung dengan langganan saya?',
      answer:
        'Ya! Kamu bisa mengajak pasangan tanpa biaya tambahan. Kamu dan pasangan masing-masing akan mendapatkan akses sendiri untuk sama-sama mendapatkan pemahaman tentang keuangan.',
    },
  ];
  return (
    <main>
      <section className='bg-white pb-12 pt-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='flex flex-col gap-12'>
            <h1 className='text-center text-pina-smoke-1'>
              Temukan Solusi Keuangan <br /> Sesuai Kebutuhan
            </h1>
            <h5 className='text-center text-[1.75rem] leading-normal text-pina-smoke-1'>
              Dapatkan akses ke Perencana Keuangan terpercaya dan teknologi
              keuangan kelas dunia yang dirancang untuk membantumu membangun dan
              mengelola kekayaan dengan harga terbaik.
            </h5>
            <div className='grid grid-cols-3 gap-8'>
              <div className='flex flex-col justify-between gap-8 rounded-2.5xl bg-pina-yellow-1 p-8'>
                <h2 className='mb-6'>
                  Free <br /> Access!
                </h2>
                <div className='mt-auto flex flex-col gap-4'>
                  <Link href='https://google.com'>
                    <Image
                      src='/static/images/app-store-download.png'
                      width={250}
                      height={200}
                      alt='app store logo'
                    />
                  </Link>
                  <Link href='https://google.com'>
                    <Image
                      src='/static/images/gplay-download-1.png'
                      width={250}
                      height={200}
                      alt='playstore logo'
                    />
                  </Link>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-8 rounded-2.5xl bg-pina-yellow-1 p-8'>
                <h2>
                  3 Bulan <br />
                  Rp 1.500.000
                </h2>
                <h3 className='mb-8 text-2.5xl font-normal leading-normal'>
                  Rp 500.000/bulan
                </h3>
                <button className='mt-auto w-full rounded-lg bg-pina-smoke-2 px-6 py-4 text-2xl font-bold text-white'>
                  Langganan Sekarang!
                </button>
              </div>
              <div className='relative flex flex-col justify-between gap-8 rounded-2.5xl bg-pina-yellow-1 p-8'>
                <div className='absolute right-8 rounded-full bg-white px-6 py-1 text-sm font-bold'>
                  Hemat 25%
                </div>
                <h2>
                  12 Bulan <br />
                  Rp 4.500.000
                </h2>
                <h3 className='mb-8 text-2.5xl font-normal leading-normal'>
                  Rp 375.000/bulan
                </h3>
                <button className='mt-auto w-full rounded-lg bg-pina-smoke-2 px-6 py-4 text-2xl font-bold text-white'>
                  Langganan Sekarang!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white pb-24 pt-12'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='text-center text-pina-smoke-1'>SUBSCRIPTION PLAN</h1>
          <table className='mt-8 min-w-full '>
            <thead>
              <tr className='border-b border-black/[0.2]'>
                <th
                  scope='col'
                  className='mx-auto px-6 py-4 text-center text-2xl font-semibold capitalize text-pina-smoke-2'
                ></th>
                <th
                  scope='col'
                  className='mx-auto px-6 py-4 text-center text-2xl font-semibold capitalize text-pina-smoke-2'
                >
                  Free
                </th>
                <th
                  scope='col'
                  className='mx-auto px-6 py-4 text-center text-2xl font-semibold capitalize text-pina-smoke-2'
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  colSpan={3}
                  className='px-6 pb-4 pt-8 text-left text-2.5xl font-semibold uppercase leading-normal text-pina-smoke-1'
                >
                  Advisory
                </th>
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Akses Konsultan Keuangan Pribadi
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-x-dark.svg'
                    width={28}
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Perencanaan dan Manajemen Investasi
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-x-dark.svg'
                    width={28}
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Perencanaan Pensiun
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-x-dark.svg'
                    width={28}
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Perencanaan Asuransi
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-x-dark.svg'
                    width={28}
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Perencanaan Pendidikan
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-x-dark.svg'
                    width={28}
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Analisis dan Optimasi Cash Flow
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-x-dark.svg'
                    width={28}
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Strategi Manajemen Utang
                </th>
                <td>
                  <Image
                    src='/static/images/stamp-x-dark.svg'
                    width={28}
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
              </tr>
              <tr>
                <th
                  colSpan={3}
                  className='px-6 pb-4 pt-8 text-left text-2.5xl font-semibold leading-normal text-pina-smoke-1'
                >
                  Financial Tools
                </th>
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Pencatatan dan Pemantauan Kekayaan
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Alat Budgeting
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Pemantauan Tujuan Keuangan
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
              </tr>
              <tr>
                <th
                  colSpan={3}
                  className='px-6 pb-4 pt-8 text-left text-2.5xl font-semibold leading-normal text-pina-smoke-1'
                >
                  Investment
                </th>
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Berinvestasi di Reksadana dan Saham
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
              </tr>
              <tr className='border-b border-black/[0.2]'>
                <th className='px-6 py-4 text-left text-2xl font-normal leading-normal text-pina-smoke-1'>
                  Investasi Otomatis
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
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='bg-pina-yellow-1 py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1>Yang Kamu Dapat dari PINA</h1>
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

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='mb-24'>Pertanyaan Terkait Fitur Keuangan PINA</h1>

          <Accordion data={faqData} icon='plus' firstBorder={true} />
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl pb-24 max-2xl:px-4'>
          <HubungiPina cs='csWomanThree' />
        </div>
      </section>
    </main>
  );
}
