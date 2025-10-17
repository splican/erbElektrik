// Svelte action: adds/removes 'in-view' class when element intersects viewport
export function inview(node, options = {}) {
  const rootMargin = options.rootMargin ?? '0px 0px -10% 0px'
  const threshold = options.threshold ?? 0.15

  const obs = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // apply optional delay per element (for staggering)
        const delay = node.dataset && node.dataset.delay ? node.dataset.delay : null
        if (delay) node.style.transitionDelay = delay
        node.classList.add('in-view')
        if (options.once === true) obs.unobserve(node)
      } else if (options.once !== true) {
        node.classList.remove('in-view')
        node.style.transitionDelay = ''
      }
    }
  }, { rootMargin, threshold })

  obs.observe(node)

  return {
    destroy() {
      obs.unobserve(node)
      obs.disconnect()
    }
  }
}
