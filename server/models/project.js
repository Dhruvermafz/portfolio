class ProjectModel {
  constructor({
    projectName,
    projectDescription,
    projectImage,
    projectTechUsed,
    projectType,
    projectGithubLink,
    projectLiveLink,
  }) {
    this.name = projectName;
    this.description = projectDescription;
    this.image = projectImage;
    this.projectTechUsed = projectTechUsed;
    this.projectType = projectType;
    this.projectGithubLink = projectGithubLink;
    this.projectLiveLink = projectLiveLink;
  }

  toJSON = () => {
    return {
      projectName: this.name,
      projectDescription: this.description,
      projectImage: this.image,
      projectTechUsed: this.projectTechUsed,
      projectType: this.projectType,
      projectGithubLink: this.projectGithubLink,
      projectId: Date.now(),
      projectLiveLink: this.projectLiveLink,
    };
  };
}

module.exports = ProjectModel;
