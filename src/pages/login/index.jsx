import styled from '@emotion/styled'
import {css, cx} from '@emotion/css'
import { Link } from 'react-router-dom'
import { useReducerContext } from '@/hooks/reducerContext'

export const Login = () => {
  const { color } = useReducerContext()
  return <Test>
    <div className={cx(test, {[active]: true})}>
      <Link to="/home">go home</Link>
      <div style={{color}}>全局变量的颜色</div>
    </div>
  </Test>
}

const Test = styled.div`
  color: red;
`
const test = css`
  color: blue;
`
const active = css`
  color: green;
`