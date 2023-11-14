import './TemplatePage.css';
import { GoCloudOffline } from "react-icons/go";

const TemplatePage = () => {
  return(
    <main className='temp-main'>
      <GoCloudOffline size={64} className='temp-main-cloud'/>
      <h1>Página não encontrada.</h1>
    </main>
  )
}

export default TemplatePage;