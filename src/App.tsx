import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";
import Loader from "./Loader";
import Footer from "./Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    } else {
      toast.info("Klar! 😎");
    }
  }, [isLoading]);

  const startLoading = () => {
    setIsLoading(true);
  }

  return (
    <div className="container">
      <Header />

      <Loader isLoading={isLoading} />

      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={startLoading}>
          <FontAwesomeIcon icon={faRocket} className="me-2" />Ladda en stund
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default App;
