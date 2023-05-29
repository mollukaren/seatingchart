import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { ATRecord } from '../api/data';

export default function ATCaller() {
  const [data, setData] = useState<ATRecord[]>([]);

  useEffect(() => {
    axios.get<ATRecord[]>('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.fields.Name}</li>
      ))}
    </ul>
  );
}
