import { useHistory  } from 'react-router-dom'
import { useReducerContext } from '@/hooks/reducerContext'

export const Home = () => {
  const { dispatch, color } = useReducerContext()
  console.log(dispatch, color)
  console.log(useReducerContext())
  const history  = useHistory()
  const linkLogin = () => {
    history.push('/login')
  }
  return <div>
    <button onClick={linkLogin}>go login</button>
    <button onClick={() => {dispatch({type: 'change', payload: {color: 'blue'}})}}>change color</button>
    <p style={{color: color}}>文本颜色</p>
  </div>
}