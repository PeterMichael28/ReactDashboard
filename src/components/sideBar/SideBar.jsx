import React from 'react'
import './sideBar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreIcon from '@mui/icons-material/Store';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';
import AllOutIcon from '@mui/icons-material/AllOut';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { themeState } from '../../../store/themeAtom';


const SideBar = () => {

    const setTheme = useSetRecoilState(themeState);
   

  return (
    <aside className='sidebar'>
          <div className="top">
        <Link to='/'>
        <span className='logo'>MyAdmin</span>
        </Link>
              
        </div>
        <hr />
          <div className="center">
              <ul>
                  <p className="title">MAIN</p>
                  <Link to='/'>   
                  <li>
                      <DashboardIcon className='icons'/>
                      <span>Dashboard</span>
                  </li>
                  </Link>
                  <p className="title">LISTS</p>
                  <Link to='/users'>
                  <li>
                      <Person2OutlinedIcon className='icons'/>
                      <span>Users</span>
                  </li> 
                  </Link>

                  <Link to='/products'>
                  <li>
                      <StoreIcon className='icons'/>
                      <span>Products</span>
                  </li>    
                  </Link>
                  <li>
                      <StorefrontIcon className='icons'/>
                      <span>Orders</span>
                  </li>
                  <li>
                      <LocalShippingIcon className='icons'/>
                      <span>Delivery</span>
                  </li>
                  <p className="title">USEFUL</p>
                  <li>
                      <InsertChartIcon className='icons'/>
                      <span>Stats</span>
                  </li>
                  <li>
                      <NotificationImportantIcon className='icons'/>
                      <span>Notifications</span>
                  </li>
                  <p className="title">SERVICE</p>
                  <li>
                      <MedicalInformationIcon className='icons'/>
                      <span>System Health</span>
                  </li>
                  <li>
                      <AllOutIcon className='icons'/>
                      <span>Logs</span>
                  </li>
                  <li>
                      <SettingsIcon className='icons'/>
                      <span>Settings</span>
                  </li>
                  <p className="title">USER</p>
                  <li>
                      <AccountCircleIcon className='icons'/>
                      <span>Profile</span>
                  </li>
                  <li>
                      <LogoutIcon className='icons'/>
                      <span>Logout</span>
                  </li>
              </ul>
        </div>
          <div className="bottom">
              <div className="color-option" onClick={() => setTheme(false)}></div>
              <div className="color-option" onClick={() => setTheme(true)}></div>
             
        </div>
    </aside>
  )
}

export default SideBar;

// onClick={() => setTheme(false)}
// onClick={setTheme(true)}