"use client"

import DashboardHeader from '../../components/dashboard/DashboardHeader'

export default function DashboardLayout({ children }) {
  return (
    <main className='w-full'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <DashboardHeader />
      {children}
    
    </main>
  );
}
