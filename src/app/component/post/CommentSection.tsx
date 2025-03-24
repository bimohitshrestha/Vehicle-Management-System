const CommentsSection: React.FC = () => {
  return (
    <div className="mt-12 space-y-6">
      <h3 className="text-3xl font-semibold text-slate-800">Comments</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
            <span className="text-xl font-bold">L</span>
          </div>
          <div className="w-full">
            <p className="font-semibold text-slate-700">Lorem</p>
            <p className="text-sm text-slate-500">
              Great post! I really enjoyed reading it.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <textarea
          placeholder="Add a comment..."
          className="w-full p-4 bg-white border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
        />
        <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 transition duration-300">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
