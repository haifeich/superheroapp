import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplayTable from "./components/DisplayTable";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Find Your Favorite Heroes</h1>
        <DisplayTable />
      </main>
      <Footer />
    </div>
  );
};

export default App;
