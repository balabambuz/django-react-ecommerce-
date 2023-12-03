import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const AppearAnimation = ({ children }) => {
 return (
  <motion.div
    initial={{ opacity: 0}} //stato iniziale dell'animaione
    animate={{ opacity: 1}} //lo stato di animazione 1 quindi visibile
    exit={{ opacity: 0}} //lo stato di uscita della transizione quindi 0 (invisibile)
    transition={{ duration: 0.5 }}//le opzioni di transizione, una durata di 0.5 sec per animazione
  >
    {children}
  </motion.div>

 );
};

export default AppearAnimation;