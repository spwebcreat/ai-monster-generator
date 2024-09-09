import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import  Button from '@/app/components/Button'
import { Monster } from '@/app/types/index'
import { getMonsters } from '@/app/api/monsters/route'
import MonstersDisplay from '@/app/components/MonsterDisplay'


const Home = async () => {
  const { monsters, todayCount } = await getMonsters();
  return (
    <>
      <div className="globalConatiner">
        <div className={styles.imageListTitle}>
          <h2> 👾 最近生成されたモンスター </h2>
        </div>
        <div className={styles.imageListWrap}>
          
          <div className={styles.imageList}>
            <MonstersDisplay kvMonsters={monsters} />
          </div>
        </div>

        <div className={`w-[80%] md:w-[50%] mx-auto grid gap-4`}>
          <Button text="👾モンスターを生成する" href="/create" className="buttonFull"></Button>
          <p className="text-center">今日の生成回数: {todayCount}</p>
        </div>
      </div>
    </>

  )
}

export default Home