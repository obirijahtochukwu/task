import './App.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <h4 style={{color: 'gray'}}>Privacybbeleid</h4>
        <hr />
        <h4 style={{color: 'gray'}}>Algemene VoorWaarden</h4>
        <hr />
        <h4 style={{color: 'gray'}}>SiteMap</h4>
      </div>
      <div className='card'>
        <h4>Heb je nog vragen over het video speeddaten</h4>
        <p>Bekijk de veelgestelde vregen of neem contact met ons op</p>
        <br />
        <a href='google.com'>contact@videospeeddate.nl</a>
      </div>
      <div className='card' style={{textAlign: 'start'}}>

        
        <h5 style={{color: 'gray'}}><span style={{marginRight: '15px'}}>&#x2705;</span>Match garantie</h5>
        <h5 style={{color: 'gray'}}><span style={{marginRight: '15px'}}>&#x2705;</span>Snelle service</h5>
        <h5 style={{color: 'gray'}}><span style={{marginRight: '15px'}}>&#x2705;</span>+10-20 gesprekken</h5>
        <h5 style={{color: 'gray'}}><span style={{marginRight: '15px'}}>&#x2705;</span>+3-6 min. per gesprek</h5>
        <h5 style={{color: 'gray'}}><span style={{marginRight: '15px'}}>&#x2705;</span>Duration + 1 uur</h5>
      </div>
    </div>
  );
}

export default App;
