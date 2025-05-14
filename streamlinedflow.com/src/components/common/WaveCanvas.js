
const WaveCanvas= () => {
  return (
    <canvas
      id="waveCanvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.9 }}
    />
  );
};

export default WaveCanvas