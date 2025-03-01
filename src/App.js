import './App.css';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default App;
