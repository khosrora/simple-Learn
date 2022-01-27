import { ToastContainer } from 'react-toastify';
import "./styles/GlobalStyle.css";
import 'react-toastify/dist/ReactToastify.css';

// ! Index components
import Index from './components/Index';


function App() {

  return (
    <div className="body">
      <Index />
      <ToastContainer />
    </div>
  );
}

export default App;
