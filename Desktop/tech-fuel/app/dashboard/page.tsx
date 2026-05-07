import DashboardLayout
from "@/components/dashboard/DashboardLayout";

export default function DashboardPage() {

  return (

    <DashboardLayout>

      <div>

        <h1 className="
          text-5xl
          font-black
        ">

          Dashboard

        </h1>

        <p className="
          text-zinc-500
          mt-4
        ">

          Welcome to your AI workspace.

        </p>

      </div>

    </DashboardLayout>
  );
}