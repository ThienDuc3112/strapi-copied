import { useState } from "react";
import {
  Book,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Database,
  FileText,
  Key,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [contentTypesOpen, setContentTypesOpen] = useState(true);

  return (
    <aside
      className={`bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center justify-between px-4 border-b">
          <button className="flex items-center text-lg font-semibold dark:text-white overflow-hidden">
            <LayoutDashboard
              className={`h-5 w-5 flex-shrink-0 ${
                isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              }`}
            />
            <span
              className={`ml-2 transition-all duration-300 ${
                isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              }`}
            >
              Headless CMS
            </span>
          </button>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setContentTypesOpen(!contentTypesOpen)}
                className="flex items-center justify-between w-full rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center min-w-0">
                  <Database className="h-5 w-5 flex-shrink-0" />
                  <span
                    className={`ml-2 transition-transform duration-300 ${
                      isCollapsed ? "w-0 h-0 opacity-0" : "w-auto opacity-100"
                    }`}
                  >
                    Content Types
                  </span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                    contentTypesOpen ? "rotate-180" : ""
                  } ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
                />
              </button>
              {!isCollapsed && contentTypesOpen && (
                <ul className="mt-2 space-y-1 pl-6">
                  {["Single Types", "Collections", "Components"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {[
              { name: "Content Manager", icon: FileText },
              { name: "Media Library", icon: Book },
              { name: "Users & Permissions", icon: Users },
              { name: "API Tokens", icon: Key },
              { name: "Settings", icon: Settings },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span
                    className={`ml-2 transition-transform duration-300 ${
                      isCollapsed ? "w-0 h-0 opacity-0" : "w-auto opacity-100"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t p-4">
          <button className="w-full flex items-center justify-center">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="/placeholder.svg?height=32&width=32"
              alt="User avatar"
            />
          </button>
        </div>
      </div>
    </aside>
  );
};
