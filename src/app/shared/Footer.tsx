import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#041427]  mt-[67px] pt-14">
      <div className="container">
        <div className="text-body-lg lg:text-[28px] font-bold text-white mb-12">
          <Link href="/" className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="39" viewBox="0 0 34 39" fill="none">
              <rect x="11.2407" y="17.5493" width="2.09138" height="20.8912" rx="1.04569" fill="white" stroke="white" strokeWidth="0.9" />
              <rect x="19.5922" y="17.5493" width="2.09138" height="20.8912" rx="1.04569" fill="white" stroke="white" strokeWidth="0.9" />
              <rect x="15.4292" y="11.6789" width="2.09138" height="26.771" rx="1.04569" fill="white" stroke="white" strokeWidth="0.9" />
              <rect x="14.2611" y="4.07603" width="4.79891" height="5.10958" rx="2.39946" fill="white" stroke="white" strokeWidth="0.7" />
              <path d="M31.0614 7.02246C32.365 9.51777 32.999 12.3572 32.8943 15.2136C32.7896 18.0699 31.9496 20.8324 30.4668 23.1833C29.1861 25.2139 27.4701 26.8675 25.4688 28.0036C24.7142 28.432 23.8592 27.8456 23.8573 27.0408C23.8564 26.5993 24.1133 26.2126 24.4876 26.0202C26.2815 25.0979 27.4558 23.8021 28.653 21.904C29.9126 19.907 30.6311 17.5527 30.7205 15.1124C30.81 12.672 30.2663 10.2487 29.156 8.1236C28.1009 6.10393 26.8246 4.38759 25.0807 3.24097C24.7038 2.9931 24.5057 2.52135 24.6423 2.06491C24.8309 1.43515 25.5789 1.12138 26.1571 1.50688C28.1916 2.86321 29.8802 4.76142 31.0614 7.02246Z" fill="white" stroke="white" strokeWidth="0.9" />
              <path d="M2.9386 22.0723C1.635 19.577 1.00099 16.7375 1.10566 13.8812C1.21036 11.0248 2.05039 8.26235 3.53316 5.91141C4.81387 3.88087 6.52985 2.22723 8.53123 1.0911C9.28583 0.662725 10.1408 1.24914 10.1427 2.05389C10.1436 2.49542 9.88672 2.88217 9.51244 3.07457C7.71851 3.99683 6.5442 5.29261 5.34699 7.19071C4.08741 9.18775 3.36894 11.542 3.27947 13.9823C3.19005 16.4227 3.73375 18.846 4.84396 20.9711C5.89915 22.9908 7.17543 24.7071 8.91927 25.8538C9.29621 26.1016 9.49431 26.5734 9.3577 27.0298C9.16906 27.6596 8.42111 27.9733 7.84285 27.5878C5.80841 26.2315 4.11984 24.3333 2.9386 22.0723Z" fill="white" stroke="white" strokeWidth="0.9" />
            </svg>
            <span>GrowHubs</span>
          </Link>
        </div>
        <div className="flex justify-between mb-[51px]">
          {/* Products Column */}
          <div className='flex gap-[100px]'>
            <div>
              <h3 className="text-h6 text-white font-medium leading-[30px] mb-6">Products</h3>
              <ul className="space-y-4">
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Course</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Community</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Consultancy</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Podcasts</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Merchandise</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Events</li>
              </ul>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-h6 text-white font-medium leading-[30px] mb-6">Links</h3>
              <ul className="space-y-4">
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Products</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Torvat</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Resources</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Blog</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Pricing</li>
              </ul>
            </div>

            {/* Scale Column */}
            <div>
              <h3 className="text-h6 text-white font-medium leading-[30px] mb-6">Scale</h3>
              <ul className="space-y-4">
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Co-sell</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Email Marketing</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Funnels & Automations</li>
                <li className='text-white opacity-[0.7] font-medium leading-6 text-body'>Third party Integrations</li>
              </ul>
            </div>
          </div>
          {/* Social Media Column */}
          <div>
            <h3 className="text-h6 text-white font-medium leading-[30px] mb-6">Social media</h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-1.5 mb-10">
              <div className="flex items-center text-white opacity-[0.7] leading-6 text-body">
                <span>Instagram</span
                ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2682_2111)">
                    <path d="M7.83701 6.28774H13.6117M13.6117 6.28774V12.0624M13.6117 6.28774L6.1871 13.7124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2682_2111">
                      <rect width="14" height="14" fill="white" transform="translate(9.89941 0.100586) rotate(45)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center text-white opacity-[0.7] leading-6 text-body">
                <span>Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2682_2111)">
                    <path d="M7.83701 6.28774H13.6117M13.6117 6.28774V12.0624M13.6117 6.28774L6.1871 13.7124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2682_2111">
                      <rect width="14" height="14" fill="white" transform="translate(9.89941 0.100586) rotate(45)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center text-white opacity-[0.7] leading-6 text-body">
                <span>TikTok</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2682_2111)">
                    <path d="M7.83701 6.28774H13.6117M13.6117 6.28774V12.0624M13.6117 6.28774L6.1871 13.7124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2682_2111">
                      <rect width="14" height="14" fill="white" transform="translate(9.89941 0.100586) rotate(45)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center text-white opacity-[0.7] leading-6 text-body">
                <span>Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2682_2111)">
                    <path d="M7.83701 6.28774H13.6117M13.6117 6.28774V12.0624M13.6117 6.28774L6.1871 13.7124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2682_2111">
                      <rect width="14" height="14" fill="white" transform="translate(9.89941 0.100586) rotate(45)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center text-white opacity-[0.7] leading-6 text-body">
                <span>LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2682_2111)">
                    <path d="M7.83701 6.28774H13.6117M13.6117 6.28774V12.0624M13.6117 6.28774L6.1871 13.7124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2682_2111">
                      <rect width="14" height="14" fill="white" transform="translate(9.89941 0.100586) rotate(45)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center text-white opacity-[0.7] leading-6 text-body">
                <span>YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2682_2111)">
                    <path d="M7.83701 6.28774H13.6117M13.6117 6.28774V12.0624M13.6117 6.28774L6.1871 13.7124" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2682_2111">
                      <rect width="14" height="14" fill="white" transform="translate(9.89941 0.100586) rotate(45)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {/* address */}
            <div>
              <h3 className="text-h6 text-white font-medium leading-[30px] mb-2">Address</h3>
              <p className="text-white opacity-[0.7] leading-6 text-body mb-11">
                Marketagate 31, 4611,
                Kristiansand,<br /> NORWAY
                (+47 KB 19 243)
              </p>
              <div className="px-4 py-3.5 border border-[#FFFFFF80] rounded-[90px] text-neutral-2 text-body font-normal leading-6 w-fit">
                <p>@2025 all right reserved growhubs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <h1 className="footer_text">GROWHUBS</h1>
      </div>
    </footer>
  );
};

export default Footer;