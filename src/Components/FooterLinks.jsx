import { FaHome, FaPhone } from "react-icons/fa";

export default function Links() {
    return (
        <div className="flex flex-col justify-center items-baseline md:flex-row md:gap-12 lg:gap-24 text-gray-800">
            {/* Help Section */}
            <div className="flex-1 mb-8 md:mb-0">
                <h2 className="font-bold text-lg md:text-2xl mb-4">HELP</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Contact us</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy & Policies</a></li>
                </ul>
            </div>

            {/* Shop Section */}
            <div className="flex-1 mb-8 md:mb-0">
                <h2 className="font-bold text-lg md:text-2xl mb-4">SHOP</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-600 transition-colors">All Products</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Reviews</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Gift Card</a></li>
                </ul>
            </div>

            {/* Contact Us Section */}
            <div className="flex-1">
                <h2 className="font-bold text-lg md:text-2xl mb-4">Contact Us</h2>
                <div className="flex items-center mb-2 text-gray-600">
                    <FaHome className="mr-2 text-xl text-blue-600" />
                    <span>New York, America</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-xl text-blue-600" />
                    <span>+91-1312313</span>
                </div>
            </div>
        </div>
    );
}
