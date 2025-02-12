import React from 'react'
import { companySocials } from '../Data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
const startYear = 2024;
const yearRange = currentYear > startYear ? `\u00A9 ${startYear} \u00A9 ${currentYear}` : startYear;
  return (
    <div className='email-footer'>
<p className='font-normal mb-6 text-[11.72px]'> {yearRange} Sawport Bank. All rights reserved.</p>
<p className='font-normal text-[10.18px]'>If you have received this message in error, please notify us immediately and delete it from your system. Any unauthorized use, disclosure, or distribution of the information contained herein is strictly prohibited.</p>
<div className='flex justify-center items-center gap-6 mt-5'>
    {companySocials.map((social, index) => (
        <a href={social.link} target='_blank' key={index} className='text-[#333333]'>
            <img src={social.icon} alt={social.name} className='w-6 h-6'/></a>
    ))}
</div>
    </div>
  )
}

export default Footer