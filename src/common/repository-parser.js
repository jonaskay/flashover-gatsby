module.exports = class RepositoryParser {
  constructor(repository) {
    this.repository = repository
  }

  url() {
    this.validate()

    return this.repository.match(
      /^(?:git\+)?((?:https|http):\/\/\S+[^(\.git)])(?:\.git)?$/i
    )[1]
  }

  validate() {
    if (
      !/^(?:git\+)?(?:https|http):\/\/\S+[^(\.git)](?:\.git)?$/i.test(
        this.repository
      )
    ) {
      throw `${this.repository} is not a valid repository`
    }
  }
}
