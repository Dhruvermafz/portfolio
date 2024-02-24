import { MdWork as WorkIcon } from "react-icons/md";
import { FaSchool as SchoolIcon } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { education as timelineElements } from "./constants";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/education.css";

function Education() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="project-heading">
        <strong className="purple">Timeline</strong>
      </h1>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element.title}
                </a>
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.course_name}
              </h5>
              <p id="description">{element.from}</p>

              <p className="cgpa-percentage">{element.cgpa}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
