
import React from 'react'
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import Tables from '../../components/table/Table';
import Widgets from '../../components/widgets/Widgets';
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className="home-con">
        <NavBar />
        <div className="widgets-con">
          <Widgets type='Users' />
          <Widgets type='Order' />
          <Widgets type='Earning' />
          <Widgets type='Balance' />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title='Last 8 Months (Revenue)' />
        </div>
        <div className="lists">
          <p className="listTitle">Latest Transactions</p>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Home