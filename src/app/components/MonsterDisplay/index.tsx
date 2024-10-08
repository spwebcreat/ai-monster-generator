'use client'

import Image from 'next/image'
import { Monster } from '@/app/types/index'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import Loading from '@/app/loading'

const MonstersDisplay = ({ initialMonsters }: { initialMonsters: Monster[] }) => {
  const [monsters, setMonsters] = useState(initialMonsters);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMonsters = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/monsters');
      const data = await res.json();
      setMonsters(data.monsters);
    } catch (error) {
      console.error('Failed to fetch monsters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMonsters();
  }, []);


  return (
    <>
      
        {/* <div className={styles.updateButtonWrap}>
          { isLoading ? <Loading /> : (
            <button onClick={fetchMonsters} disabled={isLoading } className={styles.updateButton}>データを更新</button>
          )}
        </div> */}
      

      <div className={styles.imageList}>
        {monsters.map((monster) => (
          <div className={styles.imageListItem} key={monster.id}>
            <Image src={monster.imageUrl} alt={monster.description ? monster.description : '生成されたモンスター'} width={800} height={800} />
            <div className={styles.imageItemTitle}>
              <ul className="monsterMeatList">
                <li>属性: {monster.attribute}</li>
                <li>タイプ: {
                  monster.type === 'Humanoid' ? '人型' : 
                  monster.type === 'Animal' ? '動物型' : 
                  monster.type === 'Mechanical' ? '機械型' : 
                  monster.type === 'Plant' ? '植物型' : ''
                }</li>
              </ul>
              <a download="monster.png" href={monster.imageUrl} className={styles.downloadButton}>ダウンロード</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MonstersDisplay