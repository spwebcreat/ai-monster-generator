import React from 'react'
import Button from '../Button'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Button text="このサイトについて" href="/about" className="buttonFullSkelton"></Button>
          <Button text="利用規約" href="/terms" className="buttonFullSkelton"></Button>
        </div>
      
        <div className={styles.address}>&copy;ai Monster Creator created by SP WEB CREAT.</div>
      </footer>
      <div className="attentionText fixed bottom-0 left-0 w-full">
        このサイトはポートフォリオ目的で作成しております。<br className="block md:hidden" />
        1日あたりのモンスター生成回数を制限しております。
      </div>
    </>
  )
}

export default Footer