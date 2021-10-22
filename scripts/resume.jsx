/** @jsx React.DOM */

var Resume = React.createClass({
  getDefaultProps: function() {
    return {
      resumeData: {}
    };
  },
  render: function() {
    return (
      <div className="resume">
        <ResumeHeader
          name={this.props.resumeData.basics.name}
          phone={this.props.resumeData.basics.phone}
          email={this.props.resumeData.basics.email}
          website={this.props.resumeData.basics.website}
        />
        <h2 className="experience-heading">Experience</h2>
        <ResumeExperience work={this.props.resumeData.work} />
        <Skills skills={this.props.resumeData.skills} />
        <Education education={this.props.resumeData.education} />
      </div>
    );
  }
});

var ResumeHeader = React.createClass({
  render: function() {
    return (
      <div className="heading">
        <h1>{this.props.name}</h1>
        <small>
          {this.props.phone}
          <br />
          {this.props.email}
          <br />
          {this.props.website}
        </small>
      </div>
    );
  }
});

var ResumeExperience = React.createClass({
  render: function() {
    var nodes = this.props.work.map(function(work, index) {
      var startMonth = getMonthName(work.startDate);
      var endMonth = getMonthName(work.endDate);

      var items = work.highlights.map(function(highlight, index) {
        return <WorkExperienceItem item={highlight} />;
      });
      return (
        <div className="experience">
          <h3>
            {work.company}
            <small style={{ position: "inherit", marginLeft: 20 }}>
              ({work.position})
            </small>
          </h3>

          <small>
            {startMonth} - {endMonth}
          </small>
          {!!work.hide ||
            (work.hide !== true && (
              <div>
                <ul class="highlights">{items}</ul>
              </div>
            ))}
        </div>
      );
    });

    return <div className="work">{nodes}</div>;
  }
});

var WorkExperienceItem = React.createClass({
  render: function() {
    return <li>{this.props.item}</li>;
  }
});

var Skills = React.createClass({
  render: function() {
    var skills = this.props.skills.map(function(skill, index) {
      return <Skill skill={skill} />;
    });

    return (
      <div className="skills">
        <h2>Skills</h2>
        <ul className="skills">{skills}</ul>
      </div>
    );
  }
});

var Skill = React.createClass({
  render: function() {
    return <li>{this.props.skill.name}</li>;
  }
});

var Education = React.createClass({
  render: function() {
    var startMonth = getMonthName(this.props.education[0].startDate);
    var endMonth = getMonthName(this.props.education[0].endDate);

    return (
      <div className="education">
        <h2>Education</h2>
        <div className="institution">{this.props.education[0].institution}</div>
        <div className="when">
          {startMonth} - {endMonth}
        </div>
        <div className="degree">{this.props.education[0].studyType}</div>
      </div>
    );
  }
});
