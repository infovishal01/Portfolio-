"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AdminPage() {

  // =========================
  // STATES
  // =========================

  const [stats, setStats]: any =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [content, setContent] =
    useState("");

  // =========================
  // FETCH STATS
  // =========================

  useEffect(() => {

    const fetchStats =
      async () => {

        try {

          const response =
            await fetch(
              "/api/admin/stats"
            );

          const data =
            await response.json();

          setStats(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchStats();

  }, []);

  // =========================
  // CREATE TUTORIAL
  // =========================

  const handlePublish =
    async () => {

      try {

        const response =
          await fetch(
            "/api/tutorials",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                title,

                description,

                content,

                category: "AI",
              }),
            }
          );

        const data =
          await response.json();

        // Error
        if (!response.ok) {

          alert(
            data.message
          );

          return;
        }

        // Success
        alert(
          "Tutorial Published Successfully"
        );

        // Reset
        setTitle("");

        setDescription("");

        setContent("");

      } catch (error) {

        console.log(error);

        alert(
          "Something went wrong"
        );
      }
    };

  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (
      <DashboardLayout>

        <div className="min-h-screen bg-black text-white flex items-center justify-center">

          Loading Dashboard...

        </div>

      </DashboardLayout>
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <DashboardLayout>

      <section className="space-y-10">

        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}

        <div>

          <p className="text-green-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">

            Admin Dashboard

          </p>

          <h1 className="text-5xl font-bold text-white">

            Tech Fuel CMS

          </h1>

        </div>

        {/* ========================= */}
        {/* STATS */}
        {/* ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Tutorials */}
          <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-green-500">

              {
                stats?.totalTutorials || 0
              }

            </h2>

            <p className="text-zinc-400 mt-4">

              Total Tutorials

            </p>

          </div>

          {/* Users */}
          <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-green-500">

              {
                stats?.totalUsers || 0
              }

            </h2>

            <p className="text-zinc-400 mt-4">

              Total Users

            </p>

          </div>

          {/* Views */}
          <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-green-500">

              48K

            </h2>

            <p className="text-zinc-400 mt-4">

              Monthly Views

            </p>

          </div>

        </div>

        {/* ========================= */}
        {/* MAIN GRID */}
        {/* ========================= */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {/* ========================= */}
          {/* CREATE TUTORIAL */}
          {/* ========================= */}

          <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white mb-8">

              Create Tutorial

            </h2>

            <div className="space-y-5">

              {/* Title */}
              <input
                type="text"
                placeholder="Tutorial Title"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
              />

              {/* Description */}
              <input
                type="text"
                placeholder="Tutorial Description"
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
              />

              {/* Content */}
              <textarea
                rows={10}
                placeholder="Tutorial Content"
                value={content}
                onChange={(e) =>
                  setContent(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition resize-none"
              />

              {/* Button */}
              <button
                onClick={
                  handlePublish
                }
                className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-semibold transition duration-300"
              >

                Publish Tutorial

              </button>

            </div>

          </div>

          {/* ========================= */}
          {/* RECENT USERS */}
          {/* ========================= */}

          <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white mb-8">

              Recent Users

            </h2>

            <div className="space-y-4">

              {stats?.latestUsers?.length >
              0 ? (

                stats.latestUsers.map(
                  (
                    user: any
                  ) => (

                    <div
                      key={
                        user._id
                      }
                      className="border border-zinc-800 rounded-2xl p-5 hover:border-green-500 transition"
                    >

                      <h3 className="text-white font-medium text-lg">

                        {user.name}

                      </h3>

                      <p className="text-zinc-400 mt-2">

                        {user.email}

                      </p>

                      <div className="mt-4 inline-flex bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-full text-sm">

                        {
                          user.role ||
                          "student"
                        }

                      </div>

                    </div>
                  )
                )

              ) : (

                <p className="text-zinc-500">

                  No users found

                </p>
              )}

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* RECENT TUTORIALS */}
        {/* ========================= */}

        <div className="border border-zinc-800 bg-zinc-950 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-white mb-8">

            Latest Tutorials

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {stats?.latestTutorials
              ?.length > 0 ? (

              stats.latestTutorials.map(
                (
                  tutorial: any
                ) => (

                  <div
                    key={
                      tutorial._id
                    }
                    className="border border-zinc-800 rounded-2xl p-6 hover:border-green-500 transition"
                  >

                    <h3 className="text-2xl font-bold text-white">

                      {
                        tutorial.title
                      }

                    </h3>

                    <p className="text-zinc-400 mt-4 leading-relaxed">

                      {
                        tutorial.description
                      }

                    </p>

                    <div className="mt-6 inline-flex bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-full text-sm">

                      {
                        tutorial.category
                      }

                    </div>

                  </div>
                )
              )

            ) : (

              <p className="text-zinc-500">

                No tutorials found

              </p>
            )}

          </div>

        </div>

      </section>

    </DashboardLayout>
  );
}