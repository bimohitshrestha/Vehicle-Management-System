import { ChangeEvent, FormEvent, useState } from "react";

const InspectionForm = () => {
  const [formData, setFormData] = useState({
    valves: false,
    airFilter: false,
    engineOil: false,
    wheels: false,
    frontForks: false,
    battery: false,
    sparkPlug: false,
    fuelLines: false,
    clutch: false,
    wheelBearing: false,
    driveChain: false,
    controlCables: false,
    carburetor: false,
    fuelFilter: false,
    rearArmPivot: false,
    steeringBearing: false,
    nutsAndBolts: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Inspection Data Submitted", formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Bike Inspection</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex items-center space-x-4">
            <input
              type="checkbox"
              id={key}
              name={key}
              //   checked={formData[key]}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label htmlFor={key} className="text-lg">
              {key.replace(/([A-Z])/g, " $1").toUpperCase()}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="w-full mt-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition"
        >
          Submit Inspection
        </button>
      </form>
    </div>
  );
};

export default InspectionForm;
