import React, { useState, useEffect } from 'react';

function A11() {
  const [address, setAddress] = useState({
    phoneNumber: "978-435-1780",
    address: {
      houseNumber: "E-142/10",
      street: "Street 50", 
      district: "Garden Town",
      city: "Karachi", 
    },
  });

  const changeAddress = () => {
    setAddress({
      phoneNumber: "123-456-7890",
      address: {
        houseNumber: "A-101",
        street: "New Street",
        district: "New District",
        city: "New City",
      },
    });
  };

  return (
    <div>
      <button onClick={changeAddress}>Update state</button>
      <div>State: {JSON.stringify(address)}</div>
      {/* Include A11TitleUpdater here */}
      <A11TitleUpdater />
    </div>
  );
}

function A11TitleUpdater() {
  const [title, setTitle] = useState(0);

  useEffect(() => {

    if (title > 0) {
      console.log(`Title updated: ${title}`);
    }
  }, [title]); // This effect runs whenever title changes

  return (
    <div>
      <button onClick={() => setTitle(title + 1)}>+1</button>
    </div>
  );
}

export default A11;