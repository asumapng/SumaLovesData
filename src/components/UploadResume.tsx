"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, CheckCircle, AlertCircle, X } from "lucide-react";

export default function UploadResume() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "u") {
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setStatus("idle");
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <UploadCloud className="text-teal-400" /> Upload Resume
              </h2>
              
              <div className="border-2 border-dashed border-zinc-700/80 rounded-xl p-8 text-center hover:bg-zinc-800/80 transition-colors mb-6 cursor-pointer relative">
                <input 
                  type="file" 
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {file ? (
                  <div className="flex flex-col items-center text-zinc-300">
                    <FileText size={40} className="mb-4 text-teal-500" />
                    <p className="font-medium truncate max-w-full">{file.name}</p>
                    <p className="text-xs text-zinc-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-zinc-500">
                    <UploadCloud size={40} className="mb-4" />
                    <p>Drag & drop or click to select a PDF</p>
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-400 disabled:opacity-50 disabled:hover:bg-teal-500 text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                  />
                ) : (
                  "Upload to Server"
                )}
              </button>
              
              {status === "success" && (
                <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 flex items-center gap-2 text-sm font-medium">
                  <CheckCircle size={16} /> Resume uploaded successfully to /resume.pdf
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 flex items-center gap-2 text-sm font-medium">
                  <AlertCircle size={16} /> Failed to upload resume
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Downloader Button visible to users */}
      <motion.a 
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-zinc-900 border border-zinc-800 shadow-xl hover:border-teal-400/50 p-4 rounded-full text-zinc-300 hover:text-white transition-colors cursor-none group flex items-center gap-3 overflow-hidden pointer-events-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText size={20} className="group-hover:text-teal-400 transition-colors" />
        <span className="text-sm font-medium w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          View Resume
        </span>
      </motion.a>
    </>
  );
}
