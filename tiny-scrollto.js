export function clamp(n, min, max) {
  n = Math.max(min, n)
  n = Math.min(max, n)
  return n
}

function ease_in_out_cubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function timing_func(t) {
  t = ease_in_out_cubic(t)
  return clamp(t, 0, 1)
}

const s = {}

export function scroll(offset, body = window.document.body, win = window, duration = 500) {
  if (offset === 'end') {
    offset = body.scrollHeight - win.innerHeight
  }

  function tick() {
    const t = timing_func((performance.now() - s.start_t) / duration)
    const top = s.start_offset + (offset - s.start_offset) * t
    win.scrollTo({top})
    if (t === 1) {
      clearInterval(s.interval)
    }
  }

  clearInterval(s.interval)
  s.interval = setInterval(tick, 20)
  s.start_t = performance.now()
  s.start_offset = body.scrollTop
}
