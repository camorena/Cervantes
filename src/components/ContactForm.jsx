import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [statusMessage, setStatusMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Environment variables access for Create React App
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID

  // Initialize EmailJS when component mounts
  useEffect(() => {
    if (!publicKey) {
      setStatusMessage(
        'Configuration error: Unable to send emails at this time.'
      )
      setIsSuccess(false)
      setIsInitialized(false)
      return
    }

    try {
      emailjs.init(publicKey)
      setIsInitialized(true)
    } catch (error) {
      setStatusMessage('Initialization error. Please try again later.')
      setIsSuccess(false)
      setIsInitialized(false)
    }
  }, [publicKey])

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isInitialized) {
      setStatusMessage(
        'Email service is not initialized. Please check configuration.'
      )
      setIsSuccess(false)
      return
    }

    if (!publicKey || !serviceId || !templateId) {
      setStatusMessage(
        'Email configuration is incomplete. Cannot send message.'
      )
      setIsSuccess(false)
      return
    }

    // Basic validation before sending
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all required fields.')
      setIsSuccess(false)
      return
    }

    setStatusMessage('Sending your message...')
    setIsSuccess(false)
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(serviceId, templateId, e.target, publicKey)

      setStatusMessage('Thank you for your inquiry! We will contact you soon.')
      setIsSuccess(true)

      // Reset form fields after a brief delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
        setStatusMessage('')
      }, 3000)
    } catch (error) {
      setStatusMessage(
        `Oops! Something went wrong: ${error.text || 'Please try again later.'}`
      )
      setIsSuccess(false)

      // Keep error message a bit longer
      setTimeout(() => {
        setStatusMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = Boolean(
    formData.name && formData.email && formData.message && formData.service
  )

  const isFormDisabled =
    !isInitialized || !publicKey || !serviceId || !templateId || isSubmitting

  return (
    <div
      className={`rounded-xl p-6 ${
        darkMode ? 'bg-gray-800 shadow-lg' : 'bg-gray-100 shadow-lg'
      }`}>
      <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className={`block mb-2 text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isFormDisabled}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors ${
                isFormDisabled ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isFormDisabled}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors ${
                isFormDisabled ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className={`block mb-2 text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isFormDisabled}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors ${
                isFormDisabled ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            />
          </div>

          {/* Service Needed Field */}
          <div>
            <label
              htmlFor="service"
              className={`block mb-2 text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={isFormDisabled}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors ${
                isFormDisabled ? 'opacity-60 cursor-not-allowed' : ''
              }`}>
              <option value="">Select a service</option>
              <option value="interior-painting">Interior Painting</option>
              <option value="drywall-installation">Drywall Installation</option>
              <option value="texture-application">Texture Application</option>
              <option value="drywall-repair">Drywall Repair</option>
              <option value="ceiling-work">Ceiling Work</option>
              <option value="custom-finishes">Custom Finishes</option>
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className={`block mb-2 text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            disabled={isFormDisabled}
            className={`w-full px-4 py-3 rounded-lg ${
              darkMode
                ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
            } focus:outline-none transition-colors ${
              isFormDisabled ? 'opacity-60 cursor-not-allowed' : ''
            }`}></textarea>
        </div>

        <button
          type="submit"
          disabled={isFormDisabled || !isFormValid}
          className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors ${
            isFormDisabled || !isFormValid
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}>
          {isSubmitting ? 'Sending...' : 'Submit Request'}
        </button>
      </form>

      {/* Display Success/Error Message */}
      {statusMessage && (
        <div
          className={`mt-4 p-4 rounded-lg text-center ${
            isSuccess
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
          <p>{statusMessage}</p>
        </div>
      )}
    </div>
  )
}

export default ContactForm
