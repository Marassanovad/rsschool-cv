import {CvPage} from "../pages/cv/CvPage.tsx";
import {Header} from "../shared/ui/Header/Header.tsx";

export const App = () => {
  return (
    <div className="app">
        <Header />
        <CvPage />
    </div>
  );
};