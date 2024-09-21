'use client';

import React, { useState } from 'react';

const OSAForm = () => {
  const [code, setCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [guests, setGuests] = useState([
    { name: '', email: '', attending: 'yes', nights: [], song: '', message: '' },
  ]);

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code.toLowerCase() === 'jessiedean2025') {
      setIsCodeValid(true);
    } else {
      alert('Felaktig kod. Försök igen.');
    }
  };

  const handleAddGuest = () => {
    setGuests([...guests, { name: '', email: '', attending: 'yes', nights: [], song: '', message: '' }]);
  };

  const handleRemoveGuest = (index) => {
    const newGuests = guests.filter((_, i) => i !== index);
    setGuests(newGuests);
  };

  const handleChange = (index, field, value) => {
    const newGuests = [...guests];
    newGuests[index][field] = value;
    setGuests(newGuests);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/osa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guests }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Tack för din OSA!');
        setGuests([{ name: '', email: '', attending: 'yes', nights: [], song: '', message: '' }]);
        setIsCodeValid(false);
      } else {
        throw new Error(data.message || 'Något gick fel');
      }
    } catch (error) {
      console.error('Client Error:', error);
      alert(`Ett fel uppstod när OSA skulle skickas: ${error.message}`);
    }
  };

  if (!isCodeValid) {
    return (
      <form onSubmit={handleCodeSubmit} className="w-full mt-8 space-y-6">
        <div className="border p-4 rounded-lg">
          <h3 className="text-xl mb-4">Ange kod för att OSA</h3>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Ange kod"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Verifiera kod
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6">
      {guests.map((guest, index) => (
        <div key={index} className="border p-4 rounded-lg relative">
          <h3 className="text-xl mb-4">Gäst {index + 1}</h3>
          {guests.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveGuest(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              Ta bort
            </button>
          )}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Namn"
              value={guest.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="E-post"
              value={guest.email}
              onChange={(e) => handleChange(index, 'email', e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <div>
              <label className="block mb-2">Deltar du?</label>
              <select
                value={guest.attending}
                onChange={(e) => handleChange(index, 'attending', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="yes">Ja</option>
                <option value="no">Nej</option>
              </select>
            </div>
            {guest.attending === 'yes' && (
              <div>
                <label className="block mb-2">Vilka nätter önskar du bo över?</label>
                <div className="space-x-4">
                  <label>
                    <input
                      type="checkbox"
                      checked={guest.nights.includes('friday')}
                      onChange={(e) => {
                        const newNights = e.target.checked
                          ? [...guest.nights, 'friday']
                          : guest.nights.filter((night) => night !== 'friday');
                        handleChange(index, 'nights', newNights);
                      }}
                    />{' '}
                    Fredag-Lördag
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={guest.nights.includes('saturday')}
                      onChange={(e) => {
                        const newNights = e.target.checked
                          ? [...guest.nights, 'saturday']
                          : guest.nights.filter((night) => night !== 'saturday');
                        handleChange(index, 'nights', newNights);
                      }}
                    />{' '}
                    Lördag-Söndag
                  </label>
                </div>
              </div>
            )}
            <input
              type="text"
              placeholder="Önskelåt"
              value={guest.song}
              onChange={(e) => handleChange(index, 'song', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Meddelande (allergier, specialkost, etc.)"
              value={guest.message}
              onChange={(e) => handleChange(index, 'message', e.target.value)}
              className="w-full p-2 border rounded"
              rows="3"
            ></textarea>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddGuest}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Lägg till person
      </button>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4"
      >
        Skicka O.S.A.
      </button>
    </form>
  );
};

export default OSAForm;
