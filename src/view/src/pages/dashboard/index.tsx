import { BarChart3, Book, Database, Globe, Plus, Users } from "lucide-react";
import { Sidebar } from "../../components/sidebar";

export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Dashboard</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Content Types", value: "12", icon: Database },
              { title: "API Calls", value: "1.2M / day", icon: Globe },
              { title: "Users", value: "573", icon: Users },
              { title: "Media Files", value: "2,154", icon: Book },
            ].map((stat) => (
              <div
                key={stat.title}
                className="rounded-lg bg-white p-4 shadow dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </h3>
                  <stat.icon className="h-5 w-5 text-gray-400" />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white shadow dark:bg-gray-800">
              <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Recent Content Updates
                </h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {[
                  {
                    title: 'Blog Post: "Getting Started with Headless CMS"',
                    time: "2m ago",
                  },
                  { title: "Product: New Summer Collection", time: "15m ago" },
                  { title: "User: John Doe updated profile", time: "1h ago" },
                ].map((activity, index) => (
                  <li key={index} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </p>
                      <div className="ml-2 flex flex-shrink-0">
                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-white shadow dark:bg-gray-800">
              <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  API Performance
                </h3>
              </div>
              <div className="p-4">
                <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <BarChart3 className="h-32 w-32 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Quick Action Button */}
      <button className="fixed bottom-4 right-4 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <Plus className="h-6 w-6" />
        <span className="sr-only">Create new content</span>
      </button>
    </div>
  );
};
