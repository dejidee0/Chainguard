import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WaitlistModal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const payload = {
      data: {
        email,
        timestamp: new Date().toLocaleString(),
      },
    };

    try {
      const res = await fetch("https://sheetdb.io/api/v1/n9uw3cyf3ak6p", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setJoined(true);
        setEmail("");
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting to SheetDB", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div
              className="relative bg-white/5 backdrop-blur-xl text-white rounded-3xl shadow-2xl max-w-xl w-full p-8"
              onClick={(e) => e.stopPropagation()} // Prevent close on inner click
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
                Join Our Waitlist 🚀
              </h2>
              <p className="text-white/50 mb-6 text-center">
                Be first in line for exclusive crypto access.
              </p>

              {!joined ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 items-center"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-secondary transition-all disabled:opacity-60"
                  >
                    {loading ? "Joining..." : "Join"}
                  </button>
                </form>
              ) : (
                <div className="text-green-400 font-semibold text-lg mt-4 text-center">
                  🎉 You're officially on the waitlist!
                </div>
              )}
            </div>
          </motion.div>
        </>
      </AnimatePresence>
    </>
  );
};

export default WaitlistModal;
