import { uploadService } from "../../services/upload.service";
import { useUploadStore } from "../../stores/upload.store"

export default function FileUploader() {
    const uploads = useUploadStore(s => s.uploads);
    const handleUpload = async (e) => {
        const files = Array.from(e.target.files);
        for (const file of files) {
            uploadService(file);
        }
    }

    return (
        <div>
            <input
                type="file"
                multiple
                onChange={handleUpload}
            />

            <div style={{ marginTop: 20 }}>
                {Object.keys(uploads).map(fileName => (

                    <div key={fileName}>
                        {console.log(">>>fileName:", fileName)}
                        {console.log(">>>%%%:", uploads[fileName])}

                        {fileName} - {uploads[fileName]}%
                        <div style={{
                            height: 5,
                            width: uploads[fileName] + "%",
                            background: "blue",
                            transition: "width 0.2s"
                        }}>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )


}