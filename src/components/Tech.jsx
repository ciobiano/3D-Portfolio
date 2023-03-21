import { BallCanvas } from "./canvas"
import { sectionWrapper } from "../hoc"
import { technologies } from "../constants/constant"


const Tech = () => {
  return (
    <div  className="flex flx-row flex-wrap justify-center gap-10">
      {technologies.map((technologies) => (



        <div className="w-28 h-28 " key={technologies.name}>
          <BallCanvas  icon={technologies.icon}/>
        </div>
      )
      
      )}
    </div>
  )
}

export default Tech