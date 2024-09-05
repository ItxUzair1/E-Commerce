export default function Logo() {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <img
        src="/src/assets/Logo.png"
        alt="Logo"
        className="h-8 w-auto max-w-full md:h-10 lg:h-12" // Adjusted for responsiveness
      />
    </div>
  );
}
