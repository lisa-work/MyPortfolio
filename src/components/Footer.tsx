import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-400" /> by Lisa Nguyen
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}