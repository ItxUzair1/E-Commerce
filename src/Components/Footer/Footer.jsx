import Links from "../FooterLinks";
import Wave from "./Wave";
import Follow from "./Follow";
import SendMessage from "./Message";

export default function Footer() {
    return (
       <div className="w-full">
        <Wave/>
        <footer className="bg-gray-100 p-6">
            <SendMessage />
            <div className="w-full px-6 md:px-20 py-8 flex flex-col md:flex-row gap-12">
                <Follow />
                <Links />
            </div>
        </footer>
       </div>
        
    );
}
