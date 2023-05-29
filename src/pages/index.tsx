import axios from 'axios';
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ATCaller from './components/airtable_caller'

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <h1>Ayy lmao this is the real app</h1>
      <h2>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</h2>
      <ATCaller/>
    </>
  );
};

export default Home;
