'use client';

import { Button } from '@/ui';
import { LogOut } from 'lucide-react';

export default function ButtonLogout() {
  async function handleLogout() {
    window.location.href = '/api/logout';
  }

  return (
    <Button
      variant="subtle"
      onClick={handleLogout}
      className="gap-2 px-3"
      size="sm"
    >
      <LogOut size={16} className="flex-shrink-0" />
      Log out
    </Button>
  );
}
