import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

function App() {

  const  products = [
    {id_prd : 1, name: 'COCA', price: '12 $', image:'coca.jpg' },
    {id_prd : 2, name: 'CHOCOLAT', price: '10 $', image:'chocolat.jpg' },
    {id_prd : 3, name: 'FROMAGE', price: '60 $', image:'fromage.jpg' }
  ]

  return (
    <div className="App">

{ products.map((data) => (
     
     <div  style={{padding :"15px", display:"inline-block"}} align="center" >
                <Card style={{boxShadow: '1px 2px 0.5px' , width: '20rem'}}>
                <Card.Img height= "150" width="300" src={data.image} />
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text style={{fontFamily:'Arial', fontSize: '22px',fontWeight:'700' }} > {data.price}</Card.Text>
                    </Card.Body>
                </Card>
              </div>
          ))
   }
      
    </div>
  );
}

export default App;
