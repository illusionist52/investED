const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <p className="mt-2">
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="ml-2 text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
