import { TextInput, MultiSelect, Group, Button } from '@mantine/core'
import { modalData } from './modalData'

const CreateChannelForm = () => {
  return (
    <form>
      <TextInput sx={{ marginBottom: 20 }} label="Channel name" />
      <MultiSelect
        sx={{ marginBottom: 175 }}
        label="Add members"
        data={modalData}
        maxDropdownHeight={150}
        clearable
      />

      <Group grow>
        <Button type="submit">Create</Button>
      </Group>
    </form>
  )
}

export default CreateChannelForm
