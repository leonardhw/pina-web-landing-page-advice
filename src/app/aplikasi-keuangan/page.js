import Accordion from '@/components/Accordion';
import HubungiPina from '@/components/HubungiPina';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Kendalikan Keuangan jadi Lebih Cepat & Efisien cukup pakai PINA',
  description:
    'PINA memberikan kontrol penuh atas keuangan Anda. Solusi lengkap atur uang mulai dari budgeting, cash flow, hitung net worth dan financial checkup rutin.',
};

export default function AplikasiKeuangan() {
  const faqData = [
    {
      question: 'Bagaimana aplikasi PINA membantu dalam mengelola anggaran?',
      answer:
        'Aplikasi PINA memungkinkan kamu untuk membuat anggaran dengan menetapkan kategori pengeluaran dan mengatur batas anggaran untuk setiap kategori. Kamu dapat memantau pengeluaran mereka secara real-time dan menerima peringatan jika mereka melebihi batas anggaran yang telah ditetapkan.',
    },
    {
      question: 'Apa manfaat penggunaan fitur penghitungan net worth?',
      answer:
        'Fitur penghitungan net worth dalam memungkinkan kamu untuk mencatat dan melacak nilai aset, seperti properti, kendaraan, investasi, dan lainnya. Hal ini membantu kamu memiliki pemahaman yang lebih baik tentang kekayaan bersih dan memantau perubahan nilai aset dari waktu ke waktu.',
    },
    {
      question: 'Bagaimana aplikasi PINA melacak cash flow?',
      answer:
        'Aplikasi PINA secara otomatis memantau dan mencatat aliran masuk dan keluar uang. Kamu dapat memasukkan pendapatan dan pengeluaran mereka secara manual atau mengintegrasikan aplikasi dengan rekening bank dan e-wallet untuk memperoleh pembaruan otomatis.',
    },
    {
      question: 'Apakah aplikasi PINA aman digunakan?',
      answer:
        'Ya, aplikasi PINA dirancang dengan keamanan yang tinggi. PINA menggunakan enkripsi data untuk melindungi informasi pribadi pengguna. Kamu bisa cek keamanan dan legalitasi PINA di sini.',
    },
    {
      question: 'Bagaimana jika terjadi overbudget?',
      answer:
        'PINA akan mengirimkan pemberitahuan melalui notifikasi di aplikasi ketika kamu mendekati atau melebihi batas anggaran yang telah ditetapkan. Ini membantumu tetap sadar terhadap pengeluaran dan menghindari pengeluaran berlebihan.',
    },
    {
      question:
        'Apakah saya dapat melihat laporan tentang kesehatan keuangan saya?',
      answer:
        'Kamu bisa mendapatkan laporab kesehatan keuangan pada fitur Net Worth dalam bentuk rasio. Rasio tersebut membantumu memahami keuangan dengan lebih baik dan mengambil keputusan yang cerdas dalam pengelolaan keuangan.',
    },
    {
      question: 'Apakah fitur ini berbayar atau gratis?',
      answer:
        'Kamu dapat merasakan kecanggihan teknologi fitur keuangan yang ada di PINA seperti yang ada di deskripsi sebelumya tanpa dipungut biaya apapun. Namun, ada beberapa fitur yang hanya bisa diakses jika kamu mendaftar sebagai member. ',
    },
  ];
  return (
    <main className='bg-white'>
      <section className='bg-pina-yellow-1'>
        <div className='mx-auto max-w-8xl'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center gap-8 px-12 py-24'>
              <h1 className='text-pina-smoke-1'>Aplikasi Keuangan Personal</h1>
              <h4 className='text-[1.75rem] leading-relaxed text-pina-smoke-1'>
                Atur uang tidak pernah semudah dengan PINA
              </h4>
              <div className='my-4 w-16 border-b border-black'></div>

              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Kendalikan keuanganmu jadi lebih mudah melalui financial tools
                yang lengkap dari PINA. Rencanakan budget, lacak aset dan saldo,
                hingga pengeluaran. Semuanya bisa kamu akses di satu aplikasi.
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
            <div className='flex items-center justify-center py-24'>
              <Image
                src='/static/images/chart-alokasi-pengeluaran.png'
                width={244}
                height={334}
                alt='chart alokasi pengeluaran'
              />
              <Image
                src='/static/images/fitur-net-worth.png'
                width={517}
                height={612}
                alt='fitur net worth'
                className='-ml-24'
              />
              <div className='-ml-36'>
                <Image
                  src='/static/images/rasio-keuangan.png'
                  width={251}
                  height={350}
                  alt='rasio keuangan'
                />
                <Image
                  src='/static/images/monitor-cash-flow.png'
                  width={251}
                  height={350}
                  alt='monitor cashflow'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white pt-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='pb-12'>
            <h1 className='text-center'>
              Pahami dan Kembangkan <br /> Kekayaan Bersihmu!
            </h1>
            <h5 className='mt-8 text-center font-normal leading-normal'>
              Dapatkan gambaran lengkap tentang aset & utangmu, sehingga kamu
              lebih mudah melacak keuanganmu!
            </h5>
          </div>

          <div className='grid grid-cols-2 gap-24 py-12'>
            <div className='flex flex-col justify-center gap-8 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>Hitung Net Worth</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Dapatkan informasi lengkap mengenai aset dan hutangmu cukup dari
                genggaman.
              </h5>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                PINA sediakan laporan menyeluruh secara rutin terkait kekayaan
                bersih milikmu.
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
                src='/static/images/fitur-net-worth-large.png'
                width={749}
                height={1035}
                alt='hitung net worth pina'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='mx-auto -mt-48 aspect-[0.66] overflow-hidden rounded-[20px]'>
              <Image
                src='/static/images/lacak-aset-investasi.png'
                width={936}
                height={1105}
                alt='lacak aset investasi'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='-mt-48 flex flex-col justify-center gap-8 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>
                Lacak Perkembangan Kondisi Keuangan
              </h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Dapatkan financial check up berkala dengan menghubungkan semua
                akun keuangan dan produk investasi di satu tampilan aplikasi.
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
          </div>

          <div className='-mt-24 grid grid-cols-2'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6'>
                <Image
                  src='/static/images/analysis-icon.svg'
                  width={25}
                  height={25}
                  alt='analysis acc'
                />
                <h4 className='text-[1.75rem] leading-normal'>
                  Lacak Pengeluaran dan Cash Flow
                </h4>
              </div>
              <h5 className='mt-6 font-normal leading-normal'>
                Monitor setiap uang yang masuk dan keluar dari rekening ataupun
                dompet digital. Dapatkan kendali penuh mengelola cash flow
                dengan lebih baik.
              </h5>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6'>
                <Image
                  src='/static/images/analysis-check.svg'
                  width={25}
                  height={25}
                  alt='analysis acc'
                />
                <h4 className='text-[1.75rem] leading-normal'>
                  Rasio Kesehatan Keuangan
                </h4>
              </div>
              <h5 className='mt-6 font-normal leading-normal'>
                Dapatkan informasi tentang kesehatan keuanganmu dalam bentuk
                rasio melalui catatan net worth yang kamu miliki.
              </h5>
            </div>
          </div>

          <div className='pb-12 pt-24'>
            <h1 className='text-center'>
              Kendalikan Pengeluaran dengan Fitur Pencatatan Keuangan
            </h1>
            <h5 className='mt-8 text-center font-normal leading-normal'>
              Buat anggaran pengeluaranmu sendiri dan memantaunya agar tetap
              sesuai dengan tujuan keuangan. Tak perlu khawatir over spending,
              karena kamu akan dapat pemberiahuan dari PINA.
            </h5>
          </div>

          <div className='grid grid-cols-2 gap-24 py-12'>
            <div className='flex flex-col justify-center gap-8 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>Alat Budgeting</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Buat anggaran, lacak pengeluaran, dan kendalikan keuanganmu
                dengan mudah.
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
                src='/static/images/aplikasi-pencatatan-keuangan.png'
                width={749}
                height={1035}
                alt='hitung net worth pina'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='mx-auto -mt-48 aspect-[0.66] overflow-hidden rounded-[20px]'>
              <Image
                src='/static/images/alokasi-pengeluaran.png'
                width={936}
                height={1105}
                alt='lacak aset investasi'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='-mt-48 flex flex-col justify-center gap-8 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>Alokasi Pengeluaran</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Dapatkan laporan pengeluaran bulanan berdasarkan kategori dan
                bandingkan rata-rata besaran pengeluaranmu tiap bulan.
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
          </div>

          <div className='-mt-24 grid grid-cols-2'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6'>
                <Image
                  src='/static/images/analysis-coin-icon.svg'
                  width={25}
                  height={25}
                  alt='analysis acc'
                />
                <h4 className='text-[1.75rem] leading-normal'>
                  Lihat Riwayat Cashflow
                </h4>
              </div>
              <h5 className='mt-6 font-normal leading-normal'>
                Pantau pengeluaran dan pemasukanmu dalam satu aplikasi sehingga
                tidak perlu buka-tutup dan pindah aplikasi lain.
              </h5>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6'>
                <Image
                  src='/static/images/analysis-file-icon.svg'
                  width={25}
                  height={25}
                  alt='analysis acc'
                />
                <h4 className='text-[1.75rem] leading-normal'>
                  Rangkuman Budget
                </h4>
              </div>
              <h5 className='mt-6 font-normal leading-normal'>
                Cari tahu rangkuman budget bulananmu, mulai dari persiapan,
                budget terpakai, hingga saldo budget.
              </h5>
            </div>
          </div>
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
          <HubungiPina cs='csWomanOne' />
        </div>
      </section>
    </main>
  );
}
