import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Define appointment types with their duration and selected state
const appointmentTypes = [
  { id: 1, title: 'Residential Vastu', duration: '1 hour', selected: true },
  { id: 2, title: 'Commercial Vastu', duration: '1 hour', selected: false },
  { id: 3, title: 'Office Premises', duration: '1 hour', selected: false },
  { id: 4, title: 'New Property Vastu', duration: '1 hour', selected: false },
];

// Define available time slots for appointments
const timeSlots = [
  "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm"
];

const Booking = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState(appointmentTypes[0]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  // Change the displayed month in the calendar
  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // Generate the days of the current month
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  // Handle the submission of the appointment form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log({
      type: selectedType,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cornsilk p-8"
      >
        <h1 className="text-3xl font-bold text-pakistan-green mb-8 text-center">Book an appointment</h1>

        {/* Appointment Types */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-pakistan-green">Select appointment type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointmentTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedType(type)}
                className={`p-4 rounded-xl text-left transition-colors ${
                  selectedType.id === type.id
                    ? 'bg-tigers-eye text-cornsilk'
                    : 'bg-gray-50 text-pakistan-green  hover:bg-earth-yellow hover:text-cornsilk'
                }`}
              >
                <div className="font-semibold">{type.title}</div>
                <div className="flex items-center text-sm mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  {type.duration}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Centering the Calendar and Time Slots */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-8 rounded-xl max-w-7xl mx-auto">
          {/* Calendar Section */}
          <div className="mb-8 flex-1">
            <h2 className="text-xl text-pakistan-green font-semibold mb-4">Select date</h2>
            <div className="bg-white rounded-xl">
              <div className="flex text-pakistan-green items-center justify-between mb-4">
                <button
                  onClick={handlePreviousMonth}
                  className="p-2 hover:bg-earth-yellow hover:text-cornsilk rounded-full"
                  aria-label="Previous Month"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-medium">
                  {format(currentDate, 'MMMM yyyy')}
                </h3>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-earth-yellow hover:text-cornsilk rounded-full"
                  aria-label="Next Month"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-pakistan-green text-sm py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days.map((day) => (
                  <motion.button
                    key={day.toISOString()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDate(day)}
                    className={`p-2 rounded-full ${
                      !isSameMonth(day, currentDate) && 'text-pakistan-green'
                    } ${
                      selectedDate && isSameDay(day, selectedDate)
                        ? 'bg-tigers-eye text-cornsilk'
                        : 'hover:bg-earth-yellow hover:text-cornsilk'
                    }`}
                  >
                    {format(day, 'd')}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Time Slots Section */}
          <div className="mb-8 flex-1">
            <h2 className="text-xl text-pakistan-green font-semibold mb-4">Select time</h2>
            <div className="grid grid-cols-3 gap-4">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.09 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg text-center transition-colors ${
                    selectedTime === time
                      ? 'bg-tigers-eye text-cornsilk'
                      : 'bg-white hover:bg-earth-yellow hover:text-cornsilk'
                  }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {selectedTime && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md mx-auto"
          >
            {/* Flex container for input fields */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-8 rounded-xl max-w-7xl mx-auto"> {/* Adjusted for side-by-side layout */}
              <div className="flex-1"> {/* Each input takes equal space */}
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-2 px-3" // Increased padding for a larger input
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="flex-1"> {/* Each input takes equal space */}
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-2 px-3" // Increased padding for a larger input
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <div className="flex-1"> {/* Each input takes equal space */}
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-2 px-3" // Increased padding for a larger input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            
            {/* Submit Button Below Inputs */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-tigers-eye text-cornsilk py-3 rounded-xl font-semibold shadow-lg transition-colors"
            >
              Confirm Booking
            </motion.button>
          </motion.form>
        )}

      </motion.div>
    </div>
  );
};

export default Booking;
