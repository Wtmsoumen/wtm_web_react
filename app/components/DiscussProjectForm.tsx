'use client'

import React, { useState, useRef } from 'react'
import { X, User, Mail, Tag, MessageSquare, Send, Building2 } from 'lucide-react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import ReCAPTCHA from 'react-google-recaptcha'

interface DiscussProjectFormProps {
  isOpen: boolean
  onClose: () => void
}

const DiscussProjectForm = ({ isOpen, onClose }: DiscussProjectFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    service: '',
    description: '',
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA verification.')
      return
    }
    console.log({ ...formData, captchaToken })
    recaptchaRef.current?.reset()
    setCaptchaToken(null)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[calc(100vh-3rem)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Sticky Header ── */}
        <div className="px-7 pt-6 pb-4 border-b border-gray-100 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <div className="w-[3px] h-[16px] bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] rounded-full" />
            <span className="text-xs font-semibold bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent uppercase tracking-widest">
              Contact Us
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Book a Free Consultation</h2>
          <p className="text-xs text-gray-400 mt-0.5">We'll get back to you within 24 hours</p>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="overflow-y-auto px-7 py-5 flex flex-col gap-3">

          {/* Name + Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
                <User size={14} className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Phone <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={'in'}
                value={formData.phone}
                onChange={(phone: string) => setFormData({ ...formData, phone })}
                inputClass="!w-full !py-[17px] !pl-12 !text-sm !border-0 !bg-transparent !text-gray-800 placeholder-gray-400"
                containerClass="!w-full !border !border-gray-200 !rounded-lg !bg-gray-50"
                buttonClass="!border-r !border-gray-200 !bg-transparent"
                dropdownClass="!text-sm !text-gray-800"
              />
            </div>
          </div>

          {/* Email + Company */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Business Email <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
                <Mail size={14} className="text-gray-400 shrink-0" />
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Company <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
                <Building2 size={14} className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Ltd"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full py-2 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Service Interested <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center border border-gray-200 rounded-lg px-3 bg-gray-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Tag size={14} className="text-gray-400 shrink-0" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full py-2 pl-2 pr-8 bg-transparent outline-none text-sm text-gray-700 cursor-pointer appearance-none"
              >
                <option value="">Select Service</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
                <option>SEO Optimization</option>
                <option>Cloud Solutions</option>
                <option>Others</option>
              </select>
              <div className="absolute right-3 pointer-events-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Project Description <span className="text-red-500">*</span>
            </label>
            <div className="flex items-start gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
              <MessageSquare size={14} className="text-gray-400 shrink-0 mt-0.5" />
              <textarea
                name="description"
                placeholder="Tell us about your project..."
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* reCAPTCHA + Submit side by side */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              size="compact"
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />

            <button
              onClick={handleSubmit}
              disabled={!captchaToken}
              className="flex-1 flex items-center justify-center gap-2 bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] active:scale-[0.99] text-white font-semibold text-sm py-3 rounded-xl transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              <Send size={15} />
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DiscussProjectForm




//-------------------With Recaptahca-------------------

// 'use client'

// import React, { useState, useRef } from 'react'
// import { X, User, Mail, Tag, MessageSquare, Send, Building2 } from 'lucide-react'
// import 'react-phone-input-2/lib/style.css'
// import PhoneInput from 'react-phone-input-2'
// import ReCAPTCHA from 'react-google-recaptcha'


// console.log("reCAPTCHA site key:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)

// interface DiscussProjectFormProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const DiscussProjectForm = ({ isOpen, onClose }: DiscussProjectFormProps) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     companyName: '',
//     service: '',
//     description: '',
//   })
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null)
//   const recaptchaRef = useRef<ReCAPTCHA>(null)

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = () => {
//     if (!captchaToken) {
//       alert('Please complete the reCAPTCHA verification.')
//       return
//     }
//     console.log({ ...formData, captchaToken })
//     // reset after submit
//     recaptchaRef.current?.reset()
//     setCaptchaToken(null)
//   }

//   if (!isOpen) return null

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4"
//       onClick={onClose}
//     >
//       <div
//         className="relative w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//         >
//           <X size={20} />
//         </button>

//         {/* Header */}
//         <div className="flex items-center gap-2 mb-1">
//           <div className="w-[3px] h-[18px] bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] rounded-full" />
//           <span className="text-xs font-semibold bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent uppercase tracking-widest">
//             Contact Us
//           </span>
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-1">Book a Free Consultation</h2>
//         <p className="text-sm text-gray-500 mb-6">We'll get back to you within 24 hours</p>

//         {/* Name + Phone row */}
//         <div className="grid grid-cols-2 gap-3 mb-3">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1.5">
//               Name <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
//               <User size={15} className="text-gray-400 shrink-0" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full py-2.5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1.5">
//               Phone Number <span className="text-red-500">*</span>
//             </label>
//             <PhoneInput
//               country={'in'}
//               value={formData.phone}
//               onChange={(phone: string) => setFormData({ ...formData, phone })}
//               inputClass="!w-full !py-5 !pl-12 !text-sm !border-0 !bg-transparent !text-gray-800 placeholder-gray-400"
//               containerClass="!w-full !border !border-gray-200 !rounded-lg !bg-gray-50"
//               buttonClass="!border-r !border-gray-200 !bg-transparent"
//               dropdownClass="!text-md !text-gray-800"
//             />
//           </div>
//         </div>

//         {/* Email + Company row */}
//         <div className="grid grid-cols-2 gap-3 mb-3">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1.5">
//               Business Email <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
//               <Mail size={15} className="text-gray-400 shrink-0" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="john@company.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full py-2.5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1.5">
//               Company Name <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
//               <Building2 size={15} className="text-gray-400 shrink-0" />
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Company Ltd"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 className="w-full py-2.5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Service */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1.5">
//             Service Interested <span className="text-red-500">*</span>
//           </label>
//           <div className="relative flex items-center border border-gray-200 rounded-xl px-3 bg-gray-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
//             <Tag size={16} className="text-gray-400 shrink-0" />
//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               className="w-full py-3 pl-2 pr-8 bg-transparent outline-none text-sm text-gray-700 cursor-pointer appearance-none"
//             >
//               <option value="" className="text-gray-400">Select Service</option>
//               <option>Web Development</option>
//               <option>Mobile App Development</option>
//               <option>UI/UX Design</option>
//               <option>Digital Marketing</option>
//               <option>SEO Optimization</option>
//               <option>Cloud Solutions</option>
//               <option>Others</option>
//             </select>
//             <div className="absolute right-3 pointer-events-none">
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-gray-700 mb-1.5">
//             Project Description <span className="text-red-500">*</span>
//           </label>
//           <div className="flex items-start gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50">
//             <MessageSquare size={15} className="text-gray-400 shrink-0 mt-0.5" />
//             <textarea
//               name="description"
//               placeholder="Tell us about your project..."
//               rows={3}
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 resize-none leading-relaxed"
//             />
//           </div>
//         </div>

//         {/* ── reCAPTCHA ── */}
//         <div className="flex justify-center mb-5">
//           <ReCAPTCHA
//             ref={recaptchaRef}
//             sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
//             onChange={(token) => setCaptchaToken(token)}
//             onExpired={() => setCaptchaToken(null)}
//           />
//         </div>

//         {/* Submit */}
//         <button
//           onClick={handleSubmit}
//           disabled={!captchaToken}
//           className="w-full flex items-center justify-center gap-2 bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] active:scale-[0.99] text-white font-semibold text-[15px] py-3.5 rounded-xl transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
//         >
//           <Send size={16} />
//           Submit Request
//         </button>
//       </div>
//     </div>
//   )
// }

// export default DiscussProjectForm