import React from 'react';
import csManOne from '/static/images/cs/2.jpg';
import csWomanOne from '/static/images/cs/1.jpg';
import csWomanTwo from '/static/images/cs/3.jpg';
import csWomanThree from '/static/images/cs/4.jpg';

export default function HubungiPina() {
  return (
    <div className='flex overflow-hidden rounded-[40px] bg-pina-yellow-1'>
      <div className='flex flex-col items-start justify-between gap-8 px-12 py-8'>
        <h1>Ada Pertanyaan Seputar PINA?</h1>
        <p className='max-w-lg text-[1.25rem] font-normal leading-normal text-pina-smoke-1'>
          Hubungi Tim PINA dan dapatkan panduan lengkap mengenai produk PINA di
          +628-1110-8823-456 atau email ke hello@pina.id
        </p>
        <button className='mb-24 mt-auto rounded-lg bg-pina-smoke-1 px-6 py-4 text-[1.625rem] font-bold leading-snug text-white'>
          Hubungi PINA
        </button>
      </div>
      <Image
        src='/static/images/cs/4.jpg'
        width={579}
        height={579}
        alt='cs PINA'
      />
    </div>
  );
}
