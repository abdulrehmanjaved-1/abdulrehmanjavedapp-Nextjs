import { fadeInUp, routeAnimation } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from "framer-motion"
import Head from "next/head"
const Resume = () => {
  
  return (
    <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate">
      {/* //! Education & Experience */}
      <Head>
        <title>Web Developer | Resume | Abdulrehman Javed</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Information Technology Engineering
            </h5>
            <p className="font-semibold">University of Management and Technology (2022-2026)</p>
            <p className="my-3">
              I am currently pursuing BS in Information Technology Engineering
              from UMT
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer </h5>
            <p className="font-semibold">Fiverr & Upwork</p>
            <p className="my-3">I don't know why I am doing this</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
