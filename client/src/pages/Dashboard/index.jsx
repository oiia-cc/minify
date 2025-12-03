import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../stores/auth.store"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import FileList from "../../components/FileList";
import FileUploader from "../../components/FileUploader";
import { useModalStore } from "../../stores/modal.store";
import GlobalModalManager from "../../components/Modal/GlobalModalManager";
import { useFileSearch } from "../../hooks/useFileSearch";

export default function DashboardPage() {
    const user = useAuthStore(s => s.user);
    const [notify, setNotify] = useState('');

    const [file, setFile] = useState(null);

    const changeFile = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    const handleSubmit = async (e) => {
        console.log(file);

        const token = JSON.parse(localStorage.getItem("token"));

        try {
            const formData = new FormData();
            formData.append('file', file);
            await axios.post('/api/v1/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${token}`
                }
            });

        } catch (e) {
            console.log(e);
        }
    }

    const handleOpenModal = () => {
        useModalStore.getState().openModal("editPost", { postId: 123 })
    }

    const {
        keyword, setKeyword,
        groupBy, setGroupBy,
        sortBy, setSortBy,
        orderBy, setOrderBy,
    } = useFileSearch();

    return (
        <div style={{ flex: 5 }}>
            <div>
                <label htmlFor="">
                    Search:
                </label>
                <input
                    onChange={(e) => setKeyword(e.target.value)} value={keyword}
                />
                <label htmlFor="">
                    ---group-by: </label>

                <select
                    onChange={(e) => setGroupBy(e.target.value)} value={groupBy}
                    name="groupBy" id="groupBy" defaultValue="none">
                    <option value="none" >none</option>
                    <option value="type">type</option>
                </select>
                <label htmlFor="">
                    ---sort-by:
                </label>
                <select
                    onChange={(e) => setSortBy(e.target.value)} value={sortBy}
                    name="sortBy" id="sortBy" defaultValue="updatedAt">
                    <option value="updatedAt" >update-date</option>
                    <option value="displayName">name</option>
                    <option value="sizeBytes">size</option>
                </select>
                <label htmlFor="">
                    ---order: </label>
                <select
                    onChange={(e) => setOrderBy(e.target.value)} value={orderBy}
                    name="orderBy" id="orderBy" defaultValue="desc">
                    <option value="desc">high-to-low</option>
                    <option value="asc">low-to-high</option>
                </select>
            </div>
            <button onClick={handleOpenModal}>ADD +</button>
            <GlobalModalManager />
            {/* Add file
               <input type="file" onChange={changeFile} />
            <button onClick={handleSubmit}>Send</button> */}
            <div>
                <FileUploader />
            </div>
            <div>
                <FileList />
            </div>
        </div>
    )
}