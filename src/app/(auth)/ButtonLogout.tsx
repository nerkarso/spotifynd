'use client';

import { Button } from '@/ui';
import { LogOut } from 'lucide-react';

export default function ButtonLogout() {
  async function handleLogout() {
    window.location.href = '/api/logout';
  }

  return (
    <Button className="gap-2 px-3" size="sm" variant="subtle" onClick={handleLogout}>
      <LogOut className="flex-shrink-0" size={16} />
      Log out
    </Button>
  );
}
