import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';
import { SideBar } from './components/SideBar';

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post author="pedro" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Post author="joao" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Post author="edson" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />

        </main>
      </div>
    </>
  )
}

export default App
