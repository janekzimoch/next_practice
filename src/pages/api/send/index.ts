import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/sqlite'

export default function handler( req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(db.get('SELECT * FROM toy_table'))
}