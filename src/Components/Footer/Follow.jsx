import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {FaThreads} from 'react-icons/fa6'

export default function Follow() {
    return (
        <div className="w-full max-w-xs mx-auto text-center">
            <h1 className="font-bold text-2xl mb-4 text-gray-800">FOLLOW US</h1>
            <div className="flex justify-center gap-4 text-3xl text-gray-800">
                <FaFacebook className="hover:text-blue-600 transition-colors" />
                <FaInstagram className="hover:text-pink-600 transition-colors" />
                <FaTwitter className="hover:text-blue-400 transition-colors" />
                <FaThreads className="hover:text-indigo-600 transition-colors" />
            </div>
        </div>
    );
}
