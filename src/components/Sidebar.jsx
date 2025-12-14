const Sidebar = () => {

    const dashboardicon = (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" d="M4 5h6v4H4V5Zm10 0h6v10h-6V5ZM4 11h6v8H4v-8Zm10 12h6v-4h-6v4Z" />
      </svg>
    );
  
    const overviewicon = (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" d="M4 4h6v16H4V4Zm10 8h6v8h-6v-8Z" />
      </svg>
    );
  
    const chaticon = (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeWidth="2" d="M5 5h14v10H7l-2 2V5Z" />
      </svg>
    );
  
    const sidebarLinks = [
      { name: "Dashboard", path: "/", icon: dashboardicon },
      { name: "Overview", path: "/overview", icon: overviewicon },
      { name: "Chat", path: "/chat", icon: chaticon },
    ];
  
    return (
      <div className="md:w-64 w-16 border-r h-[550px] border-gray-300 pt-4 flex flex-col">
        {sidebarLinks.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`flex items-center py-3 px-4 gap-3
              ${index === 0
                ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                : "hover:bg-gray-100 text-gray-700"
              }`}
          >
            {item.icon}
            <span className="md:block hidden">{item.name}</span>
          </a>
        ))}
      </div>
    );
  };
  
  export default Sidebar;
  