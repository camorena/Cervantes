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
  const [isInitialized, setIsInitialized] = useState(false) // To track EmailJS initialization

  // --- IMPORTANT: Environment variable access for Create React App ---
  // Variables must be prefixed with REACT_APP_ in your .env file and Vercel settings
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID

  // Initialize EmailJS when component mounts
  useEffect(() => {
    console.log('Environment Variables Check (Client-Side for CRA):')
    console.log('REACT_APP_EMAILJS_PUBLIC_KEY:', publicKey)
    console.log('REACT_APP_EMAILJS_SERVICE_ID:', serviceId)
    console.log('REACT_APP_EMAILJS_TEMPLATE_ID:', templateId)

    if (!publicKey) {
      console.error(
        'EmailJS Public Key (User ID) is undefined! Please check Vercel environment variables and ensure they are prefixed with REACT_APP_ and the project is redeployed.'
      )
      setStatusMessage(
        'Configuration error: Unable to send emails at this time.'
      )
      setIsSuccess(false)
      setIsInitialized(false)
      return
    }
    if (!serviceId) {
      console.error(
        'EmailJS Service ID is undefined! Please check Vercel environment variables (should be REACT_APP_... for CRA).'
      )
    }
    if (!templateId) {
      console.error(
        'EmailJS Template ID is undefined! Please check Vercel environment variables (should be REACT_APP_... for CRA).'
      )
    }

    try {
      // Initialize EmailJS with your Public Key (User ID)
      emailjs.init(publicKey)
      setIsInitialized(true)
      console.log('EmailJS initialized successfully.')
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error)
      setStatusMessage('Initialization error. Please try again later.')
      setIsSuccess(false)
      setIsInitialized(false)
    }
  }, [publicKey, serviceId, templateId]) // Re-run if these values change

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
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
      console.error('Attempted to send email with missing EmailJS IDs.')
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

    // Send the form data using EmailJS
    // The third argument to sendForm is the form element itself (e.target)
    // The fourth argument is your Public Key (User ID)
    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target, // The form element
        publicKey
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text)
          setStatusMessage(
            'Thank you for your inquiry! We will contact you soon.'
          )
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
        },
        (error) => {
          console.error('Error sending email:', error)
          setStatusMessage(
            `Oops! Something went wrong: ${
              error.text || 'Please try again later.'
            }`
          )
          setIsSuccess(false)
          // Keep error message a bit longer
          setTimeout(() => {
            setStatusMessage('')
          }, 5000)
        }
      )
  }

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
              name="name" // This 'name' attribute MUST match a parameter in your EmailJS template (e.g., {{name}} or {{from_name}})
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors`}
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
              name="email" // This 'name' attribute MUST match a parameter in your EmailJS template (e.g., {{email}} or {{reply_to}})
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors`}
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
              name="phone" // This 'name' attribute MUST match a parameter in your EmailJS template (e.g., {{phone}})
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors`}
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
              name="service" // This 'name' attribute MUST match a parameter in your EmailJS template (e.g., {{service}})
              value={formData.service}
              onChange={handleChange}
              required // Or remove if not strictly required
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors`}>
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
            name="message" // This 'name' attribute MUST match a parameter in your EmailJS template (e.g., {{message}})
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className={`w-full px-4 py-3 rounded-lg ${
              darkMode
                ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
            } focus:outline-none transition-colors`}></textarea>
        </div>

        <button
          type="submit"
          disabled={!isInitialized || !publicKey || !serviceId || !templateId} // Disable button if not initialized or IDs missing
          className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors ${
            !isInitialized || !publicKey || !serviceId || !templateId
              ? 'bg-gray-400 cursor-not-allowed' // Style for disabled button
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}>
          Submit Request
        </button>
      </form>

      {/* Display Success/Error Message */}
      {statusMessage && (
        <div
          className={`mt-4 p-4 rounded-lg text-center ${
            isSuccess
              ? 'bg-green-100 text-green-700 border border-green-300' // Lighter success message
              : 'bg-red-100 text-red-700 border border-red-300' // Lighter error message
          }`}>
          <p>{statusMessage}</p>
        </div>
      )}
    </div>
  )
}

export default ContactForm
