import { motion } from 'framer-motion';
import { siteData } from '@/data/siteData';

interface ReasonsListProps {}

const listVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function ReasonsList({}: ReasonsListProps) {
  return (
    <section id="reasons" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-dancing text-5xl text-gold mb-6">Few Reasons Why I Love You            (cuz you always love hearing this)</h2>
        </motion.div>
        
        <motion.ul
          className="max-w-4xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariants}
        >
          {siteData.reasonsToLove.map((reason, index) => (
            <motion.li
              key={index}
              className="text-xl text-off-white text-center bg-deep-navy/50 backdrop-blur-sm border border-accent-pink/20 rounded-lg p-6 shadow-lg"
              variants={itemVariants}
            >
              {reason}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}