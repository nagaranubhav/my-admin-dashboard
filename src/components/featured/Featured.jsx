import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top"><h1 className="title">Total Revenue
      </h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
           <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transactions processing</p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">
              Target
            </div>
            <div className="itemresult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultamount ">$12.4k</div>
            </div>

          </div>
          <div className="item">
            <div className="itemtitle">
              Last week
            </div>
            <div className="itemresult negetive">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultamount">$12.4k</div>
            </div>

          </div>
          <div className="item">
            <div className="itemtitle">
              Last Month
            </div>
            <div className="itemresult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultamount">$12.4k</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
