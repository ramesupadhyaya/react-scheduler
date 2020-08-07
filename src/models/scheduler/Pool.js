export default class Pool {
  constructor(id, name, teams = []) {
    this.Id = id;
    this.Name = name;
    this.Teams = teams;
  }

  addTeam (team) {
    this.Teams.push(team);
  }
}
