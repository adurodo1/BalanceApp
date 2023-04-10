import logo from './logo.svg';
import './App.css';
import SevenDaysInput from './Components/SevenDaysInput/SevenDaysInput';
import { DaysProvider } from './Context/Context';
import DisplayTotal from './Components/DisplayTotal/DisplayTotal';
import BarChart from './Components/BarChart/BarChart';

function App() {
/*

input 7 days
show total
make div grow according to he


*/



  return (
    < >
    <DaysProvider>
 <SevenDaysInput/>
 <DisplayTotal/>
 <BarChart/>
 </DaysProvider>
    </>
  );
}

export default App;
