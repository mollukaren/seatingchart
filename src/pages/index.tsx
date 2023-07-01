/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { type NextPage } from "next";
import type { ATRecord, ATData } from './api/data';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

const UserProfileTest = () => {
  const { user } = useUser();
  if (!user) return null;
  
  console.log(user);

  return(
    <img 
    src = {user.profileImageUrl}
    width={500}
    height={500}
    alt = "Profile Pic"/>
    )
  }

const Home: NextPage = () => {
  
  const [atData, setAtData] = useState<ATRecord[]>([]);

  async function ATCaller(): Promise<ATRecord[]> {
    try {
      const response = await axios.get<ATData>('/api/data');
      return response.data.data.records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    ATCaller()
      .then(data => {
        setAtData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  type OptionType = {
    value: string;
    label: string;
  }

  const options: OptionType[] = 
    atData ? atData.map(person => {return {value: person.fields.Name, label: person.fields.Name}}) : [{value: '', label: ''}];

  const [selectedOption, setSelectedOption] = useState<OptionType>({value: '', label: ''});

  return (
    <div className="p-6 w-full h-screen mx-auto bg-blue-950 shadow-lg flex-col items-center space-y-6">
      <h1 className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center">Seating Chart</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
          <UserProfileTest/>
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      <Select className="text-slate-500 focus:bg-red-700 hover:bg-red-700 max-w-sm"
        defaultValue={selectedOption}
        onChange={(newValue) => setSelectedOption(newValue as OptionType)}
        options={options}
      />
      {selectedOption.value.length === 0 ? 
      <h2 className="text-slate-300">Select an option</h2> : 
      <h2 className="text-slate-300">{selectedOption.value}&#39;s table is {atData?.filter(person => person.fields.Name === selectedOption.value).map(person => person.fields.Status)}</h2>}
    </div>
  );
};

export default Home;
