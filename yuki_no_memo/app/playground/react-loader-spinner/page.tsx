'use client'

import { Audio, BallTriangle, Bars, CirclesWithBar, Oval, RotatingLines } from 'react-loader-spinner';
import styles from './page.module.css';

export default function ReactLoaderSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Audio
          height="50"
          width="100"
          color="#000000"
          ariaLabel="audio-loading"
          wrapperClass="wrapper-class"
          visible={true}
        />
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperClass="wrapper-class"
          visible={true}
        />
        <Audio
          height="100"
          width="50"
          color="#0373fc"
          ariaLabel="audio-loading"
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
      <div className={styles.item}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#d7f542"
          innerCircleColor="#3d5e8a"
          barColor="#99e864"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <CirclesWithBar
          height="100"
          width="100"
          color="#140308"
          outerCircleColor="#b7bcc9"
          innerCircleColor="#0afa2e"
          barColor="#393d2a"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      <div className={styles.item}>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#d7f542"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#d7f542"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          strokeWidth='8'
          strokeWidthSecondary='1'
        />
      </div>
      <div className={styles.item}>
        <RotatingLines
          visible={true}
          width="80"
          strokeWidth='4'
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </div>
  )
}