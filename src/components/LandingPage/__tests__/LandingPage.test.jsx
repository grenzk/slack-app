import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from '../Header'
import Content from '../Content'
import SecondaryContent from '../SecondaryContent'
import Footer from '../Footer'

test('render header component', () => {
  render(<Header />)
})

test('render main content component', () => {
  render(<Content />)
})

test('render secondary content component', () => {
  render(<SecondaryContent />)
})

test('render footer component', () => {
  render(<Footer />)
})










