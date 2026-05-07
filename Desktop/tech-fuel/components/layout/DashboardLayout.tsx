import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-black text-white min-h-screen flex">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <DashboardNavbar />

        {/* Page */}
        <div className="p-6">

          {children}

        </div>

      </div>

    </main>
  );
}