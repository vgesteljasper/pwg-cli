const chalk = require("chalk")
const pad = require("./pad.js")

module.exports = (payload) => {

  const settings = {}
  const paramSettings = {}

  const paramValues = []
  const nameValues = []

  // parse parameters
  for (let key in payload) {

    const { param, fallback, name } = payload[key]

    if (typeof param === "undefined" || isNaN(param) || param === null) {
      paramSettings[key] = { value: fallback, isFallback: true }
    } else {
      paramSettings[key] = { value: param, isFallback: false }
    }

    // add parameter to paramValues and name to nameValues
    paramValues.push(String(paramSettings[key].value))
    nameValues.push(name)
  }

  // calculate max param value and max name value
  const maxParamLength = paramValues.reduce((a, b) => a.length > b.length ? a : b).length
  const maxNameLength = nameValues.reduce((a, b) => a.length > b.length ? a : b).length

  // parse settings
  for (let key in payload) {

    const param = paramSettings[key].value
    const isFallback = paramSettings[key].isFallback
    const name = payload[key].name

    settings[key] = {
      value: param,
      string: `${pad(name, maxNameLength + 4)} ${chalk.yellow(pad(param, maxParamLength, "right"))}`
    }

    if (isFallback) {
      settings[key].string += `    ${chalk.magenta(`-> fallback`)}`
    }

  }

  return settings
}
