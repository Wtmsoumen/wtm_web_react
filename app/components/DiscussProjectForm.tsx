'use client'

import React, { useState } from 'react'
import { X, User, Mail, Tag, MessageSquare, Send } from 'lucide-react'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

interface DiscussProjectFormProps {
  isOpen: boolean
  onClose: () => void
}

const DiscussProjectForm = ({ isOpen, onClose }: DiscussProjectFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(formData)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-[3px] h-[18px] bg-blue-600 rounded-full" />
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Contact Us
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Book a Free Consultation</h2>
        <p className="text-sm text-gray-500 mb-6">We'll get back to you within 24 hours</p>

        {/* Name + Phone row */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
              <User size={15} className="text-gray-400 shrink-0" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2.5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>



       <div>
  <label className="block text-sm font-medium text-gray-700 mb-1.5">
    Phone Number <span className="text-red-500">*</span>
  </label>

  <PhoneInput
    country={'in'}
    value={formData.phone}
    onChange={(phone: string) =>
      setFormData({ ...formData, phone })
    }
    inputClass="!w-full !py-2.5 !pl-14 !text-sm !border-0 !bg-transparent !text-gray-800 placeholder-gray-400"
    containerClass="!w-full !border !border-gray-200 !rounded-lg !bg-gray-50"
    buttonClass="!border-r !border-gray-200 !bg-transparent"
    dropdownClass="!text-md !text-gray-800"
  />
</div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Business Email <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-400 shrink-0">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2.5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Service */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Service Interested <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 bg-gray-50">
            <Tag size={15} className="text-gray-400 shrink-0" />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full py-2.5 bg-transparent outline-none text-sm text-gray-500 cursor-pointer appearance-none"
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Project Description <span className="text-red-500">*</span>
          </label>
          <div className="flex items-start gap-2 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50">
            <MessageSquare size={15} className="text-gray-400 shrink-0 mt-0.5" />
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

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold text-[15px] py-3.5 rounded-xl transition-all duration-150"
        >
          <Send size={16} />
          Submit Request
        </button>
      </div>
    </div>
  )
}

export default DiscussProjectForm