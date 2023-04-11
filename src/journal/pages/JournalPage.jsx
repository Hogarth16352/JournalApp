import { IconButton, Typography } from "@mui/material";
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum atque dolorum sit. Ipsam magni culpa ex, fugiat, libero ducimus quidem, hic quaerat error in cumque deserunt laudantium inventore minus dolorum?</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size = 'large'
        sx = { {
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        } }
      >
        <AddOutlined sx = { { fontSize: 30 } } />
      </IconButton>

    </JournalLayout>
  )
}
