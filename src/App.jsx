import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import { SideBar } from './components/SideBar';


// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String,

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedro-demeu.png',
      name: "Pedro Miguel",
      role: "Desenvolvedor Frontend"
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋',
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        type: 'link', content: 'jane.design/doctorcare',

      }
    ],
    publishedAt: new Date('2022-06-13 20:42:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Maik Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋',
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        type: 'link', content: 'jane.design/doctorcare',

      }
    ],
    publishedAt: new Date('2022-06-13 20:44:00'),
  },
]

// iteração

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
