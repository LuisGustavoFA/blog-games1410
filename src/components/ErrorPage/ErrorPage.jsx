import './ErrorPage.css';
import { TbWorldX } from "react-icons/tb";

const ErrorPage = () => {
  return(
    <main className='error-main'>
      <TbWorldX size={80} className='error-main-icon'/>
      <h2>Página não encontrada.</h2>
    </main>
  )
}

export default ErrorPage;