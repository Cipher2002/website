import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, startOfWeek, endOfWeek } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookingHero from './BookngHero';
import ServiceTypes from './AppointmentType'

// Define appointment types with their duration and selected state
const appointmentTypes = [
  { id: '1', title: 'Residential Vastu', duration: '1 hour', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', description: 'Transform your home into a sanctuary of peace and positivity' },
  { id: '2', title: 'Commercial Vastu', duration: '1 hour', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', description: 'Optimize your business space for success and prosperity' },
  { id: '3', title: 'Office Premises Vastu', duration: '1 hour', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80', description: 'Create a productive and harmonious workplace' },
  { id: '4', title: 'New Property Vastu', duration: '1 hour', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80', description: 'Make informed decisions for your new property investment' },
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

  useEffect(() => {
    const storedServiceId = localStorage.getItem('selectedServiceType');
    if (storedServiceId) {
      const matchedType = appointmentTypes.find((type) => type.id === storedServiceId);
      if (matchedType) {
        setSelectedType(matchedType);
      }
    }
  }, []);

  // Change the displayed month in the calendar
  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // Generate the days of the current month, including empty days at the beginning for alignment
  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);
  const startOfCalendar = startOfWeek(startOfCurrentMonth, { weekStartsOn: 0 }); // Start the week on Sunday
  const endOfCalendar = endOfWeek(endOfCurrentMonth);

  const days = eachDayOfInterval({
    start: startOfCalendar,
    end: endOfCalendar,
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

  const handleCurrentMonthClick = () => {
    const today = new Date();
    if (!isSameMonth(today, currentDate)) {
      setCurrentDate(today);
      setSelectedDate(today); // Optionally select today if it's not already selected
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <BookingHero />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8"
      >

        {/* Appointment Types */}
        {/* <div className="mb-8">
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
                    : 'bg-gray-50 text-pakistan-green hover:bg-earth-yellow hover:text-cornsilk'
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
        </div> */}
        <ServiceTypes
            services={appointmentTypes}
            selectedService={selectedType}
            onServiceSelect={setSelectedType}
          />

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4 max-w-full mx-auto"
        >
          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-8 rounded-xl w-full">
            <div className="flex-1">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                required
                className="mt-1 block w-full rounded-md shadow-sm focus:border-earth-yellow py-2 px-3"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                required
                className="mt-1 block w-full rounded-md shadow-sm focus:border-earth-yellow py-2 px-3"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full rounded-md shadow-sm focus:border-earth-yellow py-2 px-3"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
        </motion.form>

        {/* Centering the Calendar and Time Slots */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-8 rounded-xl max-w-7xl mx-auto user-select-none">
          {/* Calendar Section */}
          <div className="mb-8 flex-1 user-select-none">
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
                <h3 
                  className="text-lg font-medium cursor-pointer"
                  onClick={handleCurrentMonthClick} // Reset to current date
                >
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
                    whileHover={!isSameMonth(day, currentDate) ? undefined : { scale: 1.1 }}
                    whileTap={!isSameMonth(day, currentDate) ? undefined : { scale: 0.95 }}
                    onClick={() => isSameMonth(day, currentDate) && setSelectedDate(day)}
                      className={`p-2 rounded-full ${
                        !isSameMonth(day, currentDate) 
                          ? 'text-white cursor-default' // Unclickable and white text for non-current month days
                          : 'hover:bg-earth-yellow hover:text-cornsilk'
                      } ${
                        selectedDate && isSameDay(day, selectedDate)
                          ? 'bg-tigers-eye text-cornsilk'
                          : selectedDate === null && isSameDay(day, new Date()) // Highlight the current date only if no date is selected
                            ? 'bg-tigers-eye text-cornsilk font-bold' // Highlight for the current date
                            : 'text-pakistan-green' // Default color for current month days
                      }`}
                      disabled={!isSameMonth(day, currentDate)} // Disable button for non-current month days
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

        {/* Submit Button Below Inputs */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-tigers-eye text-cornsilk py-3 rounded-xl font-semibold shadow-lg transition-colors"
        >
          Confirm Booking
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Booking;
