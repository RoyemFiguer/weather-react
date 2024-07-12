import styles from  "./App.module.css"
import Form from "./components/Form/Form"
import useWheather from "./hooks/useWeather"

function App() {

  const { fetchWeather} = useWheather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
      </div>
    </>
  )
}

export default App
