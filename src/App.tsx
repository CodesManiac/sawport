
import { emailBodyData } from './Data'
import EmailTemplate from './components/EmailTemplate'

function App() {

  return (
<div className='grid place-items-center w-[552px] h-auto'>
<EmailTemplate emailBodyData={emailBodyData}/>
</div>
  )
}

export default App
