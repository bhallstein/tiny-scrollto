export function clamp(n, min, max) {
  n = Math.max(min, n)
  n = Math.min(max, n)
  return n
}

function ease_in_out_cubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

let interval
let start_t
let start_offset
const duration = 500

function timing_func(t) {
  t = ease_in_out_cubic(t)
  return clamp(t, 0, 1)
}

export function scroll(offset) {
  if (offset === 'end') {
    offset = document.body.scrollHeight - window.innerHeight
  }

  function tick() {
    const t = timing_func((performance.now() - start_t) / duration)
    const top = start_offset + (offset - start_offset) * t
    window.scrollTo({top})
    if (t === 1) {
      clearInterval(interval)
    }
  }

  clearInterval(interval)
  start_t = performance.now()
  start_offset = document.body.scrollTop
  interval = setInterval(tick, 20)
}
