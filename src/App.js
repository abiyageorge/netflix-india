import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import { requests } from './request';
import Banner from './components/Banner';
import Navigationbar from './components/Navigationbar';



function App() {
  return (
   <div>
   <Navigationbar/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="NetflixOriginals"fetchUrl ={requests.fetchNetflixOriginals}/>
    <Row title="Trending"fetchUrl ={requests.fetchTrending}/>
    <Row title="TopRated"fetchUrl ={requests.fetchTopRated}/>
    <Row title="ActionMovies"fetchUrl ={requests. fetchActionMovies}/>
    <Row title="ComedyMovies"fetchUrl ={requests.fetchComedyMovies}/>
    <Row title="HorrorMovies"fetchUrl ={requests.fetchHorrorMovies}/>
    <Row title="RomanceMovies"fetchUrl ={requests. fetchRomanceMovies}/>
    <Row title="Documentaries"fetchUrl ={requests.fetchDocumentaries}/>
  
   </div>
   
  );
}

export default App;
