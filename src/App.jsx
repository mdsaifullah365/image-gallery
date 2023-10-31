import { useState } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

function App() {
  const [selectedImages, setSelectedImages] = useState([]);

  return (
    <>
      <Header selectedImages={selectedImages} />
      <Gallery
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
    </>
  );
}

export default App;
