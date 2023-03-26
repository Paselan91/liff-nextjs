import { Table, Tbody, Td, Th, Thead, Tr, Button, Box, Link } from '@chakra-ui/react'

import { NextPage } from 'next'

// types/Reminder.ts
interface Reminder {
  id: number
  content: string
}

const reminders: Reminder[] = [
  { id: 1, content: 'リマインダーの内容 1' },
  { id: 2, content: 'リマインダーの内容 2' },
  // ...他のリマインダー
]

const Index: NextPage = () => {
  const onEdit = (index: number) => {
    alert(`Edit reminder with index ${index}`)
  }

  const onDelete = (index: number) => {
    alert(`Delete reminder with index ${index}`)
  }

  return (
    <Box p={6}>
      <Table mx='auto'>
        <Thead>
          <Tr>
            <Th>Reminder Text</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reminders.map((reminder, index) => (
            <Tr key={index}>
              <Td>
                <Link href={`/reminders/${index}`}>{reminder.content.substring(0, 50)}</Link>
              </Td>
              <Td>
                <Button onClick={() => onEdit(index)}>Edit</Button>
                <Button onClick={() => onDelete(index)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Index
