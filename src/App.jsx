import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4" style={{
        position: "fixed",
        top: "0",
        backgroundColor: "transparent",
        padding: "20px",
        width: "100%",
        zIndex: "100"
      }}>
        <Navbar routes={routes} />
      </div>
      <Home />
    </>
  );
}

export default App;
