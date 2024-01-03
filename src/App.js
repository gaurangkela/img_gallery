import './App.css';
import ImageGallery from './Pages/ImageGallery';
import imageData from "./Assets/image.json"

function App() {
  return (
    <div>
      <ImageGallery imageData={imageData} />
    </div>
  );
}

export default App;
