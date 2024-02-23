import "./styles/App.scss";
import { Route, Routes, Outlet } from "react-router-dom";

import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar"
import MobileNavbar from "./components/Navbar/MobileNavbar" 
import MainContainer from "./components/Containers/MainContainer";

import Auth from "./pages/Auth";
import Home from "./pages/Home";

import { ReactQueryDevtools} from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/config";

function App() {
  return (
    <div className="App">
      <QueryClientProvider  client={queryClient}>
      <PageContainer optionClass={"pageContainer"}>
        <Navbar />
        <div className="mobileMenu">
        <MobileNavbar />
        </div>
        <Routes>
            <Route path="/auth" element={<Auth />}/>
            <Route element={<Outlet/>}>

              <Route path="/*" element={<Home />} />
              
              <Route 
              path="/*"
              element={
                <MainContainer>
                  <span style={{fontSize:'1.2rem'}}>404 page not found</span>
                </MainContainer>
              }
              />
          </Route>
        </Routes>
      </PageContainer>
      </QueryClientProvider>
    </div>
  );
}

export default App;
