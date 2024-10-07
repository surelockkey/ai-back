interface IFileContact {
  first_name: string;
  last_name?: string;
  phone?: string;
  guests_count?: number;
}

function mapGuests() {
  const file_contacts: IFileContact[] = [
    { first_name: 'Nazar', phone: '123', guests_count: 3 },
    { first_name: 'Nazar2', phone: '123', guests_count: 2 },
    { first_name: 'Nazar3', phone: '123', guests_count: 5 },
  ];

  const ready_contacts = [];

  file_contacts.forEach((c) => {
    const extra_guests = [];

    if (c.guests_count > 0) {
      for (let i = 0; i < c.guests_count; i++) {
        extra_guests.push({ first_name: `${c.first_name} + ${i + 1}` });
        console.log(`Iteration number: ${i + 1}`);
      }
    }
    ready_contacts.push({
      first_name: c.first_name,
      last_name: c.last_name,
      phone: c.phone,
      family_included: true,
      extra_guests,
    });
  });
}
