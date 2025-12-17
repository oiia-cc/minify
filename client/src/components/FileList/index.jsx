import { useFileStore, } from "../../stores/file.store";
import { useFiles } from "../../hooks/useFiles";
import { useEffect } from "react";

export default function FileList() {
    const { files } = useFiles();

    console.log("/>>>", files);
    
    if (!files.length) return <div>No files yet.</div>

    return (
        <div>
            {
                files.map(f => (
                    <div key={f.id} className="file-card">
                        <hr />
                        <p><b>{f.displayName} | {f.updatedAt} | {
                            f.versions[0].mimeType
                        }</b></p>
                    </div>
                ))
            }
        </div>
    )

}