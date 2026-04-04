'use client';

import { useActionState } from 'react';

async function subscribeAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  // Simulate API call
  await new Promise(res => setTimeout(res, 1000));
  
  if (!email || !String(email).includes('@')) {
    return { error: 'Please enter a valid email.' };
  }
  
  return { success: true };
}

export function ContactForm() {
  const [state, action, isPending] = useActionState(subscribeAction, null);

  return (
    <form action={action} className="w-full max-w-[500px] mx-auto">
      <div className="flex gap-0">
        <input 
          name="email"
          className="flex-1 bg-white/5 border border-bg-base/15 border-r-0 px-6 py-[18px] text-[15px] text-bg-base placeholder:text-bg-base/30 outline-none transition-colors duration-300 focus:border-brand-sky disabled:opacity-50" 
          type="email" 
          placeholder="your@email.com" 
          required
          disabled={(isPending ?? false) || (state?.success ?? false)}
          suppressHydrationWarning
        />
        <button 
          className="bg-brand-cobalt border border-brand-cobalt text-white px-8 py-[18px] text-[11px] font-bold tracking-[2px] uppercase transition-colors duration-300 hover:bg-brand-cobalt/80 disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit"
          disabled={(isPending ?? false) || (state?.success ?? false)}
        >
          {isPending ? 'Sending...' : state?.success ? 'Sent!' : 'Send →'}
        </button>
      </div>
      {state?.error && <p className="text-red-500 text-[13px] mt-3">{state.error}</p>}
      {state?.success && <p className="text-brand-sky text-[14px] mt-3 font-semibold">Thanks for reaching out! We&apos;ll be in touch.</p>}
    </form>
  );
}
