import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widigets from "../../components/widigets/Widigets"
import "./home.scss"

const home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widigets type="user"/>
          <Widigets type="order" />
          <Widigets type="earning"/>
          <Widigets type="balance"/>
        </div>
      </div>
    </div>
  )
}

export default home
