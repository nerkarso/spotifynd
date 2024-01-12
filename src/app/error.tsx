'use client';

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
    </div>
  );
}
