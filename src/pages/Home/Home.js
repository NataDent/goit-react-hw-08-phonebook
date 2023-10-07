import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';

const Home = () => {
  return (
    <div>
      <h1>
        Hello! Here you can store your contacts!{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️🧏‍♀️📋🖍
        </span>
      </h1>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
    </div>
  );
};

export default Home;
