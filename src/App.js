import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="new-meetup" element={<NewMeetupPage />}></Route>
        <Route path="favourites" element={<FavouritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
