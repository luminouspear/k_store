export function LoadingOverlay() {
    return <div className="absolute inset-0 flex items-center justify-center w-full h-screen bg-black/40">
        <div className="flex items-center justify-center text-xl bg-white w-36 h-36 rounded-xl shadow-kcyan4 font-quicksand text-kmag">
            Loading...
        </div>

    </div>;
}
