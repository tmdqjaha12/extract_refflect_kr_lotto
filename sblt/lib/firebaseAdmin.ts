// lib/firebaseAdmin.ts
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(process.env.SERVICE_ACCOUNT_KEY ?? ""),
  });
}

const db = admin.firestore();

export { admin, db };

// // pages/api/getData.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { db } from '../../lib/firebaseAdmin';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const snapshot = await db.collection('your-collection-name').get();
//     const data = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching data' });
//   }
// }

// // pages/api/addData.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { db } from '../../lib/firebaseAdmin';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { value } = req.body;
//     try {
//       const docRef = await db.collection('your-collection-name').add({ value });
//       res.status(201).json({ id: docRef.id });
//     } catch (error) {
//       res.status(500).json({ error: 'Error adding document' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
