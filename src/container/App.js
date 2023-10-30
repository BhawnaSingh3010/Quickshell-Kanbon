import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { Main } from '../components/Main';
import './App.css';
import '../components/Css/Responsive.css'
import { User } from '../components/User';
import { Priority } from '../components/Priority';
import { GETTASK } from '../Api/endpoints';
import { GETAPI } from '../Api/apicall';

function App() {

  const [APIDATA, SETAPIDATA] = useState([])

  const [displayType, setdisplayType] = useState(sessionStorage["TaskMenu"])
  const handledataToDisplay = (value) => {
    setdisplayType(value)
    sessionStorage.setItem('TaskMenu', value)
  }

  useEffect(() => {
    GETAPI(GETTASK).then((data) => {

      const tasksWithImages = data?.tickets?.map((task, index) => ({
        ...task,
        image: `icon${index + 1}.PNG`,
      }))

       data.tickets = tasksWithImages
      SETAPIDATA(data)
    })
  }, [])

  return (
    <>
      <Header DataVisible={handledataToDisplay} />
      {
        APIDATA.length != 0 ? (displayType === 'user' ? <User apidata={APIDATA} /> :
          displayType === 'priority' ? <Priority apidata={APIDATA} /> :
            <Main apidata={APIDATA} />) : ''
      }

    </>
  );
}

export default App;
