import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsSearchPage from "./components/NewsSearchPage";
import NewsDetailPage from "./components/NewsDetailPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<NewsSearchPage />} />
          <Route path="/detail/:id" element={<NewsDetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
