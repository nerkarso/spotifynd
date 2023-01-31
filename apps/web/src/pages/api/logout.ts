import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Set-Cookie', [
    'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/',
    'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/',
  ]);

  res.redirect('/');
}
