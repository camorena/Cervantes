import React, { useState } from 'react'
import emailjs from 'emailjs-com' // Import the emailjs-com module

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [statusMessage, setStatusMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false) // Track success or error state

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

    // Basic validation before sending
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all required fields.')
      setIsSuccess(false)
      return
    }

    // Show loading message before sending
    setStatusMessage('Sending your message...')
    setIsSuccess(false)

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
        e.target, // The form data (target is the form element)
        process.env.REACT_APP_EMAILJS_USER_ID // User ID
      )
      .then(
        (result) => {
          // On success
          setStatusMessage(
            'Thank you for your inquiry! We will contact you soon.'
          )
          setIsSuccess(true)

          // Reset form fields after a brief delay to allow user to read the message
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: '',
              message: '',
            })
            setStatusMessage('') // Clear the success message
          }, 3000) // 3 seconds to show the success message before reset
        },
        (error) => {
          // On error
          console.error('Error sending email:', error.text)
          setStatusMessage(
            'Oops! Something went wrong. Please try again later.'
          )
          setIsSuccess(false)

          // Optionally reset the fields after an error or keep them for another try
          setTimeout(() => {
            setStatusMessage('') // Clear the error message
          }, 3000) // Show the error message for 3 seconds
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
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors`}
            />
          </div>

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
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors`}
            />
          </div>

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
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                  : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
              } focus:outline-none transition-colors`}
            />
          </div>

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
            className={`w-full px-4 py-3 rounded-lg ${
              darkMode
                ? 'bg-gray-700 text-white border border-gray-600 focus:border-indigo-500'
                : 'bg-white text-gray-900 border border-gray-300 focus:border-indigo-500'
            } focus:outline-none transition-colors`}></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
          Submit Request
        </button>
      </form>

      {/* Display Success/Error Message */}
      {statusMessage && (
        <div
          className={`mt-4 p-4 rounded-lg text-center ${
            isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
          <p>{statusMessage}</p>
        </div>
      )}
    </div>
  )
}

export default ContactForm
