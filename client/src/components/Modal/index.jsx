export default function MyModal({ modalName, data, onClose }) {
    console.log(">>>data:", data);

    return (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center"
            style={{ zIndex: 1000 }}

            onClick={onClose}>
            <div
                className="bg-white p-4 rounded z-[10000]"
                style={{ background: "red" }}
                onClick={(e) => e.stopPropagation()}
            >
                <h1>{modalName}</h1>
                {JSON.stringify(data)}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}