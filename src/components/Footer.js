import React from 'react';
import headLogo from '../../public/head-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative min-h-[500px] bg-pina-smoke-4 py-24'>
      <div className='mx-auto max-w-7xl max-2xl:px-4'>
        <div className='grid gap-8 md:grid-cols-5'>
          <div className=''>
            <Image src={headLogo} width={200} height={200} alt='pina logo' />
            <div className='-ml-2 mt-6 inline-flex items-center gap-4'>
              <Image
                src='/static/images/icon-social-media-and-brands-instagram.svg'
                width={50}
                height={50}
                alt='instagram icon'
              />
              <Image
                src='/static/images/icon-social-media-and-brands-you-tube.svg'
                width={50}
                height={50}
                alt='youtube icon'
              />
              <Image
                src='/static/images/icon-chart-and-graphs-mail.svg'
                width={50}
                height={50}
                alt='email icon'
              />
            </div>
            <p className='mt-6 text-xs/5 tracking-[0.2px] text-pina-smoke-2/70'>
              PT Pina Aplikasi Bersama <br /> Jln. Tentara Pelajar, Ruko Permata
              Senayan Unit B10-11, RT.1/RW.7, Kebayoran Lama, Jakarta Selatan,
              Jakarta 12210
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <h5 className='mb-4 text-[1.75rem]'>Advisory</h5>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Tabungan Dana Darurat
            </Link>
            <Link
              href='/rencana-tabungan-pendidikan-anak'
              className='mb-0.5 block leading-7 tracking-[0.2px]'
            >
              Tabungan Dana Pendidikan
            </Link>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Rencana Pensiun
            </Link>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Rencana Beli Rumah
            </Link>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Perlindungan Asuransi
            </Link>
            <Link
              href='/konsultan-manajemen-investasi'
              className='mb-0.5 block leading-7 tracking-[0.2px]'
            >
              Manajemen Investasi
            </Link>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Manajemen Utang
            </Link>
          </div>

          <div className='flex flex-col gap-2'>
            <h5 className='mb-4 text-[1.75rem]'>Financial Tools</h5>
            <Link
              href='/aplikasi-keuangan'
              className='mb-0.5 block leading-7 tracking-[0.2px]'
            >
              Aplikasi Keuangan
            </Link>
            <Link
              href='/aplikasi-investasi'
              className='mb-0.5 block leading-7 tracking-[0.2px]'
            >
              Aplikasi Investasi
            </Link>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Kalkulator Dana Darurat
            </Link>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Kalkulator Dana Pensiun
            </Link>
          </div>

          <div className='flex flex-col gap-2'>
            <h5 className='mb-4 text-[1.75rem]'>Tentang PINA</h5>
            <Link
              href='/tentang-pina'
              className='mb-0.5 block leading-7 tracking-[0.2px]'
            >
              About Us
            </Link>
            <Link
              href=''
              className='mb-0.5 block leading-7 tracking-[0.2px] text-gray-300'
            >
              Pricing
            </Link>
          </div>

          <div className=''>
            <h5 className='mb-6 text-[1.75rem]'>Download</h5>
            <div className='flex flex-col gap-4'>
              <Link href='https://google.com'>
                <Image
                  src='/static/images/app-store-download.png'
                  width={150}
                  height={200}
                  alt='app store logo'
                />
              </Link>
              <Link href='https://google.com'>
                <Image
                  src='/static/images/gplay-download-1.png'
                  width={150}
                  height={200}
                  alt='playstore logo'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 pb-8 text-center leading-7 text-pina-smoke-2'>
        Copyright © 2023 PT Pina Aplikasi Bersama | Kebijakan Privasi
      </div>
    </footer>
  );
}
