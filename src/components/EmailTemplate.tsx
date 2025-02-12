import Header from './Header'

import { EmailTemplateType } from '../types'
import { Button } from './Button'
import { buttonData } from '../Data'
import Footer from './Footer'

const EmailTemplate =({emailBodyData}:{emailBodyData:EmailTemplateType}) => {
  return (
    <div className='email-container'>
<Header/>
<img src={emailBodyData.emailImage} alt="smart banking with sawport" className=" rounded-lg"/>
<div className='mt-12'>
    <h2 className='font-medium'>
        Dear {emailBodyData.recipientName},
    </h2>
    {emailBodyData.body.map((paragraph, index) => (
        <p key={index} className='my-5 font-normal'>{paragraph}</p>
    ))}
    <Button buttonData={buttonData}/>
   <div className='mt-4 font-inter text-[#333333]'>
   <p className='mb-3 font-normal'>
   Best Regards, </p>
   <p className='font-medium'>
    Sawport team.
   </p>
   </div>

</div>
<Footer/>
    </div>
  )
}

export default EmailTemplate