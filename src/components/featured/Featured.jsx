import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';;

const Featured = () => {
  return (
      <div className='featured'>
          <div className="top">
              <h1 className="title">Total Revenue</h1>
              <MoreVertIcon fontSize='small'/>
          </div>
          <div className="bottom">
              <div className="featured-chart">
                  <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
              </div>
              <p className="title">Total sales made today</p>
              <p className="amount">$420</p>
              <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati, soluta quibusdam totam repellat explicabo?</p>

              <div className="summary">
                  <div className="item">
                      <div className="itemTitle">Target</div>
                      <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                          <div className="resultAmount">$12.4k</div>
                      </div>
                  </div>
                  <div className="item">
                      <div className="itemTitle">Last Week</div>
                      <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                          <div className="resultAmount">$12.4k</div>
                      </div>
                  </div>
                  <div className="item">
                      <p className="itemTitle">Last Month</p>
                      <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                          <p className="resultAmount">$12.4k</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Featured