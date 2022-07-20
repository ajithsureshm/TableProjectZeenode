
import './Header.css'
import React, { useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function Header() {

    const [checkout, setCheckout] = useState(false)

    const handleCheckout = ()=>{
        setCheckout(!checkout)
    }
    

  return (
    <div className='main' >

        <div className='sub' >
            <div className='icons' > <StorefrontIcon/> </div>
            <div className='text' 
            // onClick={handleCheckout()} 
            >Checkout Steps</div>

        </div>

        <div className='sub'>
        <div className='icons' > <LiveTvIcon/> </div>
            
            <div className='text'>Display Settings</div>

        </div>

        <div className='sub'>
        <div className='icons' > <SettingsIcon/> </div>
            
            <div className='text'>Advanced Settings</div>

        </div>

        <div className='sub'>
        <div className='icons' > <TouchAppIcon/> </div>
            
            <div className='text'>Button Settings</div>

        </div>


        <div className='sub'>
        <div className='icons' > <VpnKeyIcon/> </div>
           <div className='text'>Plugin License</div>
            
        </div>

    </div>
  )
}

export default Header