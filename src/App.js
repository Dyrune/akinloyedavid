import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Toggle the body's class based on loading state
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, transition: { duration: 1 } }} // Fade out effect for loader
          >
            <Loader setLoading={setLoading} />  {/* Loader component */}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}  // Start with hidden content
            animate={{ opacity: 1, transition: { duration: 1 } }}  // Fade in when content is shown
          >
            <Header />  {/* Display the actual content when loading is done */}
            <Banner />
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;
