import { MultiSelect } from '@mantine/core'

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

const UserSelection = () => {
  return (
    <div>
      <MultiSelect className='user-select' data={data} />
    </div>
  )
}

export default UserSelection
