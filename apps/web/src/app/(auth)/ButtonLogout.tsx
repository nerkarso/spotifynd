'use client';

export default function ButtonLogout() {
  async function handleLogout() {
    window.location.href = '/api/logout';
  }

  return (
    <button className="btn btn-secondary" onClick={handleLogout}>
      Log out
    </button>
  );
}
