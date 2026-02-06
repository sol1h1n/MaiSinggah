import BubbleMenu from '../components/BubbleMenu/BubbleMenu'

const items = [
  {
    label: 'Home',
    href: '#home',
    rotation: -8
  },
  {
    label: 't2',
    href: '#picks',
    rotation: 8
  },
  {
    label: 't3',
    href: '#about',
    rotation: 8
  }
  
]

export default function Home() {
  return (
    <>
      <BubbleMenu
        logo={<strong>logo</strong>}
        items={items}
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
      />

      <main className="container" id="home">
        <h1></h1>
        <p>
        
        </p>
      </main>
    </>
  )
}
