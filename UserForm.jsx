import React from 'react'
import { useState } from 'react';

export default function UserForm({onSubmit}) {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);}

  return (
    <div>
      <form onSubmit={handleSubmit}>
    <label>
    
    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
    </label>
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}
