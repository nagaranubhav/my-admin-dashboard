import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SystemSecurityUpdateRoundedIcon from '@mui/icons-material/SystemSecurityUpdateRounded';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BorderAllIcon from '@mui/icons-material/BorderAll';
const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="top">
                <DashboardIcon />
                <span className="logo">my admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Lists</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className="icon" />
                        <span>Product</span>
                    </li>
                    <li>
                        <BorderAllIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />

                        <span>Delivery</span>
                    </li>
                    <p className="title">Usefull</p>
                    <li>
                        <QueryStatsRoundedIcon className="icon" />

                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveRoundedIcon className="icon" />

                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SystemSecurityUpdateRoundedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <BookIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USERS</p>
                    <li>
                        <PeopleOutlineIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="coloroption"></div>
                <div className="coloroption"></div>
            </div>
        </div>
    )
}

export default Sidebar
