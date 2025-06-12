// src/components/Footer.tsx
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Shef Solutions LLC. All rights
        reserved.
      </p>
      <div className="mt-4">
        <a href="/privacy" className="text-gray-400 hover:text-white mx-2">
          Privacy Policy
        </a>
        <a href="/terms" className="text-gray-400 hover:text-white mx-2">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
