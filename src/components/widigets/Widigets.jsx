import "./Widigets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widigets = ({type}) => {
    let data
    const amount=100
    const diff=20
   switch(type){
    case "user":
        data={
        title:"user",
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlineOutlinedIcon className="icon"/>
        
    };
    break;

    case "order":
        data={
        title:"ORDERS",
        isMoney:false,
        link:"See all order",
        icon:<PersonOutlineOutlinedIcon className="icon"/>
        
    };
    break;

    case "earning":
        data={
        title:"EARNINGS",
        isMoney:true,
        link:"view net earning",
        icon:<PersonOutlineOutlinedIcon className="icon"/>
        
    };
    break;
    case "balance":
        data={
        title:"BALANCE",
        isMoney:true,
        link:"See details",
        icon:<PersonOutlineOutlinedIcon className="icon"/>
        
    };
    break;
    default:
        break;
   }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widigets
