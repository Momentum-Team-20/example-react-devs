export default function Developer({
  name,
  expertise,
  greeting,
  selectDev,
  exclamation,
  setExclamation,
  gitHub,
}) {
  const handleClick = () => {
    selectDev(name, gitHub)
  }
  return (
    <div>
      <h2>{name}</h2>

      <button onClick={handleClick}>Select</button>
    </div>
  )
}
