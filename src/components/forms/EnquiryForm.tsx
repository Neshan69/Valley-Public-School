import { useState } from "react";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!key) { setStatus("error"); return; }
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", key);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input name="name" required placeholder="Name" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white" />
      <input name="email" type="email" required placeholder="Email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white" />
      <input name="phone" placeholder="Phone" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white" />
      <select name="category" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white">
        <option>Admissions</option>
        <option>General</option>
      </select>
      <textarea name="message" required placeholder="Message" rows={4} className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white" />
      <button disabled={status === "loading"} className="rounded-md bg-brand-600 px-5 py-2.5 text-white disabled:opacity-50">
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
      {status === "success" && <p className="text-emerald-400">Submitted successfully.</p>}
      {status === "error" && <p className="text-rose-400">Submission failed or service not configured.</p>}
    </form>
  );
}
