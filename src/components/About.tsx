import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cornsilk">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-pakistan-green mb-6">Welcome to Vastushodhan</h2>
              <p className="text-pakistan-green mb-6">
                Founded by <b>Shri Harish Chand Agarwal</b>, a distinguished retired UPSC officer and IIT Delhi alumnus, <b>our mission is to help you design spaces that nurture your goals and promote holistic well-being</b>. With years of experience and a deep understanding of Vastu principles, Shri Agarwal leads our team in providing personalized solutions that cater to your unique needs.
              </p>
              <p className="text-pakistan-green mb-6">
                Vastu Shastra emphasizes the importance of aligning our environments with the natural elements—<b>earth, water, fire, air, and space</b>. Each of these elements plays a crucial role in influencing our well-being, emotions, and success. By understanding the relationships between these elements and our living or working spaces, we can create environments that not only reflect our aspirations but also support our journey toward fulfillment and happiness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-pakistan-green mb-3">Our Commitment</h3>
                <p className="text-pakistan-green">
                  <b>Join us</b> on a journey to transform your space into a sanctuary that resonates with positivity, success, and well-being. <b>Together, we can create environments that inspire and uplift, helping you achieve your dreams and live in harmony with the world around you</b>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={`${import.meta.env.BASE_URL}1.jpg`}
              alt="Shri Harish Chand Agarwal"
              className="rounded-lg shadow-xl w-full object-cover h-[600px] object-top"
            />
            <div className="absolute inset-0 bg-purple-700 opacity-10 rounded-lg"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-dark-moss-green p-4 rounded-lg shadow-xl w-20 h-20"
            >
              <img src={`${import.meta.env.BASE_URL}logo.png`} className='max-w-full max-h-full'></img>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;