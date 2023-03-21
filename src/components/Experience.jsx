import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { experiences } from "../constants/constant";
import { sectionWrapper } from "../hoc";



const ExperienceCard = ({ experience }) => {
  return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full ">
					<img
						src={experience.icon}
						alt=""
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			{experience.date}
			<div>
				<h3 className="text-white font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
			</div>
      <ul className="mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point, index) => (
        <li key={`experience-point ${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
          </li>))}
      </ul>
		</VerticalTimelineElement>
	);
  
};
const Experience = () => { 
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>work Experience</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default sectionWrapper(Experience, "work");
