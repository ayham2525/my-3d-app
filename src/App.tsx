import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./components/Model";
import Header from "./components/Header";
import RiskCard from "./components/RiskCard";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
import "./styles/App.scss";

export default function App() {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [progress, setProgress] = useState(50);
  const [opacity, setOpacity] = useState(0.5);
  const [riskCount, setRiskCount] = useState<number>(0); 


  useEffect(() => {
    setOpacity(progress / 100);
  }, [progress]);

  const handleZoomIn = () => {
    if (progress < 100) {
      setProgress((prev) => Math.min(prev + 10, 100));
      setZoomLevel(1 + (Math.min(progress + 10, 100) / 100));
    }
  };

  const handleZoomOut = () => {
    if (progress > 0) {
      setProgress((prev) => Math.max(prev - 10, 0));
      setZoomLevel(1 + (Math.max(progress - 10, 0) / 100));
    }
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
    setProgress(50);
    setOpacity(0.5);
  };

  const handleProgressChange = (value: number) => {
    setProgress(value);
    setOpacity(value / 100);
    setZoomLevel(1 + (value / 100));
  };

  const handleIncreaseRiskCount = () => {
    setRiskCount((prev) => prev + 1);
  };

  return (
    <div className="dashboard">
      <Header riskCount={riskCount} onIncreaseRisk={handleIncreaseRiskCount} /> {/* ✅ Pass risk count */}

      <div className="canvas-container">
        <Canvas
          shadows
          camera={{ position: [0, 4, 10 / zoomLevel], fov: 50 }}
          style={{ backgroundColor: "#f5f7fa" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={false} enableRotate={true} />
          <Model zoom={zoomLevel > 1} opacity={opacity} />
        </Canvas>

        <InfoCard progress={progress} zoom={zoomLevel > 1} />

        <RiskCard progress={progress} onProgressChange={handleProgressChange} riskCount={riskCount} />

        <Footer
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          handleZoomReset={handleZoomReset}
        />
      </div>
    </div>
  );
}
