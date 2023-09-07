import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {Header} from '../modules/header';
import React from "react";
import {Articles} from '../modules/writing/articles';
import navItems from '../modules/header/navItems.json'

export default function Home() {

  console.log(navItems?.items);

  return (

    <>
      <Header items={navItems?.items} />

      <Articles
          title={'writing'}
      />

    </>
  )
}
