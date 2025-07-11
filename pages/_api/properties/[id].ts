import type { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index'; // update path if needed

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ error: 'Property not found' });
  }
}