import "./Widigets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widigets = ({type}) => {
    let data;
   switch(type){
    case "user":
        data={
        title:"user",
        isMoney:false,
        link:"See all users"
        icon:<PersonOutlineOutlinedIcon className="icon"/>
        
    };
    break;

    case "user":
        data={
        title:"user",
        isMoney:false,
        link:"See all users"
        icon:<PersonOutlineOutlinedIcon className="icon"/>
        
    };
    break;

    case "user":
        data={
        title:"user",
        isMoney:false,
        link:"See all users"
        icon:<PersonOutlineOutlinedIcon className="icon"/>
        
    };
    break;
    default:
        break;
   }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">Users</span>
                <span className="counter">3432</span>
                <span className="link">See all users</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                <PersonOutlineOutlinedIcon className="icon" />
            </div>
        </div>
    )
}

export default Widigets
