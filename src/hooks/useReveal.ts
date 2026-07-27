import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reveal = () => {
      node.classList.add('is-visible')
      node.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.unobserve(node)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
