import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Blogs</h1>
      <div style = {{borderRadius : '1px'}}>
          <img className={styles.image_tag} src = "/image-1.webp"/>
      </div>
      <div className={styles.info_container} style = {{ width: '30%'}}>
          <div style={{ marginTop:'6px', display: 'flex', flexDirection: 'row'}}>
            <div className={`${styles.tag_without_border} ${styles.tag_light}`}>Blog</div>
            <div className={`${styles.tag_without_border} ${styles.tag_light}`} style={{ paddingLeft:'8px', paddingRight: '8px'}}>•</div>
            <div className={`${styles.tag_without_border} ${styles.tag_light}`}>Jan 2006</div>
          </div>
          <h1 className={styles.heading_medium} style = {{textAlign:'start'}}>The Synaptic Growth Index: Quantifying Growth Momentum of Startups</h1>
          <div style = {{display: 'flex', justifyContent: 'start', marginTop: '2px'}}>
            <div className={styles.button_secondary} style = {{padding:'0px',  border: 0}}>Read More <i class="icon icon-Right-arrow-long" className={styles.icon_Right_arrow_long}></i></div>
          </div>
        </div>
    </div>
  )
}
