function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    addSkill: function(skill) {
      this.skills.push(skill);
    },
    removeSkill: function(skill) {
      this.skills = this.skills.filter(s => s !== skill);
    },
  };
}