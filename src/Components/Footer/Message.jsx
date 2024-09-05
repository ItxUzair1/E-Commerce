export default function SendMessage() {
    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <input 
                    type="text" 
                    placeholder="Send Message" 
                    className="w-full md:w-80 p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-yellow-400 px-5 py-2 rounded-xl hover:bg-yellow-500 transition-colors">Send</button>
            </div>
        </div>
    );
}
