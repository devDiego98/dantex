import { Route, Routes } from "react-router-dom";

import { SiteLayout } from "@/components/site-layout";
import { AiConsultingServicesPage } from "@/pages/ai-consulting-services/ai-consulting-services-page";
import { EngineeringPage } from "@/pages/engineering-page";
import { HomePage } from "@/pages/home-page";
import { SantexLabPage } from "@/pages/santex-lab/santex-lab-page";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/engineering" element={<EngineeringPage />} />
        <Route
          path="/ai-consulting-services"
          element={<AiConsultingServicesPage />}
        />
        <Route
          path="/ai-consulting-services/santex-lab"
          element={<SantexLabPage />}
        />
      </Route>
    </Routes>
  );
}
