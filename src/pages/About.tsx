import { useGlobalState } from "../utils/globalStates"

export default function About() {
  const { count } = useGlobalState()

  return (
    <div>
        <div>About</div>
        {count}
    </div>
  )
}