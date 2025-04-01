import React, { useState, useEffect } from "react";
import {
  FaGasPump,
  FaTachometerAlt,
  FaBatteryFull,
  FaThermometerHalf,
  FaRoad,
  FaClock,
  FaWind,
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

interface VehicleData {
  speed: number;
  fuel: number;
  battery: number;
  temperature: number;
  distance: number;
  time: string;
  rpm: number;
  engineHealth: number;
  location: string;
  alerts: string[];
}

const Telematics = () => {
  const [vehicleData, setVehicleData] = useState<VehicleData>({
    speed: 60,
    fuel: 50,
    battery: 85,
    temperature: 25,
    distance: 100,
    time: new Date().toLocaleTimeString(),
    rpm: 2500,
    engineHealth: 95,
    location: "Highway 101",
    alerts: [],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 120);
      const newFuel = Math.floor(Math.random() * 100);
      const newTemperature = Math.floor(Math.random() * 40);
      const newRPM = Math.floor(Math.random() * 5000);
      const newEngineHealth = Math.floor(Math.random() * 100);

      const potentialAlerts = [
        newFuel < 20 ? "Low Fuel" : null,
        newTemperature > 35 ? "High Engine Temperature" : null,
        newEngineHealth < 50 ? "Engine Maintenance Required" : null,
      ].filter((alert) => alert !== null);

      setVehicleData((prevData) => ({
        ...prevData,
        speed: newSpeed,
        fuel: newFuel,
        temperature: newTemperature,
        rpm: newRPM,
        engineHealth: newEngineHealth,
        time: new Date().toLocaleTimeString(),
        alerts: potentialAlerts,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  const getStatusColor = (value: number, Number: number[] = [20, 50]) => {
    if (value < Number[0]) return "text-red-500";
    if (value < Number[1]) return "text-yellow-500";
    return "text-green-500";
  };

  const renderMetric = (
    icon: React.ReactNode,
    label: string,
    value: string | number,
    unit: string,
    color?: string
  ) => (
    <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
      {React.cloneElement(icon as React.ReactElement<any>, {
        className: `${color || "text-blue-500"} text-3xl mr-4`,
      })}

      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className={` text-xl font-bold ${color || "text-gray-800"}`}>
          {value}
          {unit}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-100 to-teal-50 mb-16 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="bg-custom-gradient text-center text-transparent text-4xl bg-clip-text font-bold mb-5">
          Advanced Vehicle Telematics
        </h2>

        {vehicleData.alerts.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 flex items-center">
            <FaExclamationTriangle className="text-red-500 text-2xl mr-4" />
            <div>
              <p className="font-semibold text-red-600"> Active Alerts:</p>
              {vehicleData.alerts.map((alert, index) => (
                <p key={index} className="text-red-500">
                  {alert}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Vehicle Performance
            </h3>
            <div className="space-y-4">
              {renderMetric(
                <FaTachometerAlt />,
                "Speed",
                vehicleData.speed,
                " km/h",
                getStatusColor(vehicleData.speed, [30, 80])
              )}
              {renderMetric(
                <FaGasPump />,
                "Fuel Level",
                vehicleData.fuel,
                "%",
                getStatusColor(vehicleData.fuel)
              )}
            </div>
          </div>

          <div className=" p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              System Health
            </h3>
            <div className="space-y-4">
              {renderMetric(
                <FaBatteryFull />,
                "Battery",
                vehicleData.battery,
                "%"
              )}
              {renderMetric(
                <FaThermometerHalf />,
                "Temperature",
                vehicleData.temperature,
                "°C",
                getStatusColor(vehicleData.temperature, [10, 30])
              )}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Advanced Metrics
            </h3>
            <div className="space-y-4">
              {renderMetric(
                <FaWind />,
                "Engine RPM",
                vehicleData.rpm,
                " rpm",
                getStatusColor(vehicleData.rpm, [1000, 3500])
              )}
              {renderMetric(
                <FaRoad />,
                "Distance",
                vehicleData.distance,
                " km"
              )}
            </div>
          </div>

          <div className=" p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Journey Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {renderMetric(
                <FaMapMarkerAlt />,
                "Current Location",
                vehicleData.location,
                ""
              )}
              {renderMetric(<FaClock />, "Current Time", vehicleData.time, "")}
              {renderMetric(
                <FaExclamationTriangle />,
                "Engine Health",
                vehicleData.engineHealth,
                "%",
                getStatusColor(vehicleData.engineHealth)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telematics;
