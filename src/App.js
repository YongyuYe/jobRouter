import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/help/Faq";
import Contact, { contactAction } from "./Pages/help/Contact";
import Careers, { careersLoader } from "./Pages/careers/Careers";
import CareerDetails, {
  CareerDetailsLoader,
} from "./Pages/careers/CareerDetails";
import CareersError from "./Pages/careers/CareersError";
//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./Pages/help/NotFound";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={CareerDetailsLoader}
        />
      </Route>

      {/* handle 404 error and add a link back to Home*/}
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
