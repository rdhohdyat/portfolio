"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative mix-blend-lighten"
        >
          <Image
            priority
            quality={100}
            fill
            alt="Ridho Hidayat - Software Developer"
            src="/assets/photo.png"
            className="rounded-full object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
