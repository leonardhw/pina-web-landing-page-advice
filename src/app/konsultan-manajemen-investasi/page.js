import Accordion from '@/components/Accordion';
import HubungiPina from '@/components/HubungiPina';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'Konsultan Manajemen Investasi: Buat Uangmu Terus Bertumbuh',
  description:
    'Rencanakan masa depan finansial yang nyaman dengan rekomendasi investasi dari PINA. Dapatkan tips dan saran manajemen investasi cerdas agar uangmu terus bertumbuh.',
};

export default function KonsultanManajemenInvestasi() {
  const faqData = [
    {
      question: 'Apa produk investasi yang aman dan cuan?',
      answer:
        'Produk investasi yang aman dan cuan dapat bervariasi tergantung pada profil risiko dan tujuan investasmu. Beberapa pilihan umum meliputi reksa dana pasar uang, obligasi pemerintah, deposito, dan indeks saham yang terdiversifikasi dengan baik. Namun, penting untuk diingat bahwa setiap investasi memiliki risiko, dan penting untuk melakukan riset dan memahami produk investasi sebelum berinvestasi.',
    },
    {
      question: 'Apa itu mitigasi risiko investasi?',
      answer:
        'Mitigasi risiko investasi adalah upaya untuk mengurangi dampak risiko yang terkait dengan investasi. Hal ini dapat dilakukan dengan cara diversifikasi portofolio, memahami risiko yang terkait dengan jenis investasi tertentu, mengelola ekspektasi dan tujuan investasi, serta melakukan riset yang baik sebelum berinvestasi.',
    },
    {
      question: 'Bagaimana cara agar tidak terjebak investasi bodong?',
      answer:
        'Untuk menghindari terjebak dalam investasi bofong atau investasi bodong, penting untuk melakukan due diligence dan penelitian yang cermat sebelum berinvestasi. Pastikan kamu memahami produk investasi, periksa legalitas dan regulasi perusahaan investasi, dan waspada terhadap janji imbal hasil yang tidak realistis atau penawaran investasi yang terlalu bagus untuk menjadi kenyataan.',
    },
    {
      question: 'Bagaimana cara kaya lewat investasi?',
      answer:
        'Kekayaan yang dihasilkan dari investasi membutuhkan waktu, konsistensi, dan pemahaman yang baik tentang pasar investasi. Beberapa langkah yang dapat diambil termasuk merencanakan tujuan keuangan jangka panjang, melakukan diversifikasi portofolio, mempertimbangkan investasi jangka panjang, dan memperbarui strategi investasi secara teratur berdasarkan perubahan pasar.',
    },
    {
      question: 'Bagaimana langkah investasi untuk pemula?',
      answer:
        'Untuk pemula, langkah-langkah investasi yang direkomendasikan termasuk mempelajari dasar-dasar investasi, menentukan tujuan keuangan, membangun dana darurat, membuka rekening investasi, mempertimbangkan reksa dana yang terdiversifikasi, dan melakukan riset sebelum berinvestasi.',
    },
    {
      question: 'Apa manfaat melakukan konsultasi perencanaan investasi?',
      answer:
        'Konsultasi perencanaan investasi dapat memberikan manfaat berupa pemahaman mendalam tentang tujuan investasi, penilaian risiko, diversifikasi portofolio, perencanaan pajak, dan strategi investasi yang disesuaikan dengan kebutuhan dan profil risiko kamu.',
    },
  ];
  return (
    <main>
      <section className='bg-white pt-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='flex flex-col gap-6 pb-72'>
            <h1 className='text-center text-pina-smoke-1'>
              Manajemen Investasi
            </h1>
            <h5 className='text-center text-[1.75rem] text-pina-smoke-1'>
              Buat uang bekerja untuk mewujudkan tujuan keuanganmu
            </h5>
            <div className='mx-auto my-8 w-16 border-b border-black'></div>
            <h5 className='text-center font-normal leading-normal text-pina-smoke-1'>
              Miliki manager investasi pribadi yang fokus untuk membantu kamu
              mencapai tujuan keuangan kamu melalui investasi. Mulai investasi
              semudah itu Tentukan investasi yang tepat sesuai dengan risiko dan
              target investasi yang ingin kamu dapatkan.
            </h5>
          </div>
        </div>

        <div className='relative bg-pina-yellow-1'>
          {/* <div className='aspect-[1.89] overflow-hidden'>
            <Image
              src='/static/images/manajemen-investasi-pina-hr.jpg'
              width={1251}
              height={659}
              alt='rencana dana pendidikan anak'
              className='h-full w-full object-cover object-center'
            />
          </div> */}

          <div className='absolute -top-60 left-0 right-0 mx-auto aspect-[1.89] max-w-7xl overflow-hidden rounded-[20px]'>
            <Image
              src='/static/images/manajemen-investasi-pina-hr.jpg'
              width={1251}
              height={659}
              alt='konsultan manajemen investasi pina'
              className='h-full w-full object-cover object-top'
            />
          </div>

          {/* Divider */}
          <div className='min-h-[420px]'></div>

          <div className='pb-24 pt-12'>
            <div className='mx-auto max-w-7xl max-2xl:px-4'>
              <div className='flex flex-col items-center justify-center pb-12'>
                <h1 className='text-center text-pina-smoke-1'>
                  Tumbuhkan Aset Dengan Solusi Investasi Dari Ahlinya
                </h1>
                <button className='mt-12 overflow-hidden rounded-lg shadow-button'>
                  <div className='rounded-lg border-[5px] border-black px-6 py-4 text-2xl/tight font-bold text-pina-smoke-6'>
                    Download & Konsultasi Sekarang
                  </div>
                </button>
              </div>

              <div className='grid gap-12'>
                <div className='relative mx-auto flex h-[427px] overflow-hidden rounded-[20px] bg-white'>
                  <div className='flex flex-col items-start gap-8 px-12 py-12'>
                    <h1 className='text-pina-smoke-1'>Analisa Portofolio</h1>
                    <h5 className='font-normal leading-normal text-pina-smoke-1'>
                      CFP PINA akan menganalisa portofolio investasi saat ini
                      untuk memastikan asetmu bertumbuh dan sesuai dengan
                      rencana tujuan keuangan di masa depan.
                    </h5>
                  </div>
                  <div className='aspect-[1.17]'>
                    <Image
                      src='/static/images/analisa-portofolio-investasi.jpg'
                      width={1024}
                      height={1024}
                      alt='analisa portofolio investasi'
                      className='object-cover object-center'
                    />
                  </div>
                </div>
                <div className='relative mx-auto flex h-[427px] overflow-hidden rounded-2.5xl bg-white'>
                  <div className='flex flex-col items-start gap-8 px-12 py-12'>
                    <h1 className='text-pina-smoke-1'>Rekomendasi Investasi</h1>
                    <h5 className='font-normal leading-normal text-pina-smoke-1'>
                      CFP PINA siap memberikan rekomendasi dan rencana investasi
                      yang disesuaikan dengan tujuan keuangan. Kamu juga bisa
                      menggunakan fitur robo-advisor PINA untuk pengalaman
                      investasi otomatis.
                    </h5>
                  </div>
                  <div className='aspect-[1.17]'>
                    <Image
                      src='/static/images/rekomendasi-investasi.jpg'
                      width={1024}
                      height={1024}
                      alt='rekomendasi investai'
                      className='object-cover object-center'
                    />
                  </div>
                </div>
                <div className='relative mx-auto flex h-[427px] overflow-hidden rounded-[20px] bg-white'>
                  <div className='flex flex-col items-start gap-8 px-12 py-12'>
                    <h1 className='text-pina-smoke-1'>Dukungan Lainnya</h1>
                    <h5 className='font-normal leading-normal text-pina-smoke-1'>
                      Bantuan alokasi aset yang dimiliki hingga saran
                      pengelolaan investasi sesuai kebutuhanmu. CFP PINA selalu
                      ada untuk memberikan kemudahan akses untuk capai financial
                      goal.
                    </h5>
                  </div>
                  <div className='aspect-[1.17]'>
                    <Image
                      src='/static/images/layanan-konsultasi-24-jam.jpg'
                      width={1024}
                      height={1024}
                      alt='layanan konsultasi keuangan'
                      className='object-cover object-center'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid grid-cols-2 gap-24'>
            <div className='mx-auto aspect-[0.66] overflow-hidden rounded-[20px]'>
              <Image
                src='/static/images/konsultasi-pendampingan-keuangan.jpg'
                width={1024}
                height={1024}
                alt='konsultasi dana pendidikan anak'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='flex flex-col justify-center gap-4 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>Konsultasi dan Pendampingan</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Mulai berlangganan PINA dan dapatkan saran keuangan untuk
                mendukung investasimu yang lebih profitable.
              </h5>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                CFP PINA siap membantu untuk menyesuaikan investasi dengan
                kondisi pasar terkini dengan strategi yang disesuaikan dengan
                kebutuhanmu.
              </h5>
            </div>
          </div>

          <div className='pb-12 pt-24'>
            <div className='mx-auto aspect-[2.98]  overflow-hidden rounded-2.5xl bg-red-100'>
              <Image
                src='/static/images/grafik-investasi.jpg'
                width={1024}
                height={1024}
                alt='grafik investasi'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='my-12 grid grid-cols-2 gap-8'>
              <h1 className='max-w-lg text-pina-smoke-1'>
                Kelola Investasi Agar Tetap Bertumbuh
              </h1>
              <ul className='grid gap-8'>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal text-pina-smoke-1'>
                    Mengukur kemampuan dan kebutuhan sesuai profil resiko
                    investasi.
                  </h5>
                </li>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal text-pina-smoke-1'>
                    Analisis portofolio dan saran investasi selanjutnya.
                  </h5>
                </li>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal text-pina-smoke-1'>
                    Evaluasi profil risiko dan tujuan keuangan untuk tingkatkan
                    kualitas aset yang dimiliki.
                  </h5>
                </li>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal text-pina-smoke-1'>
                    Saran diversifikasi portofolio untuk menjaga aset dari
                    fluktuasi pasar yang tidak menentu.
                  </h5>
                </li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-24 py-12'>
            <div className='flex flex-col justify-center gap-4 text-pina-smoke-1'>
              <h1 className='text-pina-smoke-1'>
                Pantau Perkembangan Investasi
              </h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Financial Planner PINA menggunakan tools analisis portofolio
                untuk melengkapi saran investasi sesuai tujuan keuanganmu.
              </h5>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Kamu bisa mengakses dan melakukan setiap saran investasi dari
                CFP. Cara baru investasi dengan saran dari ahli dan aplikasi
                dalam genggaman.
              </h5>
            </div>
            <Image
              src='/static/images/grafik-portofolio-investasi-line.png'
              width={429}
              height={607}
              alt='aplikasi investasi pina'
            />
          </div>
        </div>
      </section>

      <section className='bg-pina-green-1 py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='text-center'>
            Contoh Rekomendasi Perencanaan Investasi Dari CFP PINA
          </h1>
          <div className='mt-24 grid grid-cols-2 gap-4'>
            <div className='flex aspect-square min-h-[600px] flex-col justify-between rounded-3xl bg-white p-12'>
              <h3 className='text-[2.5rem] text-pina-smoke-1'>
                Perhatikan Profil Risiko Saat Berinvestasi
              </h3>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Tentukan profil risiko sebelum berinvestasi, profil risiko ini
                sangat berperan penting untuk menentukan instrumen apa yang
                paling cocok dengan kamu. Pelajari pula berbagai macam instrumen
                dimulai dari seni fundamental, risiko, hingga syarat minimum
                kemampuan dalam memperolehnya.
              </h5>
            </div>
            <div className='flex aspect-square min-h-[600px] flex-col justify-between rounded-3xl bg-white p-12'>
              <h3 className='text-[2.5rem] text-pina-smoke-1'>
                Membuat Budget Investasi Agar Menghindari Kebocoran
              </h3>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Mulailah dengan budgeting seberapa banyak porsi uang yang bisa
                kamu investasikan secara konsisten dan tentukan pula tujuan
                keuangan yang ingin kamu capai dengan beberapa detail meliputi:
                nominal, janPastikan asetmu selalu bertumbuh dan keuanganmu
                tetap berada di jalur yang tepat dengan fitur-fitur canggih yang
                ada di PINAgka waktu, potensial return yang diharapkan hingga
                risiko yang dapat terjadi dalam proses pencapaiannya.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-center text-pina-smoke-1'>
              4 Langkah Mudah Konsultasi di PINA
            </h1>
            <div className='my-24 grid grid-cols-4'>
              <div className='flex flex-col items-center'>
                <div className='aspect-square h-[100px] rounded-full  bg-pina-yellow-4'>
                  <Image
                    src='/static/images/icon-system-login.svg'
                    width={59}
                    height={59}
                    alt='register icon'
                    className='mx-auto my-auto h-full'
                  />
                </div>
                <h5 className='mt-6 max-w-[120px] text-center leading-normal text-pina-smoke-1'>
                  Buat Akun di PINA
                </h5>
              </div>
              <div className='flex flex-col items-center'>
                <div className='aspect-square h-[100px] rounded-full  bg-pina-yellow-4'>
                  <Image
                    src='/static/images/icon-system-icon-design-calendar.svg'
                    width={59}
                    height={59}
                    alt='schedule icon'
                    className='mx-auto my-auto h-full'
                  />
                </div>
                <h5 className='mt-6 max-w-[212px] text-center leading-normal text-pina-smoke-1'>
                  Buat Jadwal Konsultasi dengan CFP®
                </h5>
              </div>
              <div className='flex flex-col items-center'>
                <div className='aspect-square h-[100px] rounded-full  bg-pina-yellow-4'>
                  <Image
                    src='/static/images/icon-system-file-edit-ou-lc.svg'
                    width={59}
                    height={59}
                    alt='file icon'
                    className='mx-auto my-auto h-full'
                  />
                </div>
                <h5 className='mt-6 max-w-[220px] text-center leading-normal text-pina-smoke-1'>
                  Dapatkan Rekomendasi dari CFP®
                </h5>
              </div>
              <div className='flex flex-col items-center'>
                <div className='aspect-square h-[100px] rounded-full  bg-pina-yellow-4'>
                  <Image
                    src='/static/images/icon-chart-and-graphs-line-03-up.svg'
                    width={59}
                    height={59}
                    alt='track icon'
                    className='mx-auto my-auto h-full'
                  />
                </div>
                <h5 className='mt-6 text-center leading-normal text-pina-smoke-1'>
                  Pantau Progress Keuanganmu
                </h5>
              </div>
            </div>
            <button className='rounded-lg bg-pina-yellow-1 px-6 py-4 text-center text-[1.625rem] font-bold leading-tight text-pina-smoke-6'>
              Download & Konsultasi Sekarang
            </button>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='mb-24'>Pertanyaan Terkait Rencana Investasi</h1>

          <Accordion data={faqData} icon='plus' firstBorder={true} />
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl pb-24 max-2xl:px-4'>
          <HubungiPina cs='csManOne' />
        </div>
      </section>
    </main>
  );
}
