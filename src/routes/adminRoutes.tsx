import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";

import LogisticDetail from "views/admin/default/components/Logistic/LogisticDetail";

const adminRoutes = [
    {
        name: "Main Dashboard",
        layout: "/admin",
        path: "default",
        component: <MainDashboard />,
    },
    {
      name: "Hub Details",
      layout: "/admin",
      path: "hub-details",
      component: <LogisticDetail />
    }
]


export default adminRoutes;
  