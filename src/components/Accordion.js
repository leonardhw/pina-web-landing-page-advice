import React from 'react';

export default function Accordion({
  data = [],
  icon = 'arrow',
  firstBorder = false,
}) {
  return (
    <div
      className='hs-accordion-group col-span-2'
      data-hs-accordion-always-open
    >
      {data?.map(({ question, answer }, i) => (
        <div
          key={`accordion-key-${i}`}
          className={`hs-accordion border-b border-pina-smoke-5 ${
            firstBorder && 'first:border-t'
          }`}
          id={`accordion-${i}-heading`}
        >
          <button
            className='hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 py-12 text-left font-semibold text-pina-smoke-2 transition hover:text-gray-500 hs-accordion-active:text-pina-smoke-2 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500'
            aria-controls={`accordion-${i}`}
          >
            <h5 className='text-[1.75rem] font-bold leading-tight'>
              {question}
            </h5>
            {icon === 'arrow' && (
              <>
                <svg
                  className='block h-6 w-6 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-pina-smoke-2 hs-accordion-active:group-hover:text-pina-smoke-2 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  className='hidden h-6 w-6 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-pina-smoke-2 hs-accordion-active:group-hover:text-pina-smoke-2 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </>
            )}
            {icon === 'plus' && (
              <>
                <svg
                  class='block h-6 w-6 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-pina-smoke-2 hs-accordion-active:group-hover:text-pina-smoke-2 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.62421 7.86L13.6242 7.85999'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                  <path
                    d='M8.12421 13.36V2.35999'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
                <svg
                  class='hidden h-6 w-6 shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-pina-smoke-2 hs-accordion-active:group-hover:text-pina-smoke-2 dark:text-gray-400'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.62421 7.86L13.6242 7.85999'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </>
            )}
          </button>
          <div
            id={`accordion-${i}`}
            className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
            aria-labelledby={`accordion-${i}-heading`}
          >
            <h5 className='pb-12 font-normal leading-normal text-pina-smoke-2 dark:text-gray-200'>
              {answer}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}
