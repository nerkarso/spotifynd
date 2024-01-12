import { cookies } from 'next/headers';

export default function Authenticated({ children, fallback }: any) {
  const accessToken = cookies().get('accessToken');

  if (accessToken) return children;

  return fallback;
}
