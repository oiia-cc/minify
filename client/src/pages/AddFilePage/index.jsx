import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../stores/auth.store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useUploadStore } from "../../stores/upload.store";

export default function AddFilePage() {
  // const user = useAuthStore((s) => s.user);
  const isLoading = useUploadStore((s) => s.isLoading);
  const setIsLoading = useUploadStore((s) => s.setIsLoading);

  const [file, setFile] = useState(null);

  const changeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    if (!file) return toast.warning("Please select a file");
    setIsLoading(true);
    const fileName = file.name;

    console.log(file);
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      const formData = new FormData();
      formData.append("file", file);
      toast(fileName + " uploading...");
      await axios.post("/api/v1/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      toast.error(e.response.data?.message);
      console.log(e);
    }
  };

  return (
    <div>
      upload a file: <input type="file" onChange={changeFile} />
      <br />
      <button disabled={isLoading} onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}
