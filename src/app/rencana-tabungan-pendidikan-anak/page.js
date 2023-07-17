import Accordion from '@/components/Accordion';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'Rencanakan Dana Pendidikan Anak Bersama PINA',
  description:
    'Dapatkan strategi menabung dana pendidikan anak langsung dari konsultan keuangan terbaik di PINA. Rencanakan masa depan anak tanpa takut inflasi!',
};

export default function RencanaDanaPendidikanAnak() {
  const faqData = [
    {
      question: 'Apa pentingnya merencanakan dana pendidikan?',
      answer:
        'Merencanakan dana pendidikan untuk anak-anak penting karena hal ini membantu memastikan akses mereka ke pendidikan yang berkualitas tanpa mengorbankan kondisi keuangan keluarga.',
    },
    {
      question: 'Kapan waktu yang tepat untuk menyiapkan dana pendidikan?',
      answer:
        'Sebaiknya kamu memulai merencanakan dana pendidikan anak sejak dini. Semakin awal kamu memulai, semakin panjang waktu yang kamu miliki untuk mengumpulkan dana dengan bijak.',
    },
    {
      question: 'Berapa jumlah dana pendidikan yang ideal?',
      answer:
        'Jumlah dana yang harus kamu kumpulkan tergantung pada tujuan pendidikan anak dan faktor-faktor seperti biaya pendidikan yang diinginkan dan inflasi. CFP PINA dapat membantu kamu menentukan jumlah yang realistis.',
    },
    {
      question: 'Produk investasi apa yang cocok untuk dana pendidikan?',
      answer:
        'Instrumen investasi yang cocok untuk dana pendidikan anak dapat meliputi reksa dana, obligasi, saham, emas, dan deposito. Penting untukmu mempunyai rencana investasi jangka panjang untuk menentukan dana pendidikan yang sesuai dengan targetmu.',
    },
    {
      question:
        'Apakah saya dapat menggunakan rencana pensiun saya untuk membantu pembiayaan pendidikan anak?',
      answer:
        'Penggunaan dana pensiun untuk pembiayaan pendidikan anak tidak disarankan karena dapat mengurangi sumber dana pensiun yang kamu butuhkan di masa depan. Namun, ada beberapa program yang memungkinkan penarikan dana pensiun untuk pendidikan.',
    },
    {
      question: 'Apa yang harus disiapkan saat konsultasi dana pendidikan?',
      answer:
        'Sebelum konsultasi dana pendidikan, ada beberapa informasi dan dokumen yang perlu disiapkan. Ini termasuk data keuangan pribadi, seperti pendapatan, pengeluaran, aset, dan utang. Selain itu, jika kamu telah memiliki perencanaan keuangan sebelumnya, siapkan juga informasi tentang hal itu. Semua ini akan membantu CFP PINA dalam memberikan nasihat yang lebih terarah dan efektif.',
    },
    {
      question: 'Apakah konsultasi dana pendidikan harus bersama pasangan?',
      answer:
        'Idealnya, konsultasi dana pendidikan sebaiknya melibatkan pasangan. Ini penting karena rencana keuangan keluarga melibatkan kedua belah pihak, dan keterlibatan pasangan akan membantu dalam mengambil keputusan yang saling menguntungkan.',
    },
    {
      question:
        'Apa saja yang akan didapatkan saat konsultasi dana pendidikan?',
      answer:
        'Selama konsultasi dana pendidikan, kamu akan mendapatkan pemahaman yang lebih baik tentang kebutuhan keuangan pendidikan anak, strategi investasi yang cocok, informasi tentang opsi pembiayaan, perencanaan pajak terkait pendidikan, dan rencana tindakan yang dapat kamu ambil untuk mencapai tujuan keuanganmu.',
    },
    {
      question: 'Konsultasi untuk dana pendidikan memakan waktu berapa lama?',
      answer:
        'Durasi konsultasi pendidikan berlangsung pada seberapa banyak poin diskusi bersama CFP. Namun pada umumnya, dalam satu sesi konsultasi dapat dilakukan selama 60 menit.',
    },
  ];
  return (
    <main>
      <section className='bg-white pt-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='flex flex-col gap-6 pb-72'>
            <h1 className='text-center text-pina-smoke-1'>
              Tabungan Pendidikan Anak
            </h1>
            <h5 className='text-center text-[1.75rem] text-pina-smoke-1'>
              Lawan inflasi untuk masa depan buah hati.
            </h5>
            <div className='mx-auto my-8 w-16 border-b border-black'></div>
            <h5 className='text-center font-normal leading-normal text-pina-smoke-1'>
              Semakin hari dana pendidikan semakin mahal? Jangan sampai
              cita-cita buah hati jadi terhambat. Siapkan dana pendidikan
              bersama PINA agar anak-anak bisa tumbuh besar tanpa rasa khawatir.
            </h5>
          </div>
        </div>

        <div className='relative min-h-[500px] bg-pina-yellow-1'>
          <Image
            src='/../public/static/images/rencana-tabungan-pendidikan-anak.png'
            width={1251}
            height={659}
            alt='rencana dana pendidikan anak'
            className='absolute -top-60 left-0 right-0 mx-auto'
          />

          <div className='min-h-[420px]'></div>
          <div className='py-12'>
            <div className='mx-auto max-w-7xl max-2xl:px-4'>
              <h1>Konsultasi dan Pendampingan</h1>
              <ul className='mt-12 grid grid-cols-2 gap-8'>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal'>
                    Analisis lengkap rencana dana pendidikan sesuai kebutuhan
                  </h5>
                </li>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal'>
                    Rekomendasi perencanaan dan alokasi dana pendidikan
                  </h5>
                </li>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal'>
                    Diagnosa kondisi finansial klien dalam mengumpulkan dana
                    pendidikan
                  </h5>
                </li>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal'>
                    Konsultasi berkala dalam perjalanan kamu mencapai target
                  </h5>
                </li>
                <li className='inline-flex items-center gap-6'>
                  <Image
                    src='/static/images/stamp-check-dark.svg'
                    width={30}
                    height={30}
                    alt='check icon'
                  />
                  <h5 className='font-normal leading-normal'>
                    Proyeksi keberhasilan perencanaan dana pendidikan dari
                    kondisi saat ini
                  </h5>
                </li>
              </ul>

              <button className='mb-12 mt-24 overflow-hidden rounded-lg shadow-button'>
                <div className='rounded-lg border-[5px] border-black px-6 py-4 text-2xl/tight font-bold text-pina-smoke-6'>
                  Download & Konsultasi Sekarang
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <div className='grid grid-cols-2 gap-24'>
            <Image
              src='/static/images/konsultasi-dana-pendidikan-anak.png'
              width={567}
              height={855}
              alt='konsultasi dana pendidikan anak'
              className='mx-auto'
            />
            <div className='flex flex-col justify-center gap-4 text-pina-smoke-1'>
              <h1>Rencanakan Bersama PINA</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Mulai berlangganan PINA dan dapatkan sesi konsultasi langsung
                bersama CFP berpengalaman membuat strategi dana pendidikan!
              </h5>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Tim CFP PINA siap bantu kamu menyiapkan dana pendidikan anak dan
                selalu siap menyesuaikan strategi perencanaan keuangan sesuai
                kondisimu.
              </h5>
            </div>

            <div className='flex flex-col justify-center gap-4 text-pina-smoke-1'>
              <h1>Miliki Dana Pendidikan Lebih Mudah</h1>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Nilai inflasi untuk biaya pendidikan tergolong cukup tinggi dari
                tahun ke tahun. Siapkan dana pendidikan dengan tools dan CFP
                dari PINA untuk masa depan anak dan keluarga.
              </h5>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Dapatkan juga rangkuman keuanganmu atau financial report secara
                rutin agar lebih mudah mengerti detail dan kebutuhan untuk capai
                target dana pendidikan.
              </h5>
            </div>
            <Image
              src='/static/images/grafik-portofolio-investasi-step.png'
              width={429}
              height={710}
              alt='monitor investasi dana pendidikan'
              className='mx-auto'
            />
          </div>
        </div>
      </section>

      <section className='bg-pina-green-1 py-24'>
        <div className='mx-auto max-w-7xl max-2xl:px-4'>
          <h1 className='text-center'>
            Contoh Rekomendasi Rencana Dana Pendidikan dari CFP PINA
          </h1>
          <div className='mt-24 grid grid-cols-2 gap-4'>
            <div className='flex aspect-square min-h-[600px] flex-col justify-between rounded-3xl bg-white p-12'>
              <h3 className='text-[2.5rem] text-pina-smoke-1'>
                Diversifikasi Investasi Untuk Dana Pendidikan
              </h3>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Dalam mempersiapkan dana pendidikan berjenjang baik buah hati,
                maka diversifikasi aset dalam aktivitas investasi adalah hal
                yang penting.
              </h5>
            </div>
            <div className='flex aspect-square min-h-[600px] flex-col justify-between rounded-3xl bg-white p-12'>
              <h3 className='text-[2.5rem] text-pina-smoke-1'>
                Reksa Dana Saham untuk Target Pendidikan Jangka Panjang
              </h3>
              <h5 className='font-normal leading-normal text-pina-smoke-1'>
                Jika perencanaan dana pendidikan memiliki target jangka panjang
                (di atas 5 tahun) maka pertimbangkan untuk mengalokasikan
                sebagian dana dalam reksa dana saham.
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
          <h1 className='mb-12'>Pertanyaan Terkait Dana Pendidikan</h1>

          <Accordion data={faqData} icon='plus' firstBorder={true} />
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='mx-auto max-w-7xl pb-24 max-2xl:px-4'>
          <div className='flex overflow-hidden rounded-[40px] bg-pina-yellow-1'>
            <div className='flex flex-col items-start justify-between gap-8 px-12 py-8'>
              <h1>Ada Pertanyaan Lagi?</h1>
              <p className='max-w-lg text-[1.25rem] font-normal leading-normal text-pina-smoke-1'>
                Hubungi Tim PINA dan dapatkan panduan lengkap mengenai produk
                PINA di +628-1110-8823-456 atau email ke hello@pina.id
              </p>
              <button className='mb-24 mt-auto rounded-lg bg-pina-smoke-1 px-6 py-4 text-[1.625rem] font-bold leading-snug text-white'>
                Hubungi PINA
              </button>
            </div>
            <Image
              src='/static/images/PINA_photo_high_resolution_real_human_asian_woman_ultra_realist_8a9f99ad-9d0d-47db-8942-63f43c903eaf-1.jpg'
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
