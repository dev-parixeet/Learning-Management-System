import React from 'react'

type Props = { currentPage: any; totalPages: any; onPageChange: () => void }

const pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div>
      <>
        <nav aria-label="Page navigation example">
          <ul className="flex items-end justify-end m-5 space-x-1 h-10 text-sm ">
            <li>
              <a
                onClick={() => onPageChange(currentPage - 1)}
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-lightblue border border-e-0 rounded-s-lg hover:text-white dark:bg-lightblue dark:border-black dark:text-white dark:hover:bg-lightblue dark:hover:text-white rounded-full "
              >
                <span className="sr-only">Previous</span>
                <button
                  disabled={currentPage === 1}
                >
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </button>
              </a>
            </li>

            {pages?.map((page) => (

              <li>
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-white font-bold border border-gray-300 hover:bg-lightblue hover:text-white dark:bg-gray-800 dark:border-black dark:text-black dark:hover:bg-white dark:hover:text-black rounded-full ${currentPage == page ? 'bg-lightblue dark:text-white' : 'bg-white dark:text-black'
                    }`}
                >
                  {page}
                </button>
              </li>
            ))}

            <li>
              <a
                onClick={() => onPageChange(currentPage + 1)}
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-white font-bold bg-lightblue border rounded-e-lg hover:text-gray-700 dark:bg-lightblue dark:border-black dark:text-white dark:hover:bg-lightblue dark:hover:text-white rounded-full"
              >
                <span className="sr-only">Next</span>
                <button
                  disabled={currentPage === totalPages}
                >
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180 rounded-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </>
    </div>
  )
}

export default pagination