import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { routes } from "@/data/routes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ route, page }) => (
          <Route key={route} path={route} element={page} />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
