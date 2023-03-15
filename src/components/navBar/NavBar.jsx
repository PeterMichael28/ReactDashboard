import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import React from 'react'
import './NavBar.scss'
import { themeState } from '../../../store/themeAtom';
import { useRecoilState } from 'recoil';



const NavBar = () => {

    const [theme, setTheme] = useRecoilState(themeState);

  return (
      <nav className="navbar">
          <div className="wrapper">
              <div className="left">
                  <input type="text" placeholder='Search...' />
                  <SearchIcon />
              </div>
              <div className="right">
                  <div className="item">
                      <LanguageIcon className='icon'/>
                      English
                  </div>
                  <div className="item">
                      {
                          theme ? <DarkModeOutlinedIcon className='icon' style={{cursor: "pointer"}} onClick={ () => setTheme( false ) } /> : <DarkModeIcon className='icon' onClick={ () => setTheme( true ) } style={{cursor: "pointer"}}/>
                      }
                  </div>
                  <div className="item">
                      <FullscreenExitOutlinedIcon className='icon'/>
                  </div>
                  <div className="item">
                      <NotificationsNoneOutlinedIcon className='icon'/>
                      <div className="counter">1</div>
                  </div>
                  <div className="item">
                      <ChatBubbleOutlineOutlinedIcon className='icon'/>
                      <div className="counter">2</div>
                  </div>
                  <div className="item">
                      <ListOutlinedIcon className='icon'/>
                  </div>

                  <div className="item">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" className='avatar' />
                  </div>
              </div>
          </div>
    </nav>
  )
}

export default NavBar