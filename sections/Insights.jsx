'use client';

import { motion } from "framer-motion";
import { insights } from '../constants'
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from '../components'


const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div  variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false ,amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insights"  textStyles="text-center"/>
      <TitleText title="Insights abouts metaverse"  textStyles="text-center"/>
      <div className="mt-[50px] flex flex-col gap-[30px] ">
        {insights.map((insight,index)=>(
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1} />
        ))}
      </div>
    </motion.div>
    Insights section
  </section>
);

export default Insights;
