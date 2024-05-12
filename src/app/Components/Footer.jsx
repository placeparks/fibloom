import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
      <div className='bgsectionfooter h-screen mt-[-110%] md:mt-0'>
          <footer class="py-6 text-white bg-transparent z-10 pt-0 md:pt-[44%]">
          <div className='container mx-auto px-6'>
                <div className='flex flex-wrap justify-left md:justify-between items-left md:items-center'>
                <div class=' w-full flex flex-col md:border-r md:mt-0 mt-[700px] justify-left items-left md:justify-center md:items-center md:w-1/4 mb-6 mr-2 md:mb-0'>
                        <Link href="#" className='flex items-center mb-4'>
                            <Image src='/assets/section1/FB.png' width={203.12} height={89} alt='Fibonacci Bloom' />
                        </Link>
                        <p className='red-hat-display-regular text-sm mt-2 text-left md:text-center w-[242px]'>
                        In the mystical realm of Elysium, darkness is spreading, threatening to consume the once vibrant lands. As the chosen hero                        </p>
                      </div>
                      <div className=""></div>
                    <div className='w-[228px] h-[191px] flex flex-col justify-start items-start mt-2 md:mt-0'>
                        <h3 className='mb-3 text-xl poppins-extrabold'>THE PROJECT</h3>
                        <ul className='space-y-1 leading-[30px] md:leading-[50px] '>
                            <li><Link href="#" className='hover:text-gray-400 text-base poppins-light'>Game</Link></li>
                            <li><Link href="#roadmap" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400 text-base poppins-light">Roadmap</Link></li>
                            <li><Link href="#" className='hover:text-gray-400 text-base poppins-light'>NFT Mint</Link></li>
                        </ul>
                    </div>
                    <div className='w-[228px] h-[191px] flex flex-col justify-start items-start'>
                        <h3 className='text-xl poppins-extrabold mb-3'>LEGAL STUFF</h3>
                        <ul className='space-y-1 md:leading-[50px]  '>
                            <li><Link href="#" className='hover:text-gray-400 text-base poppins-light'>Terms & Conditions</Link></li>
                            <li><Link href="#" className='hover:text-gray-400 text-base poppins-light'>Privacy Policy</Link></li>
                            <li><Link href="#questions"  className='cursor-pointer hover:text-gray-400 text-base poppins-light'>FAQ & Support</Link></li>
                        </ul>
                    </div>
                    <div className='w-[228px] h-[191px] flex flex-col justify-start items-start'>
                        <h3 className='text-xl poppins-extrabold mb-3'>MORE STUFF</h3>
                        <ul className='space-y-1 md:leading-[50px] '>
                            <li><Link href="#" className='hover:text-gray-400 text-base poppins-light'>Marketplace</Link></li>
                            <li><Link href="#" className='hover:text-gray-400 text-base poppins-light'>Whitepaper</Link></li>
                            <li><Link href="#" className='hover:text-gray-400 text-base poppins-light'>Auction Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-end md:mt-24 items-center gap-8 md:gap-[350px] text-center text-sm'>
                <div className='flex justify-center space-x-4'>
                    <Link href="#" className='hover:bg-gray-700 p-2 rounded-full'>
                    <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 0C7.6075 0 2.48122e-06 7.5707 2.48122e-06 16.9178C-0.00192569 20.4693 1.11999 23.9312 3.20657 26.8124C5.29315 29.6936 8.23845 31.8478 11.6246 32.9693C12.4746 33.1165 12.7925 32.609 12.7925 32.164C12.7925 31.7631 12.7704 30.4317 12.7704 29.014C8.5 29.7973 7.395 27.9786 7.055 27.0261C6.8629 26.5389 6.035 25.0383 5.3125 24.6356C4.7175 24.3193 3.8675 23.536 5.2904 23.5157C6.63 23.4937 7.5854 24.7422 7.905 25.2498C9.435 27.8077 11.8796 27.0887 12.8554 26.6455C13.005 25.5458 13.4504 24.8065 13.94 24.3836C10.1575 23.9606 6.205 22.5006 6.205 16.0296C6.205 14.1889 6.8629 12.668 7.9475 11.4821C7.7775 11.0591 7.1825 9.32507 8.1175 6.99888C8.1175 6.99888 9.5404 6.55563 12.7925 8.73464C14.1764 8.3524 15.6063 8.16002 17.0425 8.16282C18.4875 8.16282 19.9325 8.3523 21.2925 8.73295C24.5429 6.53364 25.9675 7.00057 25.9675 7.00057C26.9025 9.32676 26.3075 11.0608 26.1375 11.4838C27.2204 12.668 27.88 14.1686 27.88 16.0296C27.88 22.5226 23.9071 23.9606 20.1246 24.3836C20.74 24.9114 21.2721 25.9265 21.2721 27.5134C21.2721 29.7753 21.25 31.5939 21.25 32.1657C21.25 32.609 21.5696 33.1368 22.4196 32.9676C25.7941 31.8338 28.7265 29.6754 30.8038 26.7963C32.8812 23.9172 33.999 20.4622 34 16.9178C34 7.5707 26.3925 0 17 0Z" fill="#CFCFCF"/>
</svg>
                    </Link>
                    <Link href="#" className='hover:bg-gray-700 p-2 rounded-full'>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 0C7.6109 0 0 7.65723 0 17.1035C0 25.6398 6.2169 32.7155 14.3446 34V22.0464H10.0266V17.1035H14.3446V13.3356C14.3446 9.04945 16.881 6.68233 20.7655 6.68233C22.6253 6.68233 24.5701 7.01585 24.5701 7.01585V11.2233H22.4281C20.315 11.2233 19.6571 12.542 19.6571 13.8949V17.1035H24.3712L23.6181 22.0464H19.6571V34C27.7831 32.7172 34 25.6381 34 17.1035C34 7.65723 26.3891 0 17 0Z" fill="#CFCFCF"/>
</svg>                    </Link>
                    <Link href="#" className='hover:bg-gray-700 p-2 rounded-full'>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.4103 26.4172H21.8206V19.2234C21.8206 17.5081 21.7861 15.3002 19.4267 15.3002C17.0345 15.3002 16.6694 17.1671 16.6694 19.0977V26.4172H12.0779V11.625H16.4868V13.64H16.5471C17.1637 12.4792 18.662 11.2513 20.9009 11.2513C25.5509 11.2513 26.412 14.3134 26.412 18.2969V26.4172H26.4103ZM6.89405 9.60139C6.54368 9.60184 6.19666 9.53314 5.87289 9.39921C5.54912 9.26528 5.25496 9.06877 5.00729 8.82094C4.75961 8.5731 4.56329 8.27882 4.42957 7.95497C4.29586 7.63111 4.22738 7.28404 4.22806 6.93367C4.2284 6.40638 4.38509 5.89104 4.67831 5.45281C4.97154 5.01458 5.38813 4.67314 5.87541 4.47167C6.36269 4.2702 6.89877 4.21775 7.41585 4.32095C7.93294 4.42415 8.40781 4.67837 8.78042 5.05146C9.15302 5.42455 9.40663 5.89975 9.50916 6.41697C9.6117 6.93419 9.55856 7.4702 9.35646 7.95721C9.15436 8.44423 8.81238 8.86038 8.37377 9.15304C7.93516 9.4457 7.42134 9.60173 6.89405 9.60139ZM9.19494 26.4172H4.59144V11.625H9.19667V26.4172H9.19494ZM28.7094 0H2.28883C1.02128 0 0 0.998889 0 2.23372V28.7663C0 30.0011 1.023 31 2.28711 31H28.7026C29.9667 31 31 30.0011 31 28.7663V2.23372C31 0.998889 29.9667 0 28.7026 0H28.7094Z" fill="#CFCFCF"/>
                          </svg>                    </Link>
                          <Link href="#" className='hover:bg-gray-700 p-2 rounded-full'>
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 0C21.6189 0 22.1952 0.0169999 24.0074 0.102C25.8179 0.187 27.0504 0.4709 28.135 0.8925C29.257 1.3243 30.2022 1.9091 31.1474 2.8526C32.0118 3.70242 32.6807 4.7304 33.1075 5.865C33.5274 6.9479 33.813 8.1821 33.898 9.9926C33.9779 11.8048 34 12.3811 34 17C34 21.6189 33.983 22.1952 33.898 24.0074C33.813 25.8179 33.5274 27.0504 33.1075 28.135C32.682 29.2702 32.0129 30.2985 31.1474 31.1474C30.2973 32.0115 29.2694 32.6804 28.135 33.1075C27.0521 33.5274 25.8179 33.813 24.0074 33.898C22.1952 33.9779 21.6189 34 17 34C12.3811 34 11.8048 33.983 9.9926 33.898C8.1821 33.813 6.9496 33.5274 5.865 33.1075C4.72995 32.6816 3.7018 32.0126 2.8526 31.1474C1.98799 30.2977 1.31908 29.2697 0.8925 28.135C0.4709 27.0521 0.187 25.8179 0.102 24.0074C0.0220999 22.1952 0 21.6189 0 17C0 12.3811 0.0169999 11.8048 0.102 9.9926C0.187 8.1804 0.4709 6.9496 0.8925 5.865C1.3179 4.7297 1.98697 3.70145 2.8526 2.8526C3.70204 1.98769 4.73013 1.31874 5.865 0.8925C6.9496 0.4709 8.1804 0.187 9.9926 0.102C11.8048 0.0220999 12.3811 0 17 0ZM17 8.5C14.7457 8.5 12.5837 9.39553 10.9896 10.9896C9.39553 12.5837 8.5 14.7457 8.5 17C8.5 19.2543 9.39553 21.4163 10.9896 23.0104C12.5837 24.6045 14.7457 25.5 17 25.5C19.2543 25.5 21.4163 24.6045 23.0104 23.0104C24.6045 21.4163 25.5 19.2543 25.5 17C25.5 14.7457 24.6045 12.5837 23.0104 10.9896C21.4163 9.39553 19.2543 8.5 17 8.5ZM28.05 8.075C28.05 7.51142 27.8261 6.97091 27.4276 6.5724C27.0291 6.17388 26.4886 5.95 25.925 5.95C25.3614 5.95 24.8209 6.17388 24.4224 6.5724C24.0239 6.97091 23.8 7.51142 23.8 8.075C23.8 8.63859 24.0239 9.17909 24.4224 9.5776C24.8209 9.97612 25.3614 10.2 25.925 10.2C26.4886 10.2 27.0291 9.97612 27.4276 9.5776C27.8261 9.17909 28.05 8.63859 28.05 8.075ZM17 11.9C18.3526 11.9 19.6498 12.4373 20.6062 13.3938C21.5627 14.3502 22.1 15.6474 22.1 17C22.1 18.3526 21.5627 19.6498 20.6062 20.6062C19.6498 21.5627 18.3526 22.1 17 22.1C15.6474 22.1 14.3502 21.5627 13.3938 20.6062C12.4373 19.6498 11.9 18.3526 11.9 17C11.9 15.6474 12.4373 14.3502 13.3938 13.3938C14.3502 12.4373 15.6474 11.9 17 11.9Z" fill="#CFCFCF"/>
</svg>
            </Link>
                      </div>
                  <p className='text-[14px] w-[297px] text-center md:text-left'>
                  Copyright ©2024, Fibonacci Bloom. All rights reserved.                
                      </p>
                      </div>
            </div>
</footer>
      
    </div>
  )
}

export default Footer
