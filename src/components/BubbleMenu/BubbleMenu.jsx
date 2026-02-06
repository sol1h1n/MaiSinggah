import './BubbleMenu.css'

export default function BubbleMenu({
  logo = null,
  items = [],
  menuBg = '#ffffff',
  menuContentColor = '#111111',
  useFixedPosition = false
}) {
  const posClass = useFixedPosition ? 'fixed' : 'absolute'

  return (
    <div className={`bubble-menu ${posClass}`} style={{ background: menuBg, color: menuContentColor }}>
      <div className="logo-bubble">
        <div className="logo-content">{logo}</div>
      </div>

      <div className={`bubble-menu-items ${posClass}`}>
        <ul className="pill-list">
          {items.map((it, idx) => (
            <li key={idx} className="pill-col">
              <a
                className="pill-link"
                href={it.href || '#'}
                aria-label={it.ariaLabel || it.label}
                style={{ ['--item-rot']: `${it.rotation || 0}deg` }}
              >
                <span className="pill-label">{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}