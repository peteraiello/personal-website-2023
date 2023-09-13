import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {Header} from '../modules/header';
import React from "react";
import {Articles} from '../modules/writing/articles';
import navItems from '../data/navItems.json';
import { Overview } from '../modules/overview/overview';
import overview from '../data/overview.json';
import {overviewContent} from '../data/overviewContent.js';

export default function Home() {

  console.log(navItems?.items);

  return (

    <>

      <Header items={navItems?.items} />

      <Overview 
          name={overview?.name} 
          jobTitle={overview?.jobTitle}
          profileDesc={overviewContent}
      />

      <Articles
          title={'writing'}
      />

    </>
  )
}
