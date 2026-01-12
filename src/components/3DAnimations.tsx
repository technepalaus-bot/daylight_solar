'use client';

export function SolarPanel3D() {
  return (
    <div className="w-full h-96 flex items-center justify-center perspective">
      <style>{`
        @keyframes rotateX {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .solar-panel-3d {
          width: 300px;
          height: 200px;
          background: linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(30, 64, 175, 0.3);
          animation: rotateX 8s infinite linear, float 4s ease-in-out infinite;
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }

        .solar-panel-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.1) 20px,
            rgba(255, 255, 255, 0.1) 40px
          );
        }

        .solar-panel-3d::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent);
          border-radius: 15px;
        }

        .battery-3d {
          width: 120px;
          height: 250px;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(220, 38, 38, 0.3);
          animation: rotateX 10s infinite linear, float 5s ease-in-out infinite;
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }

        .battery-3d::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 15%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.2), transparent);
          border-radius: 5px;
        }

        .inverter-3d {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
          animation: rotateX 12s infinite linear, float 6s ease-in-out infinite;
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }

        .inverter-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 15px,
            rgba(255, 255, 255, 0.1) 15px,
            rgba(255, 255, 255, 0.1) 30px
          );
        }

        .glow-ring {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.2;
          }
        }
      `}</style>
      
      <div className="solar-panel-3d"></div>
    </div>
  );
}

export function Battery3D() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <style>{`
        @keyframes rotateY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.5); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.8); }
        }

        .battery-3d-container {
          width: 150px;
          height: 300px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          border-radius: 20px;
          animation: rotateY 6s infinite linear, glow 2s ease-in-out infinite;
          transform-style: preserve-3d;
          position: relative;
          box-shadow: 0 20px 60px rgba(220, 38, 38, 0.3);
        }

        .battery-top {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 20px;
          background: linear-gradient(180deg, #7f1d1d, #991b1b);
          border-radius: 5px 5px 0 0;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .battery-indicator {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), transparent);
          border-radius: 15px;
        }
      `}</style>
      
      <div className="battery-3d-container">
        <div className="battery-top"></div>
        <div className="battery-indicator"></div>
      </div>
    </div>
  );
}

export function Inverter3D() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <style>{`
        @keyframes rotate3d {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }

        .inverter-3d-container {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-radius: 15px;
          animation: rotate3d 10s infinite linear;
          transform-style: preserve-3d;
          position: relative;
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
        }

        .inverter-grid {
          position: absolute;
          inset: 15px;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.1) 10px,
            rgba(255, 255, 255, 0.1) 20px
          );
          border-radius: 10px;
        }

        .inverter-light {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #fbbf24;
          border-radius: 50%;
          box-shadow: 0 0 10px #fbbf24;
          animation: blink 2s infinite;
        }

        .inverter-light:nth-child(2) {
          top: 30px;
          left: 30px;
        }

        .inverter-light:nth-child(3) {
          top: 30px;
          right: 30px;
        }

        .inverter-light:nth-child(4) {
          bottom: 30px;
          left: 30px;
          animation: blink 2s infinite 0.5s;
        }

        .inverter-light:nth-child(5) {
          bottom: 30px;
          right: 30px;
          animation: blink 2s infinite 1s;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
      
      <div className="inverter-3d-container">
        <div className="inverter-grid"></div>
        <div className="inverter-light"></div>
        <div className="inverter-light"></div>
        <div className="inverter-light"></div>
        <div className="inverter-light"></div>
      </div>
    </div>
  );
}
