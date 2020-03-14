import React, { useState } from 'react';
import Box from 'components/Box';

const AddNomineeForm = ({ setNominee }) => {
  const [id, setId] = useState('');
  const [votes, setVotes] = useState(0);
  return (
    <Box style={{ margin: 20 }}>
      <h1>Add Nominee</h1>
      <Box>
        <h3>Id</h3>
        <input value={id} onChange={e => setId(e.target.value)}></input>
        <h3>Votes</h3>
        <input value={votes} onChange={e => setVotes(e.target.value)}></input>
      </Box>
      <Box style={{ marginTop: 10 }}>
        <button onClick={() => setNominee({ id, votes })}>Create Event</button>
      </Box>
    </Box>
  );
};

export default AddNomineeForm;
