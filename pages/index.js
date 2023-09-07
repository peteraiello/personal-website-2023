import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {Header} from '../modules/header';
import React from "react";
import {Articles} from '../modules/writing/articles';

export default function Home() {

  return (

    <>
      <Header />

      <Articles
          title={'writing'}
      />

    </>
  )
}
