import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Sale from './components/Sale'
import Recommended from './components/Recommended'
import Topics from './components/topics'
import Footer from './components/Footer'

import Popular from './components/products'
function App(){
  return(
    <div>
      <Navbar></Navbar>
    <Categories></Categories>
    <Sale></Sale>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
    </div>
    )
}
export default App