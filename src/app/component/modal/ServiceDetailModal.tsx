import React from "react";
import { RxCross1 } from "react-icons/rx";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ServiceDetailModalProps {
  feature: Feature;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  feature,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0  bg-opacity-30 transition-opacity"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full mx-4 z-10 relative transform transition-all">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              {feature.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <RxCross1 />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Benefits</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Increased operational efficiency</li>
              <li>Reduced maintenance costs</li>
              <li>Improved customer satisfaction</li>
              <li>Enhanced fleet performance</li>
            </ul>
          </div>

          {/* <div className="text-right">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
