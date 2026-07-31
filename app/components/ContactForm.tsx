"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Share your goals and we will connect you with the right team.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-700">
          Thank you for contacting us!
        </div>
      ) : (
        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-2 block">Name</span>
              <input
                type="text"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-2 block">Email</span>
              <input
                type="email"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-2 block">Phone</span>
              <input
                type="tel"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-2 block">Subject</span>
              <input
                type="text"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-2 block">Message</span>
            <textarea
              rows={5}
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </label>

          <button
            type="submit"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
