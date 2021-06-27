import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <Header />
      <Card cardTitle = 'Mobiles' img = "https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-module-mobile.png"/>
    </div>
  );
}

export default App;
