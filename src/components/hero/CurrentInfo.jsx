import React from 'react'
import styles from "./hero.module.css"
import Button from '../button/Button'

const CurrentInfo = () => {
  return (
    <div className={styles.currentInfo}>
      <Button link="https://drive.google.com/file/d/1OCkKeJWXa94JYfE17qPUIn4igNZtFJpf/view?pli=1" text="RESUME" />
      <p>Student at CMRTC</p>
    </div>
  )
}

export default CurrentInfo
