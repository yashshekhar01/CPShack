import { Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import FilterSection from "./components/FilterSection";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Problems from "./components/Problems";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import Account from "./routes/Account";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [contests, setContests] = useState([]);

  let initialContests = useRef([]);

  const contestFilter = (site, status) => {
    if (status) {
      const filteredContests = contests.filter(
        (contest) => contest.site === site
      );
      setContests(filteredContests);
    } else {
      setContests(initialContests.current);
    }
  };

  const liveFilter = (contests, status) => {
    if (status) {
      const liveContests = contests.filter(
        (contest) => contest.in_24_hours === "Yes"
      );
      setContests(liveContests);
    } else {
      setContests(initialContests.current);
    }
  };

  const onLiveFilter = (contests, status) => {
    if (status) {
      const liveContests = contests.filter(
        (contest) => contest.status === "CODING"
      );
      setContests(liveContests);
    } else {
      setContests(initialContests.current);
    }
  };

  const fetchAPI = async () => {
    const response = await fetch("https://kontests.net/api/v1/all");
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    const fetchContests = async () => {
      const contestsFromAPI = await fetchAPI();
      initialContests.current = [...contestsFromAPI];

      setContests(contestsFromAPI);
    };
    fetchContests();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
    <AuthContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contests"
            element={
              <Flex justifyContent="space-between" gap={"2.5em"}>
                <FilterSection
                  contests={contests}
                  filter={contestFilter}
                  initialContests={initialContests.current}
                  liveFilter={liveFilter}
                  onLiveFilter={onLiveFilter}
                />
                <SearchSection contests={contests} />
              </Flex>
            }
          />
          <Route path="/problems" element={<Problems />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;






