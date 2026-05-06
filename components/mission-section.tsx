'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Send } from 'lucide-react';
import Link from 'next/link';
import { contactSchema, ContactFormData } from '@/lib/validations/contact';
import { submitContactForm } from '@/app/actions/contact';

export function MissionSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    const result = await submitContactForm(data);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      reset();
    } else {
      setError(result.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="cta" className="relative py-16 bg-[#fafafa] overflow-hidden">
      {/* ... Title Logic Remains Same ... */}
      <div className="flex items-center justify-center gap-4 mb-20 relative z-20 group cursor-default">
        <div className="flex flex-col gap-1.5 items-start w-12">
          <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
          <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
        </div>
        <h2 className="text-3xl md:text-4xl tracking-widest font-light text-gray-900">
          <span className="text-[#F5B82A]">OUR</span> <span className="font-bold">MISSION</span>
        </h2>
        <div className="flex flex-col gap-1.5 items-end w-12">
          <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
          <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative container mx-auto px-6 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          
          {/* Left Column - Mission & Vision */}
          <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-12">
              At RADIX Interior & Construction, our core values shape everything we do—guiding our decisions, defining our culture, and driving exceptional outcomes for every client. We are committed to design quality, professional execution, and client satisfaction across all sectors.
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Our creative and skilled team focuses on detail, functionality, and transforming client ideas into reality. We aim to build a legacy of excellence by delivering innovative solutions and reliable service globally.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#151515] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#F5B82A] rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="text-gray-900 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-light text-white mb-4">Message <span className="font-bold">Sent</span></h3>
                  <p className="text-gray-400 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#F5B82A] font-bold tracking-widest uppercase text-xs hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-10">
                    Get In <span className="font-bold">Touch</span>
                  </h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-widest text-gray-400 uppercase">Name</label>
                      <input 
                        {...register('name')}
                        type="text" 
                        className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors" 
                      />
                      {errors.name && <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.name.message}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-widest text-gray-400 uppercase">Email</label>
                      <input 
                        {...register('email')}
                        type="email" 
                        className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors" 
                      />
                      {errors.email && <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.email.message}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-widest text-gray-400 uppercase">Phone (Optional)</label>
                      <input 
                        {...register('phone')}
                        type="tel" 
                        className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors" 
                      />
                      {errors.phone && <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.phone.message}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-widest text-gray-400 uppercase">Message</label>
                      <textarea 
                        {...register('message')}
                        rows={1} 
                        className="bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-[#F5B82A] transition-colors resize-none"
                      ></textarea>
                      {errors.message && <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider">{errors.message.message}</span>}
                    </div>
                    
                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-4 bg-[#F5B82A] text-gray-900 font-bold uppercase tracking-widest py-5 px-8 hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Submit Message
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* 3D Bouncing MISSION Text */}
      <div className="absolute bottom-4 left-8 z-10 pointer-events-none">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#E8E8E8] uppercase tracking-tighter animate-bounce-slow text-3d">
          Mission
        </h2>
      </div>
    </section>
  );
}
