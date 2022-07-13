import React from 'react'
import './Grid.css'

import CircularProgress from '@mui/material/CircularProgress';

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

const List:React.FC<IProps> = ({title,logo,PoolFilled,Apy,rewardOne,rewardTwo,rewardThree}) => {
  return (
    <div className='MainGrid'>
      <div className='Title'>
        <div className ='logoContainer'>
          <img style={{height:'3rem'}} src={logo} />
        </div >
        <div className ='TitleInfo' >
          <div style ={{color:'grey'}}>
            Cohort 29
          </div>
          <div style ={{fontSize:'bold'}}>
            {title}
          </div>
        </div>
      </div>

      <div className = 'PoolFilled'>
        <div style ={{color:'grey'}}>
          Pool Filled
        </div>
        <div style ={{display:"flex",alignItems:'center' }}>
          <div style ={{marginTop:'-0.5rem',marginRight:'-1rem'}}>
             <CircularProgress variant="determinate" value={parseInt(PoolFilled)}/>
          </div>
          <div>{PoolFilled}%</div>
        </div>
      </div>

      <div className = 'PoolFilled'>
        <div style ={{color:'grey'}}>
          Reward
        </div>
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

      <div className = 'PoolFilled'>
        <div style ={{color:'grey'}}>
          APY
        </div>  
          <div>{Apy}%</div>
      </div>

      <div style ={{display:'flex',justifyContent:'space-between',marginTop:'2rem'}}>
        <div className = "Button">
            <img style ={{height:'1rem'}} src ={rocket}/>
            <div style={{color:'blue', fontSize:'0.5rem'}}>
              Get upto 200% <b>Boost</b>
            </div>
          </div>

          <div className = "Button">
            <img style ={{height:'1rem'}} src ={rocket}/>
            <div style={{color:'blue', fontSize:'0.5rem'}}>
              Get upto 200% <b>Boost</b>
            </div>
          </div>
      </div>
    </div>
  )
}

export default List