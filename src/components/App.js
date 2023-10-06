import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
    </div>
  );
};
