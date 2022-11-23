import './App.css';
import Accordion from './components/Accordion';

const  App = () => {



  const items = [
    {
      title:'Bikram Bk',
      bio: 'My name is Bikram. I live in Hetauda'
    },
    {
      title:'Punam Diyali',
      bio: 'My name is Punam. I live in Kathmandu'
    },
    {
      title:'Tom Cruise',
      bio: 'My name is Tom. I live in Los Anglous'
    }
  ]



  return (

    <>
    <Accordion items ={items}/>
    </>
  );
}

export default App;
