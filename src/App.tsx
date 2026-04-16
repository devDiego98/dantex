import { Route, Routes } from "react-router-dom";

import { SiteLayout } from "@/components/site-layout";
import { AgtechPage } from "@/pages/agtech-page";
import { AiConsultingServicesPage } from "@/pages/ai-consulting-services/ai-consulting-services-page";
import { EnergyPage } from "@/pages/energy/energy-page";
import { EngineeringPage } from "@/pages/engineering-page";
import { FinancePage } from "@/pages/finance/finance-page";
import { FoodtechPage } from "@/pages/foodtech/foodtech-page";
import { GovtechPage } from "@/pages/govtech/govtech-page";
import { HealthcarePage } from "@/pages/healthcare/healthcare-page";
import { HomePage } from "@/pages/home-page";
import { SportsEntertainmentPage } from "@/pages/sports-entertainment/sports-entertainment-page";
import { DantexLabPage } from "@/pages/dantex-lab/dantex-lab-page";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/engineering" element={<EngineeringPage />} />
        <Route path="/agtech" element={<AgtechPage />} />
        <Route path="/energy" element={<EnergyPage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/foodtech" element={<FoodtechPage />} />
        <Route path="/govtech" element={<GovtechPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route
          path="/sports-entertainment"
          element={<SportsEntertainmentPage />}
        />
        <Route
          path="/ai-consulting-services"
          element={<AiConsultingServicesPage />}
        />
        <Route
          path="/ai-consulting-services/dantex-lab"
          element={<DantexLabPage />}
        />
      </Route>
    </Routes>
  );
}
