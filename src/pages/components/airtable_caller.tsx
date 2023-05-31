import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { ATRecord, ATData } from '../api/data';

export default async function ATCaller(): Promise<ATRecord[]> {
  try {
    const response = await axios.get<ATData>('/api/data');
    return response.data.data.records;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
