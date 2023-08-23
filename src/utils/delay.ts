export function delay(ms = 2000) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
  })
}
