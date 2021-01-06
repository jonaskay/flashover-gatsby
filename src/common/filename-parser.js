module.exports = class FilenameParser {
  constructor(filename) {
    this.filename = filename
  }

  year() {
    this.validate()

    return this.filename.match(/^(?:\/\S+\/|\/)(\d+)-\d+-\d+-\S+\/$/)[1]
  }

  month() {
    this.validate()

    return this.filename.match(/^(?:\/\S+\/|\/)\d+-(\d+)-\d+-\S+\/$/)[1]
  }

  day() {
    this.validate()

    return this.filename.match(/^(?:\/\S+\/|\/)\d+-\d+-(\d+)-\S+\/$/)[1]
  }

  title() {
    this.validate()

    return this.filename.match(/^(?:\/\S+\/|\/)\d+-\d+-\d+-(\S+)\/$/)[1]
  }

  validate() {
    if (!/^(?:\/\S+\/|\/)\d+-\d+-\d+-\S+\/$/.test(this.filename)) {
      throw `${this.filename} is not a valid filename`
    }
  }
}
