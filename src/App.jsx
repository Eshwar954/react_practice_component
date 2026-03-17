import MyComponent from "./components/MyComponent"
import TaskComponent from "./components/TaskComponent"
import ListComponent from "./components/ListComponent"
import Greeting from "./components/Greeting"
import ProductCard from "./components/ProductCard"
import ProfileCard from "./components/ProfileCard"
function App() {
  

  return (
    <>
    <Greeting/>
    <ProfileCard name="abc" occupation="human" email="abc@gmail.com"/>
    <ProfileCard name="def" occupation="human-2" email="def@gmail.com"/>
    <ProductCard name="laptop" price="1000" inStock="yes"/>
    <ProductCard name="mobile" price="500" inStock="no"/>
    </>
  )
}

export default App
