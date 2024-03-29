import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [width, setWidth] = useState(0);
  const [video, setVideo] = useState();

  const textPT = [
    'Uma canção é como uma poça que perdura',
    'a existência de um ser no deserto.',
    'É como um pobre animal palpitando ferido',
    'e inalcançável à qualquer amparo.',
    'Como um anel de prata perdido para sempre',
    'em uma floresta noturna que só existiu',
    'até o momento do despertar.',
    'Uma canção é a cura e a destruição da angústia e pela angústia.',
    'Constantemente perdendo sua lógica em meio ao misticismo da sua',
    'misteriosa condição de "barulho humano".',
    '≅',
    'Única.',
    'Fugaz.',
    'Marcada e ferida pelo delírio da sua beleza mortal.'
  ];
  const textENG = [
    'A song is like a puddle that lasts',
    'the existence of a living being in the desert.',
    'It is like a poor animal throbbing, wounded',
    'and unreachable by any rescue.',
    'Like a silver ring, lost forever in a night forest',
    'that only existed until the moment you woke up.',
    'A song is the healing and destruction of anguish by',
    'the anguish itself. Constantly losing its logic amidst',
    'the mysticism of its mysterious condition of "human noise".',
    '≅',
    'Unique.',
    'Fleeting.',
    'Marked and wounded by the delirium of its deadly beauty.'
  ];

  const [textLang, setTextLang] = useState(textPT);
  const [selectOption, setSelectOption] = useState(true);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setVideo(<video
        className="bgHero"
        poster="/video/Teaser-Frame-Vertical.png"
        src="/video/Teaser-Frame-Vertical.mp4"
        playsInline
        autoPlay
        muted
      />)
    } else {
      setVideo(< video
        className="bgHero"
        poster="/video/Teaser-Frame-Horizontal.png"
        src="/video/Teaser-Frame-Horizontal.mp4"
        playsInline
        autoPlay
        muted
      />)
    }
  }, [width]);

  useEffect(() => {
    selectOption ? setTextLang(textPT) : setTextLang(textENG);
  }, [selectOption])


  return (
    <div className="container">
      <Head>
        <title>c l a r i ∩</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {video}

      <div className="Logo">
        <Image
          src="/img/Logo.png" width="184px" height="48px" />

      </div>
      <div className="Menu">
        <p>COMING <i>SOON</i></p>
      </div>
      <div className="LeftArea">
        <h2>HEAL AND DESTROY</h2>

        {textPT.map(string => {
          return (<p key={string}>{string.toUpperCase()}</p>)
        })}
      </div>
      <div className="RightArea">
        <h2>HEAL AND DESTROY</h2>
        {textENG.map(string => {
          return (<p key={string}>{string.toUpperCase()}</p>)
        })}
      </div>

      <div className="CenterArea">
        <div className="btn">
          <button className={selectOption ? 'active' : null} onClick={() => setSelectOption(true)}>PT</button>
          <button className={!selectOption ? 'active' : null} onClick={() => setSelectOption(false)}>ENG</button>
        </div>
        <h2>HEAL AND DESTROY</h2>
        {textLang.map(string => {
          return (<p key={string}>{string.toUpperCase()}</p>)
        })}
      </div>

      <div className="IconsSocial">
        <a href="https://www.facebook.com/clarinwav/" rel="noopener"  target="_blank">
          <Image src="/img/icons/Social-Facebook.svg" width="32px" height="32px" />
        </a>
        <a href="https://www.instagram.com/clarinwav/" rel="noopener"  target="_blank">
          <Image src="/img/icons/Social-Instagram.svg" width="32px" height="32px" />
        </a>
        <a href="https://www.youtube.com/channel/UC4AbW2qjkv92GuCqRU-IN2g" rel="noopener"  target="_blank">
          <Image src="/img/icons/Social-Youtube.svg" width="32px" height="32px" />
        </a>
      </div>
      <div className="Spark">
        <Image src="/img/Spark.svg" layout="fill" />
      </div>
      <div className="IconsMusic">
        <a href="https://open.spotify.com/artist/2OG6aLcBTHkfh0IazvlHSG?si=q2FmNRtPSIGNBU_A-Ten1A&utm_source=copy-link" rel="noopener" target="_blank">
          <Image src="/img/icons/Spotify.svg" width="32px" height="32px" />
        </a>
        <a href="https://music.apple.com/br/artist/clarin/1596619068" rel="noopener" target="_blank">
          <Image src="/img/icons/AppleMusic.svg" width="32px" height="32px" />
        </a>
        <a href="#">
          <Image src="/img/icons/Amazon.svg" width="32px" rel="noopener" height="32px" />
        </a>
        <a href="https://www.deezer.com/en/artist/4886029" rel="noopener" target="_blank">
          <Image src="/img/icons/Deezer.svg" width="32px" height="32px" />
        </a>
        <a href="https://tidal.com/browse/artist/11722672" rel="noopener" target="_blank">
          <Image src="/img/icons/Tidal.svg" width="32px" height="32px" />
        </a>
      </div>
    </div>
  )
}
