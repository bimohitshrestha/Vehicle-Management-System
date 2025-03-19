import React from "react";
import InputField from "../Field/InputField";
import SelectField from "../Field/SelectField";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicleModel: string;
  vehicleName: string;
  serviceType: string;
  vehicleType: string;
  address: string;
  requestType: string;
  location: string;
}

interface ServiceRequestModalProps {
  isModalOpen: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  closeModal: () => void;
}

const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isModalOpen,
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  closeModal,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="bg-blue-600 text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-xl font-semibold">Vehicle Service Request</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex gap-4 mb-4">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              type="email"
              required
            />
            <InputField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
              type="text"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <InputField
              label="Vehicle Name"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
              placeholder="Mercedez Benz"
              required
            />
            <InputField
              label="Vehicle Model"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              placeholder="AMG GLE 53 Coupe"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <SelectField
              label="Vehicle Type"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              options={["2 wheeler", "4 wheeler", "6 wheeler", "8 wheeler"]}
              required
            />
            <SelectField
              label="Service Type"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              options={[
                "Regular Maintenance",
                "Repair",
                "Emergency Service",
                "Servicing",
                "other",
              ]}
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
            <InputField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your address"
              type="textarea"
              rows={2}
              required
            />
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Request Type
              </label>
              <select
                name="requestType"
                value={formData.requestType}
                onChange={(e) => {
                  handleChange(e);

                  if (e.target.value === "dropoff") {
                    setFormData((prev) => ({
                      ...prev,
                      location: "",
                    }));
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="dropoff">Drop Off</option>
                <option value="pickup">Pick Up</option>
              </select>
              {formData.requestType === "pickup" && (
                <div className="mt-4">
                  <InputField
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    required
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestModal;
