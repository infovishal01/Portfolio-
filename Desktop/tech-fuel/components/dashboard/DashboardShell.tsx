import DashboardSidebar
from "./DashboardSidebar";

import DashboardNavbar
from "./DashboardNavbar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Content */}
      <div className="flex-1 flex flex-col">

        <DashboardNavbar />

        <main className="p-6 lg:p-10">

          {children}

        </main>

      </div>

    </div>
  );
}