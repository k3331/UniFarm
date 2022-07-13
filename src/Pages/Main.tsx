import React,{useState}from 'react'
import './Main.css'
import Grid from '../Components/List';
import List from '../Components/Grid';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import { Items } from '../Constants/Constant';

const Main:React.FC=()=>  {
  const [toggle,setToggle] =useState<boolean>(false);

  return (
    <div className ='Container'>

      <div className ='sidebar'>
        <div className='content'>Dashboard</div>
        <div className='content'>Trade</div>
        <div className='content'>Bridge</div>
      </div>
     
        <div style ={{display:'flex',justifyContent:'flexStart',flexWrap:'wrap' ,width:'80rem',marginTop:'4rem'}}>
          {
             toggle?(Items.map((p)=>{
           return <List logo={p.logo} title={p.title} rewardOne ={p.rewardOne} rewardTwo ={p.rewardTwo} rewardThree ={p.rewardThree} PoolFilled={p.PoolFilled} Apy={p.Apy}/>
         })):(Items.map((p)=>{
           return <Grid logo={p.logo} title={p.title} rewardOne ={p.rewardOne} rewardTwo ={p.rewardTwo} rewardThree ={p.rewardThree} PoolFilled={p.PoolFilled} Apy={p.Apy}/>
         }))       
         }
        </div>

        <div className ='selector'>
         <div className ={toggle?'leftActive':'leftSelect'} onClick ={()=>{setToggle(prev => !prev)}}>
          <GridViewIcon style ={{color:toggle?'white':'black'}}/>
         </div>
         <div className ={toggle?'rightSelect':'rightActive'}  onClick ={()=>{setToggle(prev => !prev)}}>  
           <FormatListBulletedIcon style ={{color:toggle?'black':'white'}}/>
         </div>
      </div>
    </div>
  )
}

export default Main