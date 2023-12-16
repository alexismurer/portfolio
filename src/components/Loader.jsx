import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-white text-[14px] mt-[40px] font-extrabold">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
