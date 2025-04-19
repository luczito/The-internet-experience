export function LoginModal({ show, setShow, triggerPattern }) {
    if (!show) return null;
  
    const closeModal = () => setShow(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      triggerPattern("Entered Info Without Reading", 15);
      setShow(false);
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Login to Continue</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-3 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login / Register
            </button>
          </form>
          <button
            onClick={closeModal}
            className="mt-3 text-sm text-gray-500 hover:underline w-full"
          >
            No Thanks
          </button>
        </div>
      </div>
    );
  }
  