export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Salkara Sudbury. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center gap-4 text-white/70 text-sm">
        <a
          href="https://www.instagram.com/salkara.foods.sudbury_/?utm_source=ig_web_button_share_sheet&igsh=MTMzZm5wb2g5eG4yMw=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
