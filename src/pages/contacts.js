import axios from 'axios';

export default function Contacts({ contacts }) {
  return (
    <>
      <h1>All Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.address}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      'mongodb+srv://aasha:aasha@cluster0.nyriqzn.mongodb.net/your-database-name?retryWrites=true&w=majority'
    );
    const contacts = response.data;
    return { props: { contacts } };
  } catch (error) {
    console.error(error);
    return { props: { contacts: [] } };
  }
}
