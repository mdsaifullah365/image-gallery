import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <Header />
      <ImageGallery />
    </div>
  );
}

export default App;
