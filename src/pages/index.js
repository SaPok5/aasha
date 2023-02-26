import { useState } from 'react';
import axios from 'axios';
import styles from 'src/styles/contact.module.css';
import { useRouter } from 'next/router';
export default function Contact() {
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/contact', {
        name,
        address,
        phone,
      });
      console.log(response.data);
      router.push('/contacts');
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving your information.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        required
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />
        
        
      <button type="submit">Submit</button>
     
    </form>
  );
}
