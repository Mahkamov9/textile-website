import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    callTime: '',
    status: 'Simple',
    statusChangedTime: '',
    location: '',
    rejectReason: '',
    deadline: ''
  });

  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({
      id: '',
      name: '',
      callTime: '',
      status: 'Simple',
      statusChangedTime: '',
      location: '',
      rejectReason: '',
      deadline: ''
    });
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  const editUser = (id, updatedData) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, ...updatedData } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Mijozlar</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mijoz Ismi</th>
            <th>Qo'ng'iroq vaqti</th>
            <th>Holat</th>
            <th>Holat o'zgartirilgan vaqti</th>
            <th>Lokatsiya</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.callTime}</td>
              <td>
                <select
                  value={user.status}
                  onChange={(e) => editUser(user.id, { status: e.target.value, statusChangedTime: new Date() })}
                >
                  <option value="Simple">Simple</option>
                  <option value="Saved">Saved</option>
                  <option value="Uchrashuv belgilangan">Uchrashuv belgilangan</option>
                  <option value="Bog'lanib bo'lmagan">Bog'lanib bo'lmagan</option>
                  <option value="Rad etilgan">Rad etilgan</option>
                </select>
              </td>
              <td>{user.statusChangedTime}</td>
              <td>
                <input
                  type="text"
                  value={user.location}
                  onChange={(e) => editUser(user.id, { location: e.target.value })}
                />
              </td>
              <td>
                {user.status === 'Rad etilgan' && (
                  <input
                    type="text"
                    value={user.rejectReason}
                    onChange={(e) => editUser(user.id, { rejectReason: e.target.value })}
                  />
                )}
              </td>
              <td>
                {user.status === 'Rad etilgan' && (
                  <input
                    type="text"
                    value={user.deadline}
                    onChange={(e) => editUser(user.id, { deadline: e.target.value })}
                  />
                )}
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>O'chirish</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Yangi mijoz qo'shish</h2> 
        <input
          type="text"
          value={newUser.id}
          placeholder="ID"
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
        />
        <input
          type="text"
          value={newUser.name}
          placeholder="Mijoz Ismi"
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          value={newUser.callTime}
          placeholder="Qo'ng'iroq vaqti"
          onChange={(e) => setNewUser({ ...newUser, callTime: e.target.value })}
        />
        <button onClick={addUser}>Qo'shish</button>
      </div>
    </div>
  );
};

export default Users;
