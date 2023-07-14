/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { type NextPage } from "next";
import type { ATRecord, ATData } from './api/data';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Hero from '@/components/ui/hero';

const Home: NextPage = () => {
  
  return (
    <Hero/>
  )
};

export default Home;
