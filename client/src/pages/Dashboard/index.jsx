import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../stores/auth.store";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  //   useEffect(() => {
  //     const ev = new EventSource(`/api/events`);

  //     ev.addEventListener("fileUpdate", (e) => {
  //       console.log("RECEIVED:", e.data);
  //     });

  //     // updateUI(data);
  //     return () => ev.close();
  //   }, []);

  //   const [file, setFile] = useState(null);

  //   const changeFile = (e) => {
  //     if (e.target.files && e.target.files[0]) {
  //       setFile(e.target.files[0]);
  //     }
  //   };

  //   const handleSubmit = async (e) => {
  //     console.log(file);

  //     const token = JSON.parse(localStorage.getItem("token"));

  //     try {
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       await axios.post("/api/v1/files", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <div>
      <div>
        {" "}
        Welcome to Dashboard,{" "}
        {user ? user?.handle : <Link to="/login"> Login to upload</Link>}{" "}
      </div>
      {/* Add file <input type="file" onChange={changeFile} />
      <button onClick={handleSubmit}>Send</button> */}
    </div>
  );
}
