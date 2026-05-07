import DashboardShell
from "@/components/dashboard/DashboardShell";

import StatsCard
from "@/components/dashboard/StatsCard";

export default function DashboardPage() {

  return (

    <DashboardShell>

      {/* Heading */}
      <div className="mb-14">

        <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

          Dashboard

        </p>

        <h1 className="text-5xl font-black">

          Welcome Back 👋

        </h1>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        <StatsCard
          title="Tutorials"
          value="124"
          description="Available tutorials"
        />

        <StatsCard
          title="Students"
          value="50K+"
          description="Active learners"
        />

        <StatsCard
          title="AI Tools"
          value="85"
          description="Curated tools"
        />

        <StatsCard
          title="Progress"
          value="78%"
          description="Learning completion"
        />

      </div>

    </DashboardShell>
  );
}