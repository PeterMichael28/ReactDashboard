import React, { useState } from 'react'
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import './newpage.scss'

const NewPage = ({inputs, title}) => {


const [file, setFile] = useState('')

console.log(file)


  return (
    <div className='new'>
    <SideBar />
    <div className="newContainer">
      <NavBar />
        <div>
          <div className="top">
            <h1 className="title">{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="no-image" />
          </div>
            <div className="right">
              <form action="">
              <div className="formInput">
                  <label htmlFor="img">Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                  <input type="file" id='img' style={ { display: "none" } } onChange={ (e) => setFile(e.target.files[0])} />
                </div>
                { inputs.map( input => {
                  return (
                    <div className="formInput" key={input.id}>
                  <label htmlFor={input.label}>{input.label} {input.span && <span>{input.span}</span>}</label>
                  <input type={input.type} placeholder={input.placeholder} id={input.label} name={input.label} />
                </div>
                  )
                })}
           

                <button className="btn">Add</button>
              </form>
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default NewPage