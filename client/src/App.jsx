import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import UserProfile from "./routes/user_profile";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route
              element={
                <Layout>
                  <UserProfile />
                </Layout>
              }
              path="/:username"
            />
            {/* Default Route */}
            <Route
              path="/"
              element={
                <Layout>
                  <div>
                    <h1>Welcome to SocialHub</h1>
                    <p>Select a user profile to view.</p>
                  </div>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
