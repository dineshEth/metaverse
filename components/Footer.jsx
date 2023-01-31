'use client';
import styles from '../styles'
import { motion } from "framer-motion"; 
import { footerVariants } from '../utils/motion';
import { socials }  from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}>
      <div className='footer-gradient' />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

        {/* ============= UPPER FOOTER ============ */}
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h4 className='font-bold md:text-[64px] text-[44px] text-white'>Enter the Metaverse</h4>
          <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'>
            <img src="/headset.svg" alt="headset" className='w-[24px] h-[24px] object-contain' />
            <span className='font-normal text-[16px] text-white'>ENTER METAVERSE</span>
          </button>
        </div>
        {/* ============= LOWER FOOTER ============== */}
        <div className='flex flex-col'>
          {/* =========== LINE ========== */}
          <div className='mb-[50px] h-[2px] bg-white opacity-10' />
          {/* ========= FOOTER ========= */}
          <div className='flex items-center justify-between flex-wrap gap-4 '>
            <h4 className='font-extrabold text-[24px] text-white'>Metaversus</h4>
            <p className='font-normal text-[14px] text-white opacity-50'>
              Copyright © 2023 - 2024 Metaversus. All rights reserved.
            </p>
            {/* ============ SOCIALS ============ */}
            <div className='flex gap-4'>
              {socials.map((social) =>(
                <a href={social.link} target="_blank" >
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px]  object-contain cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  </motion.footer>
);

export default Footer;
