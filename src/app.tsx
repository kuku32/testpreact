import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  const imageArray = [
    "https://cdn.manhuaplus.org/2024/03/28/12-15-10-2037776221653929.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-11-2037776538502820.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-11-2037776791219027.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-11-2037776966621350.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-11-2037777175952628.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-12-2037777429608609.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-12-2037777624508431.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-12-2037777864910342.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-12-2037778076111979.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-13-2037778401880740.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-13-2037778642430711.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-13-2037778814475839.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-13-2037779079874234.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-14-2037779311209093.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-14-2037779558666266.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-14-2037779722405446.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-14-2037779941027787.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-14-2037780132546643.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-15-2037780320382413.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-15-2037780549536122.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-15-2037780773498887.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-15-2037781074833377.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-16-2037781297804888.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-16-2037781488711591.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-16-2037781696096471.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-16-2037781873943485.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-16-2037782146482793.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-17-2037782359698119.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-17-2037782664019522.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-17-2037782938269747.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-17-2037783237376936.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-18-2037783477593176.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-18-2037783701057729.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-18-2037783952607321.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-18-2037784270206535.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-19-2037784716277756.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-19-2037785068743650.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-20-2037785367657808.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-20-2037785782112836.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-20-2037786103604497.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-21-2037786335915230.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-21-2037786530887323.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-21-2037786783440219.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-21-2037786961508624.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-21-2037787106767059.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-22-2037787384189719.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-22-2037787623782766.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-22-2037787887738724.jpg",
    "https://cdn.manhuaplus.org/2024/03/28/12-15-23-2037788428679890.jpg",
    "https://i3.wp.com/manhuaplus.org/uploads/covers/infinite-archives.jpg",
    "https://i3.wp.com/manhuaplus.org/uploads/covers/emperor-s-domination.jpg",
    "https://i1.wp.com/manhuaplus.org/uploads/covers/invincible-after-100-years-of-seclusion.jpg",
    "https://i1.wp.com/manhuaplus.org/uploads/covers/i-m-the-great-immortal01.jpg?1698446959",
    "https://i1.wp.com/manhuaplus.org/uploads/covers/with-a-sword-domain-i-can-become-the-sword-saint.jpg",
    "https://i1.wp.com/manhuaplus.org/uploads/covers/i-can-crit-infinitely.jpg",
    "https://i0.wp.com/manhuaplus.org/uploads/covers/the-supreme-way.jpg",
    "https://i0.wp.com/manhuaplus.org/uploads/covers/after-improperly-licking-a-dog-i-became-a-billionaire.jpg"

  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> aadsfh;kadshafk
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <div>
      {imageArray.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
      </div>
    </>
  )
}
