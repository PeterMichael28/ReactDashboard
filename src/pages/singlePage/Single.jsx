import React from 'react'
import Chart from '../../components/chart/Chart';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import Tables from '../../components/table/Table';
import './single.scss'



const Single = () => {
  return (
    <div className='single'>
    <SideBar />
    <div className="singleContainer">
      <NavBar />
        <div className="top">
          <div className="left">
            <div className="edit-btn">Edit</div>
            <h1 className="singleTitle">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="userImage" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailsItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Johndoe22@gmail.com</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">08036314163</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Apata, Ibadan, Oyo state</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>
                </div>
                <div className="detailsItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">35</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='Users Spending (Last 6 Months)'/>
          </div>
      </div>
        <div className="bottom">
        <h1 className="singleTitle">Recent Transactions</h1>
          <Tables />
      </div>
    </div>
  </div>
  )
}

export default Single