import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AppRouter from "./router";
import { useAuthStore } from "./stores/auth.store";
import { toast, ToastContainer } from "react-toastify";
import { useUploadStore } from "./stores/upload.store";

function App() {
  const init = useAuthStore((s) => s.init);

  const isLoading = useUploadStore((s) => s.isLoading);
  const setIsLoading = useUploadStore((s) => s.setIsLoading);

  useEffect(() => {
    init();
    const ev = new EventSource(`/api/events`);

    ev.addEventListener("fileUpdate", (e) => {
      const parsedData = JSON.parse(e.data);

      try {
        if (parsedData?.status) {
          toast.success(parsedData.status);
        }
        if (!parsedData?.status) {
          toast.error(parsedData);
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast.error(parsedData);
      }
    });

    return () => ev.close();
  }, []);

  return (
    <div>
      <AppRouter />;
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
