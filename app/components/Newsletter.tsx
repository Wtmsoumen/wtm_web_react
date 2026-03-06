"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="section-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative card-glass rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Newsletter
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Get insights on AI, development, and digital transformation — straight to your inbox.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-3 rounded-full font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You&apos;re subscribed! Thanks for joining.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-gray-400 text-sm outline-none focus:border-purple-500/60 transition-colors"
                />
                <button
                  type="submit"
                  className="gradient-btn text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            )}

            <p className="text-gray-500 text-xs mt-4">
              No spam. Unsubscribe anytime. Join 5,000+ tech leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
