import { spotifyApi } from '@/lib/spotifyApi';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code as string;

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    res.setHeader('Set-Cookie', [
      `accessToken=${data.body.access_token}; path=/; max-age=${data.body.expires_in}`,
      `refreshToken=${data.body.refresh_token}; path=/; max-age=${data.body.expires_in}`,
    ]);
    res.redirect('/');
  } catch (ex: any) {
    res.status(400).json({ error: ex.message });
  }
}
