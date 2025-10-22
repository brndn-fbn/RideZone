export default function Footer() {
  return (
    <footer className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-6 text-center text-gray-500 text-sm border-t border-gray-200 bg-white">
      © {new Date().getFullYear()} RideZone. All rights reserved.
    </footer>
  );
}
