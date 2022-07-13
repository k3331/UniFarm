import React from 'react'
import './List.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import CircularProgress from '@mui/material/CircularProgress';
import 'react-circular-progressbar/dist/styles.css';
import rocket from '../Assests/additionalInfo/Group@2x.png'

interface IProps {
  title:string,
  logo: string;
    PoolFilled: string;
    Apy: string;
    rewardOne: string;
    rewardTwo: string;
    rewardThree: string;
  
}


const Grid:React.FC<IProps> = ({title,logo,PoolFilled,Apy,rewardOne,rewardTwo,rewardThree}) => {

  return (
    <div className ='MainList'>
      <div className ='logo'>
        <div className ='logoContainer'>
          <img style ={{height:'3rem',width:'3rem'}}src ={logo}/>
        </div>
      </div>
      <div style ={{display:"flex",justifyContent:"space-evenly",width:'100%'}}>
        <div className = "MainInfo">
          <div style ={{color:'grey'}}>
            cohort 29
          </div >     
          <div style ={{fontSize:'bold'}}>
            {title}
          </div>
        </div>
      <div className = "MainInfo">
          <div style ={{color:'grey'}}>
            pool Filled
          </div >
      
            <div style ={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{marginRight:'-1.5rem',marginTop:'-0.5rem'}}>
                < CircularProgress  variant="determinate" value={100} />      
              </div>
              <div style={{fontSize:'bold',}}>
                  {PoolFilled}%
              </div>
                 
          
          </div>
                 
          
        </div>

        <div className = "MainInfo">
          <div style ={{color:'grey'}}>
            Rewards
          </div >     
          <div style ={{display:'flex'}}>
            <div className ='Reward left'>
              <img src ={rewardOne}/>

            </div >
            <div className ='Reward Center '>
              <img src ={rewardTwo}/>

            </div>
            <div className ='Reward Right'>
              <img src ={rewardThree}/>

            </div>
            
          
          </div>
        </div>

        <div className = "MainInfo">
          <div style ={{color:'grey'}}>
            APY
          </div >     
          <div style ={{fontSize:'bold' }}>
            {Apy}%
          </div>    
        </div>
        
           <div className = "additionalInfo">
            <img style ={{height:'1rem'}} src ={rocket}/>
            <div style={{color:'blue', fontSize:'0.5rem'}}>
              Get upto 200% <b>Boost</b>
            </div>
          </div>
          <div className ='Arrow'>
            <ArrowForwardIosIcon/>
          </div>
      </div>  
    </div>
  )
}

export default Grid