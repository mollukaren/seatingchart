import { type NextApiRequest, type NextApiResponse } from 'next';
import axios from 'axios';

export interface ATRecord {
  id: string;
  createdTime: Date;
  fields: {
    Name: string;
    Status: string;
  }
}
  

export interface ATData {
  data: {
    records: ATRecord[];
  }
}



export default async function data(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  
  const airtable_base = 'appbjp7mNAbGS4vSz'
  const airtable_table = 'tblcOsZghcJOa6ww5'

  const token = process.env.AIRTABLE_PERSONAL_TOKEN ? process.env.AIRTABLE_PERSONAL_TOKEN : "lmao fix your token"
  const conf = {
    headers: { Authorization: `Bearer ${token}` }
};

  try {
    const response = await axios.get<ATRecord[]>(`https://api.airtable.com/v0/${airtable_base}/${airtable_table}`, conf);
    const data = response.data;
    res.status(200).json({ data });
  } catch (error: unknown) {
    console.error(error);
    if ((error as { message?: string }).message) {
      const errorMessage = (error as { message: string }).message;
      res.status(500).json({ error: errorMessage });
    } else {
      res.status(500).json({ error: 'An error occurred' });
    }
  }
}