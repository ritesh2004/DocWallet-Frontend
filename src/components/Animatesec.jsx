import { Typography } from '@mui/material'
import React from 'react';
import Animation from './Animation.json';
import Lottie from 'lottie-react';
import './Animatesec.css'

function Animatesec() {
  return (
    <div style={{display:'flex',justifyContent:'center',marginBottom:'50px'}}>
    <div className="animatesec">
        <div className="blog">
            <div className="heading">
                <Typography id="title" variant='h3'>
                    DocWallet
                </Typography>
            </div>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat sunt sequi quas obcaecati unde, veniam magnam maxime aliquid similique eveniet? Incidunt, magnam illo. Dolores id, nisi rem nulla necessitatibus incidunt quo, sapiente laborum doloribus aperiam eligendi exercitationem ipsa non inventore a nobis. Repellat maiores amet, tempora vel praesentium, accusamus, rem suscipit possimus asperiores a reiciendis enim. Neque ullam sed alias natus id eaque cum quis quisquam ipsum? Impedit, blanditiis aliquam omnis provident minima sapiente, voluptatum unde rem nesciunt, asperiores rerum velit ea distinctio beatae aperiam eaque corrupti eos atque quasi repudiandae quisquam magnam? Quam doloribus necessitatibus animi aspernatur facere!
            </span>
        </div>

        <div className="animation">
            <Lottie style={{height:'300px'}} animationData={Animation}/>
        </div>
    </div>
    </div>
  )
}

export default Animatesec