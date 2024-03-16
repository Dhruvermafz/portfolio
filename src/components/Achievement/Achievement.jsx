import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import ImageViewer from "./ImageViewer";
import { achievementArray } from "./constants";
import AchievementCard from "./AchievementCard";
import "./Achievement.css";

function Achievement() {
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openImageViewer = (imageUrl) => {
    setCurrentImage(imageUrl);
    setViewerIsOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage("");
    setViewerIsOpen(false);
  };

  return (
    <>
      {achievementArray.length > 0 && (
        <div className="achievement" id="achievement">
          <div className="achievement-body">
            <h1>Achievements</h1>
            <h4>
              These are some of my achivements including Hackathons,
              Certifications. I am a full stack web developer. I have completed
              my graduation from the department of Computer Science and
              Engineering. I have a passion for web development and love to
              create web applications. I am a quick learner and always eager to
              learn new technologies. I am a hard-working person and always try
              to give my best effort to complete any task. I am a team player
              and love to work with a team. I am a self-motivated person and
              always try to motivate others.
            </h4>
          </div>
          <div className="achievement-cards">
            {achievementArray.map((achieve) => (
              <AchievementCard
                key={achieve.id}
                id={achieve.id}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                onClick={() => openImageViewer(achieve.image)}
              />
            ))}
          </div>
        </div>
      )}
      <ImageViewer
        isOpen={viewerIsOpen}
        onClose={closeImageViewer}
        imageUrl={currentImage}
      />
    </>
  );
}

export default Achievement;
