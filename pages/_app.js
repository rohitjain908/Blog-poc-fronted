import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import '../styles/globals.css'
import '../styles/app.scss'


function BlogThumnail(){

  return(
    <div className='resource-card flex flex-col xl:transition xl:duration-300 xl:ease-in-out mb-12 xl:mb-0 first-item'
      onclick="window.open('some-link')">
      <div className='img-container'>
          <img className='xl:transition xl:duration-300 xl:ease-in-out' src = "/image-1.webp"/>
      </div>
      <div className='flex flex-col info-container'>
          <div className='flex flex-row'>
            <div className='tag-without-border tag-light pb-2'>Blog</div>
            <div className='tag-without-border tag-light pb-2 px-2' style={{ paddingLeft:'8px', paddingRight: '8px'}}>•</div>
            <div className='tag-without-border tag-light pb-2'>Jan 2006</div>
          </div>
          <h4 className='heading-medium'>The Synaptic Growth Index: Quantifying Growth Momentum of Startups</h4>
          <div className='flex justify-start mt-2'>
            <div className='"button-secondary action-button' style = {{padding:'0px',  border: 0}}>Read More 
              <i class="icon icon-Right-arrow-long" className={styles.icon_Right_arrow_long}></i>
            </div>
          </div>
      </div>
    </div>
  )
}




export default function APP() {
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className="text-center">Blogs</h1>
      <div className='grid grid-cols-1 xl:grid-cols-3 mt-20 px-6 xl:px-0 flex-row'>
        <BlogThumnail/>
        <BlogThumnail/>
        <BlogThumnail/>
      </div>
    </div>
  
   
  )
}
