import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { type NextPage } from "next";
import type { ATRecord, ATData } from './api/data';

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
    <>
      <h1>Airtable Lookup</h1>      
      <Select
        defaultValue={selectedOption}
        onChange={(newValue) => setSelectedOption(newValue as OptionType)}
        options={options}
      />
      <h2>{selectedOption.value}&#39;s table is {atData?.filter(person => person.fields.Name === selectedOption.value).map(person => person.fields.Status)}</h2>
    </>
  );
};

export default Home;
