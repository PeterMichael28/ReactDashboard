import React from 'react'
import DataTable from '../../components/dataTable/DataTable';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import './list.scss'

const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <div>
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default List