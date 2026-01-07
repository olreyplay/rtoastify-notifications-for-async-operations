import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const handleSave = async () => {
    const toastId = toast.loading("Saving data...");

    try {
      // Simulate API request
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          Math.random() > 0.5 ? resolve() : reject();
        }, 2000)
      );

      toast.update(toastId, {
        render: "Data saved successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: "Failed to save data.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.log(error ? error : "Error details not available");
    }
  };

  return (
    <div>
      <button onClick={handleSave}>Save Data</button>
      <ToastContainer />
    </div>
  );
}

export default App;
